/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import useStyles from "./style";
import Logo from "../assets/images/gotlancer-logo.png";
import TextField from "@material-ui/core/TextField";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) =>({
  navbar: {
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "2px solid grey",
    color: "grey",
    height: "60px",
  },

  navRight: {
    display: "flex",
    justifyContent: "space-around",
  },

  brandLogo: {
    display: "flex",

    "& > img": {
      maxWidth: "180px",
      minWidth: "80px",
      width: "100%",
      height: "auto",
    },
  },

  navbarLinks: {
    "& > ul": {
      margin: 0,
      padding: 0,
      display: "flex",
    },

    "& > ul > li": {
      listStyle: "none",
    },

    "& > ul > li > a": {
      textDecoration: "none",
      padding: "1rem",
      display: "block",
      color: 'grey',
    },
  },

  dropDown: {
    position: "absolute",
    top: "100%",
    width: "10rem",
    display: "none",
    
    "& > ul": {
      margin: 0,
      padding: 0,
      
    },

    "& > ul > li": {
      listStyle: "none",
      
    },
  },

  dropDownLink: {
    "& > a": {
      display: "flex",
      padding: ".5rem 1rem",
      fontSize: ".9rem",
      color: "grey",
      textDecoration: "none",
    },
  },

  dropDownIcon: {
    "& select":{
        fontSize: "1rem",
      },
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",

    "&  > li": {
      listStyle: "none",
    },
    "&  > li > a": {
      textDecoration: "none",
      display: "block",
      color: "grey",
    },
  },

  searchInputField: {
    width: "20%",
    paddingTop: "5px",
  },

  dropdown: {
   
    border: "none",
    background: "white",
    color: "grey",
    display: "block",
    padding: "1rem",
    textDecoration: "none",
    outline: 'none'
  },

  navleft: {
    
    "& > ul": {
      margin: 0,
      padding: 0,
      display: "flex",
    },

    "& > ul > li": {
      listStyle: "none",
    },

    "& > ul > li > a": {
      textDecoration: "none",
      padding: "1rem",
      display: "block",
      color: "grey",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className={classes.navRight}>
        <div className={classes.brandLogo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={classes.navbarLinks}>
          <ul>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Hire</a>
            </li>
            <li>
              <a href="#">Contets</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <div className={classes.dropDownIcon}>
              <li>
                <select name="cars" id="cars" className={classes.dropdown} >
                  <option value="">How it Works</option>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>
                </select>
              </li>
            </div>
            <div className={classes.dropDownIcon}>
              <li>
              <select name="cars" id="cars" className={classes.dropdown} >
                  <option value="">Help</option>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>
                </select>
              </li>
            </div>
          </ul>
        </div>
        <div className={classes.searchInputField}>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color = 'secondary'  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <ArrowDropDownIcon color = 'secondary' />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className={classes.navleft}>
        <ul>
          <div className={classes.dropDownIcon}>
            <LanguageIcon />
            <li>
              <a href="#">EN</a>
            </li>
            <ArrowDropDownIcon />
          </div>
          <li>
            <a href="#">SignUp</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
