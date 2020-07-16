import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Slide from "@material-ui/core/Slide";
import CssBaseline from "@material-ui/core/CssBaseline";

// function ElevationScroll(props) {
//   const { children } = props;

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,

//   window: PropTypes.func,
// };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  tab: {
    fontFamily: "Rambla",
    fontWeight: 700,
    fontSize: "1rem",
  },
  backHome: {
    padding: 0,
    fontFamily: "Rambla",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: "theme.palette.secondary.main",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "black",
    fontFamily: "Rambla",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/chart" && value !== 1) {
      setValue(1);
    }
  }, [value]);

  const tabs = [
    <>
      <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          className={classes.tab}
          component={Link}
          to="/chart"
          label="Chart"
        />
      </Tabs>
    </>,
  ];

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        className={classes.drawer}
      >
        <List disablePadding>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/chart"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Covid Chart
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon />
      </IconButton>
    </>
  );
  return (
    <>
      <HideOnScroll className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography className={classes.title} variant="h6">
              <Button
                className={classes.backHome}
                onClick={() => setValue(0)}
                component={Link}
                to="/"
                disableRipple
              >
                Naija Covid-19 Stats
              </Button>
            </Typography>
            {matches ? drawer : tabs}
            {/* <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Button>Home</Button>
              </Link>
              <Link
                to="/chart"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Button>Chart</Button>
              </Link> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
