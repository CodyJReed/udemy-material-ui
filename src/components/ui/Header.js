import React from "react";
import {
	AppBar,
	Toolbar,
	useScrollTrigger,
	Slide,
	Tabs,
	Tab,
	Button,
	Menu,
	MenuItem,
	useMediaQuery,
	useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function HideOnScroll(props) {
	const { children } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

// API Hook for custom 'inline' style use
const useStyles = makeStyles(theme => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em",
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em",
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: "1.25em",
		},
	},
	logo: {
		height: "8em",
		[theme.breakpoints.down("md")]: {
			height: "7em",
		},
		[theme.breakpoints.down("xs")]: {
			height: "5.5em",
		},
	},
	tabContainer: {
		marginLeft: "auto",
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px",
	},
	button: {
		...theme.typography.estimate,
		borderRadius: "50px",
		margin: "0 25px 0 50px",
		height: "45px",
	},
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: "#fff",
		borderRadius: "0px",
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			opacity: 1,
		},
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	const [value, setValue] = React.useState(0);
	const [anchor, setAnchor] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleChange = (e, value) => setValue(value);

	const handleClick = e => {
		setAnchor(e.currentTarget);
		setOpen(true);
	};

	const handleMenuClick = (e, i) => {
		setAnchor(null);
		setOpen(false);
		setSelectedIndex(i);
	};

	const handleClose = () => {
		setAnchor(null);
		setOpen(false);
	};

	const menuOptions = [
		{ name: "Services", link: "/services" },
		{ name: "Custom Software", link: "/customsoftware" },
		{ name: "Mobile App Development", link: "/mobileapps" },
		{ name: "Website Development", link: "/websites" },
	];

	React.useEffect(() => {
		switch (window.location.pathname) {
			case "/":
				if (value !== 0) {
					setValue(0);
				}
				break;
			case "/services":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(0);
				}
				break;
			case "/customsoftware":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(1);
				}
				break;
			case "/mobileapps":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(2);
				}
				break;
			case "/websites":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(3);
				}
				break;
			case "/revolution":
				if (value !== 2) {
					setValue(2);
				}
				break;
			case "/about":
				if (value !== 3) {
					setValue(3);
				}
				break;
			case "/contact":
				if (value !== 4) {
					setValue(4);
				}
				break;
			case "/estimate":
				if (value !== 5) {
					setValue(5);
				}
				break;
			default:
				break;
		}
	}, [value]);

	const tabs = (
		<React.Fragment>
			<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabContainer}
				indicatorColor="primary"
			>
				<Tab className={classes.tab} component={Link} to="/" label="Home" />
				<Tab
					onMouseOver={e => handleClick(e)}
					aria-owns={anchor && "simple-menu"}
					aria-haspopup={anchor && true}
					className={classes.tab}
					component={Link}
					to="/services"
					label="Services"
				/>
				<Tab
					className={classes.tab}
					component={Link}
					to="/revolution"
					label="The Revolution"
				/>
				<Tab
					className={classes.tab}
					component={Link}
					to="/about"
					label="About Us"
				/>
				<Tab
					className={classes.tab}
					component={Link}
					to="/contact"
					label="Contact Us"
				/>
				<Tab
					className={classes.tab}
					component={Link}
					to="/estimate"
					label="Estimate"
				/>
			</Tabs>
			<Button variant="contained" color="secondary" className={classes.button}>
				Free Estimate
			</Button>
			<Menu
				classes={{ paper: classes.menu }}
				id="simple-menu"
				anchorEl={anchor}
				open={open}
				onClose={handleClose}
				MenuListProps={{ onMouseLeave: handleClose }}
				elevation={0}
			>
				{menuOptions.map((option, index) => (
					<MenuItem
						key={index}
						component={Link}
						to={option.link}
						classes={{ root: classes.menuItem }}
						onClick={event => {
							handleMenuClick(event, index);
							setValue(1);
							handleClose();
						}}
						selected={index === selectedIndex && value === 1}
					>
						{option.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<HideOnScroll>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<Button
							disableRipple
							component={Link}
							to="/"
							className={classes.logoContainer}
							onClick={() => setValue(0)}
						>
							<img src={logo} className={classes.logo} />
						</Button>
						{!matches && tabs}
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
