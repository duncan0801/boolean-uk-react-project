import useStore from "../../store";
import UserLogo from "./UserLogo";

function AccountButton() {
    const setModal = useStore((state) => state.setModal)
	return (
		<section className="userSection">
			<button onClick={() => setModal("account")}>
				<UserLogo width="100" />
			</button>
		</section>
	);
}
export default AccountButton
