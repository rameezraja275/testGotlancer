/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LanguageIcon from "@material-ui/icons/Language";
import Divider from "@material-ui/core/Divider";
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
// import useStyles from '../pages/MainPage/style';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  links: {
    background: "#f2f2f2",
    color: "#616161",
    fontSize: "12px",
  },
  mRL: {
    maxWidth: "1355px",
    margin: "0 auto",
  },
  linksInner: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "10px",
    alignItems: "flex-start",
    justifyContent: "center",
    
    "& > ul > li": {
      lineHeight: "2.8",
      listStyle: "none",
    },
    "& > ul > li > a": {
      textDecoration: "none",
      display: "block",
      color: "grey",
      
    },
    "& ul": {
        padding: "0px"
    },
  },
  footer: {
    display: "flex",
    alignIitems: "center",
    justifyContent: "space-between",
    "& > div": {
      display: "flex",
      alignItems: "center",
    },
    "& > div > i": {
      marginRight: "10px",
    },
    "& > div > ul": {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      
    },
    "& > div > ul > li": {
      marginRight: "30px",
      marginBottom: "20px",
    },
    "& > div > ul > li > a": {
      textDecoration: "none",
      display: "block",
      color: "grey",
      padding: "1rem 0px" 
    },
    "& ul": {
        padding: "0px"
    },
  },
  divider: {
    marginTop: "50px",
    marginLeft: "215px",
  },

  footerRight: {
    "& > span > a ": {
      textDecoration: "none",
      color: "grey",
    },
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <section className={classes.links}>
        <div className={classes.mRL}>
          <div className={classes.linksInner}>
            <ul>
              <li>
                <h3>Network</h3>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Network</h3>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Network</h3>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Network</h3>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Network</h3>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
            </ul>
          </div>
          <Divider variant="inset" width="75%" className={classes.divider} />
          <footer className={classes.footer}>
            <div className={classes.footerLeft}>
              <ul>
                <li>
                  <a href="#">Privacy </a>
                </li>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Trademarks</a>
                </li>
              </ul>
            </div>
            <div className={classes.footerRight}>
              <LanguageIcon />
              <span>
                <a href="#">
                  <h2>EN</h2>
                </a>
              </span>
              <ArrowDropDownIcon />
              <AppleIcon />
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};
export default Footer;
