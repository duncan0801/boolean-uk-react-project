import { Button } from "@material-ui/core";
import "../styles/AccountModal.css";
import useStore from "../store";

function AccountModal() {
	const modal = useStore((state) => state.modal);
	const setActiveCustomer = useStore((state) => state.setActiveCustomer);
	const setModal = useStore((state) => state.setModal);

	if (modal === "") {
		return null;
	}
	if (modal === "account") {
		return (
			<div className="accountModal">
				<div className="modal">
					<Button className="close">X</Button>
					<div>
						<Button onClick={() => {setActiveCustomer(null)
                        setModal("")}
                    } variant="contained">LogOut</Button>
					</div>
				</div>
			</div>
		);
	}
}
export default AccountModal;
