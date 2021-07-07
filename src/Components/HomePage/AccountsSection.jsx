import Account from "./Account";

function Accounts() {
	return (
		<section className="accounts">
			<h2>Accounts</h2>
			<hr></hr>
			<Account
				accountName="Current Account"
				accountNumber={"11223344"}
				sortCode={"12-12-12"}
				balance={"12345.56"}
			/>
			<Account
				accountName="Saver Account"
				accountNumber={"87654321"}
				sortCode={"12-12-12"}
				balance={"100.00"}
			/>
		</section>
	);
}
export default Accounts
