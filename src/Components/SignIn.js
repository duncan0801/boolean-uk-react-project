import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useStore from "../store";
import UserSection from "./HomePage/UserSection";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Bank of Boolean
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: "#primary",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
    const users = useStore(state=> state.users)
	const classes = useStyles();
	const handleChangeCN = useStore((state) => state.handleChangeCN);
	const handleChangePassword = useStore(
		(state) => state.handleChangePassword
	);
	const customerNumber = useStore((state) => state.customerNumberInput);
	const passwordInput = useStore((state) => state.passwordInput);
    const setActiveCustomer = useStore((state) => state.setActiveCustomer)

	function handleLogin(event) {
		event.preventDefault();

        users.map((user) => {
            if(event.target.customerNumber.value === user.customerNumber && event.target.password.value === user.password) {
                console.log("match");
                setActiveCustomer(user)
            }
            else {
                console.log("no match")
            }
        })
       
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form
					className={classes.form}
					onSubmit={handleLogin}
					noValidate
				>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="customerNumber"
						label="Customer Number"
						name="customerNumber"
						autoComplete="number"
						autoFocus
						onChange={handleChangeCN}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChangePassword}
					/>
					{/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs></Grid>
						<Grid item></Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
}
