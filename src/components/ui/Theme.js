import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0b72b9";
const arcOrange = "#ffba60";
const arcGrey = "#868686";

export default createMuiTheme({
	palette: {
		common: {
			blue: arcBlue,
			orange: arcOrange,
		},
		primary: {
			main: arcBlue,
		},
		secondary: {
			main: arcOrange,
		},
	},
	typography: {
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: "700",
			fontSize: "1rem",
		},
		estimate: {
			fontFamily: "Pacifico",
			fontSize: "1rem",
			textTransform: "none",
			color: "#fff",
		},
		h2: {
			fontFamily: "Raleway",
			color: arcBlue,
			fontWeight: "700",
			fontSize: "2.5rem",
			lineHeight: 1.5,
		},
		h3: {
			fontFamily: "Pacifico",
			fontSize: "2.5rem",
			color: arcBlue,
		},
		h4: {
			fontFamily: "Raleway",
			fontSize: "1.75rem",
			color: arcBlue,
			fontWeight: 700,
		},
		subtitle1: {
			fontSize: "1.25rem",
			fontWeight: 300,
			color: arcGrey,
		},
		subtitle2: {
			color: "#fff",
			fontSize: "1.25em",
			fontWeight: 300,
		},
		learnButton: {
			borderColor: arcBlue,
			color: arcBlue,
			borderWidth: 2,
			textTransform: "none",
			borderRadius: 50,
			fontfamily: "Roboto",
			fontWeight: "bold",
		},
	},
	overrides: {
		MuiInputLabel: {
			root: {
				color: arcBlue,
				fontSize: "1rem",
			},
		},
		MuiInput: {
			underline: {
				"&:before": {
					borderBottom: `2px solid ${arcBlue}`,
				},
				"&:hover:not($disabled):not($focused):not($error):before": {
					borderBottom: `2px solid ${arcBlue}`,
				},
			},
		},
	},
});
