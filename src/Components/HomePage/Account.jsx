import BooleanLogo from "./BooleanLogo";
import { Link } from "react-router-dom";
import {capitalise} from "../../Helpers.js"

function Account({ accountName, accountNumber, sortCode, balance }) {
 
	return (
		<div className="accountContainer">
			<h3>{capitalise(accountName)}</h3>
			<div className="logoContainer">
				<BooleanLogo />
			</div>
			<div className="accountDetails">
				<h4>
					<span className="lightWeight">Account No:</span>
					{accountNumber}
				</h4>
				<h4>
					<span className="lightWeight">Sort Code: </span>
					{sortCode}
				</h4>
			</div>
			<div className="balanceContainer">
				<h4>£{balance}</h4>
			</div>
			<div className="actions">
				<Link>Make a Payment</Link>
				<Link>View Transcation History</Link>
			</div>
		</div>
	);
}
export default Account;
