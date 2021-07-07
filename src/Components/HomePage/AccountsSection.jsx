import useStore from "../../store";
import Account from "./Account";

function Accounts() {
	const activeCustomer = useStore((state) => state.activeCustomer);
	return (
		<section className="accounts">
			<h2>Accounts</h2>
			<hr></hr>
			{activeCustomer.accounts.map((account) => {
                console.log(activeCustomer.accounts)
				return (
					<Account
                        accId={account.id}
						accountName={account.accType}
						accountNumber={account.accNumber}
						sortCode={account.sortCode}
						balance={account.balance}
					/>
				);
			})}
		</section>
	);
}
export default Accounts;
