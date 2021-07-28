import SignIn from "../Components/SignIn";
import useFetchUsers from "../Hooks/useFetchUsers";


function LoginPage() {
    const users = useFetchUsers()

	return (
		<>
            <SignIn />
		</>
	);
}
export default LoginPage;
