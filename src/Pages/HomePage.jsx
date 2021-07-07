import UserSection from "../Components/HomePage/UserSection";
import UserLogo from "../Components/HomePage/UserLogo";
import Account from "../Components/HomePage/Account";
import { Route } from "react-router";
import QuickTransfer from "../Components/HomePage/QuickTransfer";
import UserSummary from "../Components/HomePage/UserSummary";
import Accounts from "../Components/HomePage/AccountsSection";
import AccountButton from "../Components/HomePage/AccountButton";
import MakeAPayment from "../Components/HomePage/MakeAPayment";
import Transactions from "../Components/HomePage/Transactions";
import AccountModal from "../Modals/Account";

function HomePage() {
	return (
		<div className="wrapper">
			<AccountButton />
			<UserSummary
				name={"Duncan Magill"}
				customerNumber={"00000004"}
				lastLogin="13 May 08:00 GMT"
			/>
			<QuickTransfer />
			<Route exact path="/home">
				<Accounts />
			</Route>
			<Route exact path="/home/account/:id">
				<MakeAPayment />
			</Route>
            <Route exact path="/home/account/:id/transactions">
                <Transactions/>
            </Route>
            
		</div>
	);
}
export default HomePage;
