import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import useStore from "../../store";
import "../../styles/MakeAPayment.css";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import Select from "@material-ui/core/Select";
import useFetchAccounts from "../../Hooks/useFetchAccounts";
import { useParams } from "react-router-dom";
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";

function MakeAPayment() {
    const history = useHistory()
	const { accountId } = useParams();
	const activeCustomer = useStore((state) => state.activeCustomer);
	const setOutgoingAccountBalance = useStore(
		(state) => state.setOutgoingAccountBalance
	);
	const setIngoingAccountBalance = useStore(
		(state) => state.setIngoingAccountBalance
	);
	const accounts = useStore((state) => state.accounts);
	const setSelectedAccount = useStore((state) => state.setSelectedAccount);
	const selectedAccount = useStore((state) => state.selectedAccount);

	setSelectedAccount(accountId);

	function handlePaymentSubmit(amount, targetAccNumber) {
		let numberAmount = Number(amount);

		let ingoingAccount = accounts.find((account) => {
			return account.accNumber === targetAccNumber;
		});
		let outgoingAccount = accounts.find((account) => {
			return account.id === Number(selectedAccount);
		});


		fetch(`http://localhost:4000/accounts/${ingoingAccount.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				balance: (ingoingAccount.balance + numberAmount).toFixed(2),
			}),
		})
			.then(
				fetch(`http://localhost:4000/accounts/${accountId}`, {
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						balance:( outgoingAccount.balance - numberAmount).toFixed(2),
					}),
				})
			)
			.then((resp) => (resp.ok ? alert("success") : alert("fail")))
			.then(() =>
				{
                    setOutgoingAccountBalance(
					accounts,
					outgoingAccount.balance,
					numberAmount,
					outgoingAccount.id
				)
                history.push("/home")
            }
			)
	}
	return (
		<section>
			<h2>Make A Payment</h2>
			<hr />
			<div>
				<form
					className="paymentForm"
					onSubmit={(event) => {
						event.preventDefault();
						console.log(event.target.amount.value);
						handlePaymentSubmit(
							event.target.amount.value,
							event.target.contacts.value
						);
					}}
				>
					<div className="contacts">
						<label className="label">
							Pay A Contact:
							<Select
								onChange={(event) =>
									console.log(
										"Sending to account No.  ",
										event.target.value
									)
								}
								className="input"
								name="contacts"
								id=""
							>
								<option value="">Choose a contact...</option>
								{activeCustomer.contacts.map(
									(contact, index) => {
										return (
											<option
												key={index}
												value={contact.accountNumber}
											>
												{contact.name}
											</option>
										);
									}
								)}
							</Select>
						</label>
					</div>
					{/* <div className="newContact">
						<TextField
                        className="input"
							label="First Name "
							color="secondary"
							variant="filled"
						/>
						<TextField
                        className="input"
							color="secondary"
							label="Last Name "
							variant="filled"
						/>
						<TextField
                        className="input"
							color="secondary"
							label="Account No."
							variant="filled"
						/>
						<TextField
                        className="input"
							color="secondary"
							label="Sort Code"
							variant="filled"
						/>
					</div> */}
					<div className="amount">
						<CurrencyTextField
							name="amount"
							label="Amount"
							variant="filled"
							outputFormat="string"
							currencySymbol="£"
							className="input"
						/>
						<Button
							color="secondary"
							variant="contained"
							type="submit"
						>
							{"Send >"}
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
export default MakeAPayment;
