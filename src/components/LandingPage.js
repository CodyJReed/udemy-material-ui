import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";

import animationData from "../animations/landinganimation/data";

const useStyles = makeStyles(theme => ({
	animation: {
		maxWidth: "50em",
		minWidth: "21em",
		marginTop: "2em",
		marginLeft: "10%",
	},
	estimateButton: {
		...theme.typography.estimate,
		backgroundColor: theme.palette.common.orange,
		borderRadius: 50,
		height: 45,
		width: 145,
		marginRight: 40,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
}));

export default function LandingPage() {
	const classes = useStyles();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<Grid container direction="column">
			<Grid item sm>
				<Grid container direction="row" justify="flex-end" alignItems="center">
					<Grid item>
						<Typography align="center" variant="h2">
							Bringing West Coast Technology
							<br />
							to the Midwest
						</Typography>
						<Grid
							container
							justify="center"
							className={classes.buttonContainer}
						>
							<Grid item>
								<Button className={classes.estimateButton} variant="contained">
									Free Estimate
								</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined">
									Learn More
									<ButtonArrow width={15} height={15} fill="red" />
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item sm className={classes.animation}>
						<Lottie options={defaultOptions} height={"100%"} width={"100%"} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
