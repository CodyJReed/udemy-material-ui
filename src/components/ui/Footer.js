import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: theme.palette.common.blue,
		width: "100%",
		position: "fixed",
		bottom: 0,
		zIndex: 1302,
	},
	adornment: {
		width: "25em",
		verticalAlign: "bottom",

		[theme.breakpoints.down("md")]: {
			width: "21em",
		},
		[theme.breakpoints.down("xs")]: {
			width: "15em",
		},
	},
	mainContainer: {
		position: "absolute",
	},
	link: {
		color: "#fff",
		fontFamily: "Arial",
		fontSize: ".75rem",
		fontWeight: "bold",
		textDecoration: "none",
	},
	gridItem: {
		margin: "3em",
	},
	icon: {
		width: "4em",
		height: "4em",
		[theme.breakpoints.down("xs")]: {
			height: "2.5em",
			width: "2.5em",
		},
	},
	socialContainer: {
		position: "absolute",
		marginTop: "-6em",
		right: "1.5em",
		[theme.breakpoints.down("xs")]: {
			right: "0.6em",
		},
	},
}));

export default function Footer({
	value,
	setValue,
	selectedIndex,
	setSelectedIndex,
}) {
	const classes = useStyles();

	const footerNav = {
		home: {
			name: "Home",
			link: "/",
			index: 0,
		},
		services: [
			{ name: "Services", link: "/services", index: 1, selected: 0 },
			{
				name: "Custom Software Development",
				link: "/customsoftware",
				index: 1,
				selected: 1,
			},
			{
				name: "Mobile App Development",
				link: "/mobileapps",
				index: 1,
				selected: 2,
			},
			{ name: "Website Development", link: "/websites", index: 1, selected: 3 },
		],
		revolution: [
			{ name: "The Revolution", link: "/revolution", index: 2 },
			{ name: "Vision", link: "/revolution", index: 2 },
			{ name: "Technology", link: "/revolution", index: 2 },
			{ name: "Process", link: "/revolution", index: 2 },
		],
		about: [
			{ name: "About Us", link: "/about", index: 3 },
			{ name: "History", link: "/about", index: 3 },
			{ name: "Team", link: "/about", index: 3 },
		],
		contact: {
			name: "Contact Us",
			index: 4,
			link: "/contact",
		},
	};

	const footerIcons = [
		{
			component: facebook,
			name: "facebook",
			link: "http://www.facebook.com",
		},
		{
			component: twitter,
			name: "twitter",
			link: "http://www.twitter.com",
		},
		{
			component: instagram,
			name: "instagram",
			link: "http://www.instagram.com",
		},
	];

	// Helper method to determine if arg is an Array
	const isArray = function (a) {
		return a.constructor === Array;
	};

	// Switch utilizing isArray...
	// will break if arg passed is neither an Object or Array
	const renderGrid = item => {
		switch (isArray(item)) {
			case false:
				return (
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								component={Link}
								to={item.link}
								item
								className={classes.link}
								onClick={() => setValue(item.index)}
							>
								{item.name}
							</Grid>
						</Grid>
					</Grid>
				);
			case true:
				return (
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							{item.map((route, index) => (
								<Grid
									item
									component={Link}
									to={route.link}
									key={index}
									className={classes.link}
									onClick={() => {
										if (item === "services") {
											setValue(item.index);
											setSelectedIndex(item.selected);
										} else {
											setValue(item.index);
										}
									}}
								>
									{route.name}
								</Grid>
							))}
						</Grid>
					</Grid>
				);
			default:
				break;
		}
	};

	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid
					container
					justify="center"
					spacing={3}
					className={classes.mainContainer}
				>
					{renderGrid(footerNav.home)}
					{renderGrid(footerNav.services)}
					{renderGrid(footerNav.revolution)}
					{renderGrid(footerNav.about)}
					{renderGrid(footerNav.contact)}
				</Grid>
			</Hidden>
			<img
				alt="black slash"
				src={footerAdornment}
				className={classes.adornment}
			/>
			<Grid
				container
				justify="flex-end"
				spacing={2}
				className={classes.socialContainer}
			>
				{footerIcons.map((icon, index) => (
					<Grid
						item
						component={"a"}
						href={icon.link}
						rel="noopener noreferrer"
						target="_blank"
						key={index}
					>
						<img
							src={icon.component}
							alt={`${icon.name} svg`}
							className={classes.icon}
						/>
					</Grid>
				))}
			</Grid>
		</footer>
	);
}
