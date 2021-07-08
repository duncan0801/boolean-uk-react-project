import { Route } from "react-router";
import QuickTransfer from "../Components/HomePage/QuickTransfer";
import UserSummary from "../Components/HomePage/UserSummary";
import Accounts from "../Components/HomePage/AccountsSection";
import AccountButton from "../Components/HomePage/AccountButton";
import MakeAPayment from "../Components/HomePage/MakeAPayment";
import Transactions from "../Components/HomePage/Transactions";
import useStore from "../store";
import { capitalise } from "../Helpers";

function HomePage() {
	const activeCustomer = useStore((state) => state.activeCustomer);
	function getTime() {
		let current = new Date();
		let cDate =
			current.getFullYear() +
			"-" +
			(current.getMonth() + 1) +
			"-" +
			current.getDate();
		let cTime =
			current.getHours() +
			":" +
			current.getMinutes() +
			":" +
			current.getSeconds();
		let dateTime = cDate + ", " + cTime;
        console.log(dateTime)

        return dateTime
	}

	function postLoginTime() {
        fetch(`http://localhost:4000/users/${activeCustomer.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "lastLogin": getTime()
            })
        })
    }
    postLoginTime()
	if (activeCustomer === null) {
		return null;
	}
	return (
		<div className="wrapper">
			<AccountButton />
			<UserSummary
				name={capitalise(
					`${
						activeCustomer.firstName + " " + activeCustomer.lastName
					}`
				)}
				customerNumber={activeCustomer.customerNumber}
				lastLogin={activeCustomer.lastLogin}
			/>
			<QuickTransfer />
			<Route exact path="/home">
				<Accounts />
			</Route>
			<Route exact path="/home/account/:accountId">
				<MakeAPayment />
			</Route>
			<Route exact path="/home/account/:accountId/transactions">
				<Transactions />
			</Route>
		</div>
	);
}
export default HomePage;
