import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Formik, Form, Field } from "formik";

import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${background})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		paddingBottom: "10em",
	},
	message: {
		border: `2px solid ${theme.palette.common.blue}`,
		marginTop: "5em",
		borderRadius: 5,
	},
	sendButton: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 45,
		width: 245,
		fontSize: "1rem",
		backgroundColor: theme.palette.common.orange,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
}));

export default function Contact() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid container direction="row">
			<Grid
				item
				container
				direction="column"
				justify="center"
				alignItems="center"
				lg={4}
				xl={3}
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h2" style={{ lineHeight: 1 }}>
								Contact Us
							</Typography>
							<Typography
								variant="body1"
								style={{ color: theme.palette.common.blue }}
							>
								We're waiting.
							</Typography>
						</Grid>
						<Grid item container>
							<Grid item>
								<img
									src={phoneIcon}
									alt="phone"
									style={{ marginRight: "0.5em" }}
								/>
							</Grid>
							<Grid item>
								<Typography
									variant="body1"
									style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
								>
									(555) 555-5555
								</Typography>
							</Grid>
						</Grid>

						<Grid item container>
							<Grid item>
								<img
									src={emailIcon}
									alt="envelope"
									style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
								/>
							</Grid>
							<Grid item>
								<Typography
									variant="body1"
									style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
								>
									zachary@gmail.com
								</Typography>
							</Grid>
						</Grid>
						<Grid item container style={{ maxWidth: "20em" }}>
							{/* -----Form Block---- */}
							<Formik
								initialValues={{ name: "", email: "", phone: "", message: "" }}
								onSubmit={values => console.log(values)}
								children={() => (
									<Form>
										<Grid item>
											<Field component={TextField} label="Name" id="name" />
										</Grid>
										<Grid item>
											<Field component={TextField} label="Email" id="email" />
										</Grid>
										<Grid item>
											<Field component={TextField} label="Phone" id="phone" />
										</Grid>
										<Grid item style={{ maxWidth: "20em" }}>
											<Field
												InputProps={{ disableUnderline: true }}
												component={TextField}
												className={classes.message}
												id="message"
												multiline
												rows={10}
											/>
										</Grid>
										<Grid item container justify="center">
											<Button
												variant="contained"
												className={classes.sendButton}
											>
												Send Message
												<img
													style={{ marginLeft: "1em" }}
													src={airplane}
													alt="paper airplane"
												/>
											</Button>
										</Grid>
									</Form>
								)}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container className={classes.background} lg={8} xl={9}></Grid>
		</Grid>
	);
}
