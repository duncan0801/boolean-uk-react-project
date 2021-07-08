import { Button } from "@material-ui/core";
import useStore from "../../store";

function QuickTransfer() {
    const accounts = useStore(state => state.accounts)
    const activeCustomer =  useStore(state => state.activeCustomer)

    let userAccountsCount = 0
    accounts.map((account) => {
        if(account.id ===  activeCustomer.id) {
            console.log(account.id)
            console.log(activeCustomer.id)
            console.log(account.id ===  activeCustomer.id)
            userAccountsCount = ++userAccountsCount
        }
        return
    })
   
    console.log(userAccountsCount)
   
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