import { Button } from "@material-ui/core";
import "../styles/AccountModal.css";

function AccountModal() {
	return (
		<div className="accountModal">
			<div className="modal">
				<Button className="close">X</Button>
				<div>
					<Button variant="contained">LogOut</Button>
				</div>
			</div>
		</div>
	);
}
export default AccountModal;
