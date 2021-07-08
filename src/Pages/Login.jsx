import SignIn from "../Components/SignIn";
import useFetchUsers from "../Hooks/useFetchUsers";


function LoginPage() {
    const users = useFetchUsers()
    //1. Have a user state
    //2. Have an accounts satate
    //   a. update 
   
	return (
		<>
            <SignIn />
		</>
	);
}
export default LoginPage;
