/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useStyles from "./style";
import NavBar from '../../components/NavBar';
import SignUpForm from '../../components/SignUpForm';
import Footer from '../../components/Footer';

const MainPage = () => {
 
const classes = useStyles();

    return(
        <>
        <div className={classes.container}>
            <NavBar/>
            <SignUpForm/>
            <Footer/>
        </div>  
        </>
    );
}
export default MainPage;