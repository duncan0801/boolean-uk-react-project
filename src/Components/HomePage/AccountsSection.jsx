import useFetchAccounts from "../../Hooks/useFetchAccounts";
import useStore from "../../store";
import Account from "./Account";
import useFetchUserAccounts from "../../Hooks/useFetchUserAccounts";

function Accounts() {
	const activeCustomer = useStore((state) => state.activeCustomer);
    const [accounts, setAccounts] = useFetchAccounts();
    console.log(accounts)

    function filterAccounts() {
        let filteredAccounts = accounts.filter((account) => account.id === activeCustomer.id)
        setAccounts(filteredAccounts)
        return filteredAccounts
    }

	if (accounts.length === 0) {
		return null;
	} if(accounts.length > 0) {
		return (
			<section className="accounts">
				<h2>Accounts</h2>
				<hr></hr>
				{accounts.map((account, index) => {
					if(account.id === activeCustomer.id) {
                        return (
                            <Account
                                key={index}
                                userId={account.userId}
                                accId={account.id}
                                accountName={account.accType}
                                accountNumber={account.accNumber}
                                sortCode={account.sortCode}
                                balance={account.balance}
                            />
                        );
                    }
					
				})}
			</section>
		);
	}
}
export default Accounts;
