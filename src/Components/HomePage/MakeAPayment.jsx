import { Button, Input } from "@material-ui/core";
import "../../styles/MakeAPayment.css";

function MakeAPayment() {
	return (
		<section>
			<h2>Make A Payment</h2>
			<hr />
			<div >
				<form className="paymentForm">
					<div className="contacts">
						<label>
							Pay A Contact:
							<select name="" id="">
								<option value="">Choose a contact...</option>
							</select>
						</label>
					</div>
					<div className="newContact">
						<Input color="primary" type="text" placeholder="First Name" />
						<Input color="primary" type="text" placeholder="Last Name" />
						<Input color="primary" type="number" placeholder="Account No." />
						<Input color="primary" type="text" placeholder="Sort Code" />
					</div>
					<div className="amount">
						<Input type="text" />
						<Button color="secondary" variant="contained" type="submit">Send ></Button>
					</div>
				</form>
			</div>
		</section>
	);
}
export default MakeAPayment;
