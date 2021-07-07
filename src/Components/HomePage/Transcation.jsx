import { capitalise } from "../../Helpers";

function Transaction({vendorName, category, date, price, type}) {
	return (
		<tr>
			<td>{capitalise(vendorName)}</td>
			<td>{capitalise(category)}</td>
			<td>{date}</td>
			<td>{type === "outgoing" ? `-£${price}`: `£${price}`}</td>
		</tr>
	);
}
export default Transaction
