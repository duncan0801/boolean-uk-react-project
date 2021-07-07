import { Button } from "@material-ui/core";

function QuickTransfer() {
	return (
		<section className="quickTransfer">
			<h2>Quick Transfer</h2>
			<hr></hr>
			<form className="transferForm">
				<select name="from" id="from" placeholder="From...">
					<option value="">From...</option>
				</select>
				<select name="to" id="to" placeholder="To...">
					<option value="">To...</option>
				</select>
				<Button color="secondary" variant="contained" type="submit">
					Transfer
				</Button>
			</form>
		</section>
	);
}
export default QuickTransfer