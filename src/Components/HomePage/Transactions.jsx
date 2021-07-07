import Account from "./Account";
import "../../styles/Transactions.css";
import BooleanLogo from "./BooleanLogo";

function Transactions() {
	return (
		<section>
			<h2>Transaction History</h2>
			<hr />
			<section className="transactionsWrapper">
				<h3>Account Name</h3>
				<div className="account">
					<div className="logoContainer">
						<BooleanLogo />
					</div>
					<div className="accountDetails">
						<h4>
							<span className="lightWeight">Account No:</span>
							4234234
						</h4>
						<h4>
							<span className="lightWeight">Sort Code: </span>
							43423423
						</h4>
					</div>
					<div className="balanceContainer">
						<h4>£123</h4>
					</div>
				</div>
				<table class="transactionsTable">
					<thead>
						<tr>
							<th>Merchant</th>
							<th>Category</th>
							<th>Date</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Tesco</td>
							<td>Groceries</td>
							<td>04/07/2021</td>
							<td>-£12.75</td>
						</tr>
						<tr>
							<td>Tesco</td>
							<td>Groceries</td>
							<td>04/07/2021</td>
							<td>-£12.75</td>
						</tr>
					</tbody>
				</table>
				{/* <ul className="transactionsList">
					<li className="transaction">
						<span>Tesco</span>
						<span>Groceries</span>
						<span>04/07/2021</span>
						<span>£12.77</span>
					</li>
					<li className="transaction">
						<span>Starbucks</span>
						<span>Eating Out</span>
						<span>03/07/2021</span>
						<span>£4.95</span>
					</li>
					<li className="transaction">
						<span>Amazon</span>
						<span>Online Shopping</span>
						<span>02/07/2021</span>
						<span>£12.77</span>
					</li>
				</ul> */}
			</section>
		</section>
	);
}
export default Transactions;
