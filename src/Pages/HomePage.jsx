import UserSection from "../Components/HomePage/UserSection";
import UserLogo from "../Components/HomePage/UserLogo";

function HomePage() {
	return (
		<div className="wrapper">
			<section className="userSection">
				<UserLogo width="100" />
			</section>
			<section className="accountSummary">
				<h2>Account Summary</h2>
				<hr></hr>
				<div className="sectionWrapper">
					<h3>Duncan Magill</h3>
					<h3>Customer Number:</h3>
					<h3>Last Login: </h3>
				</div>
			</section>
			<section className="quickTransfer">
				<h2>Quick Transfer</h2>
				<hr></hr>
			</section>
			<section className="accounts">
				<h2>Accounts</h2>
				<hr></hr>
				<h3>Account 1</h3>
				<div className="accountContainer">
					<div>
						<h4>Account No: 98761234</h4>
						<h4>Sort Code: 12-12-12</h4>
					</div>
                    <div className="balanceContainer">
                    <h4>Balance: £1234.97</h4>
                    </div>
				</div>
			</section>
		</div>
	);
}
export default HomePage;
