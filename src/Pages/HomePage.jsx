import { Route } from "react-router";
import QuickTransfer from "../Components/HomePage/QuickTransfer";
import UserSummary from "../Components/HomePage/UserSummary";
import Accounts from "../Components/HomePage/AccountsSection";
import AccountButton from "../Components/HomePage/AccountButton";
import MakeAPayment from "../Components/HomePage/MakeAPayment";
import Transactions from "../Components/HomePage/Transactions";
import useStore from "../store";
import {capitalise} from "../Helpers"

function HomePage() {
    const activeCustomer = useStore(state => state.activeCustomer)
    if(activeCustomer === null) {
        return null
    }
	return (
		<div className="wrapper">
			<AccountButton />
			<UserSummary
				name={capitalise(`${activeCustomer.firstName + " " + activeCustomer.lastName}`)}
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
                <Transactions/>
            </Route>
            
		</div>
	);
}
export default HomePage;
