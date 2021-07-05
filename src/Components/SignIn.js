import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useStore from "../store";

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
		backgroundColor: "#0077B6",
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
	const classes = useStyles();
	const handleChangeCN = useStore((state) => state.handleChangeCN);
	const handleChangePassword = useStore(
		(state) => state.handleChangePassword
	);
    const customerNumber = useStore((state) => state.customerNumberInput);
    const passwordInput = useStore((state) => state.passwordInput);

	function handleLoginSubmit(event) {
		event.preventDefault();


		if (
			customerNumber === event.target.customerNumber.value &&
			passwordInput === event.target.password.value
		) {
			console.log("match");
		}
		console.log(event);
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
					onSubmit={handleLoginSubmit}
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
						color="#08DC68"
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
