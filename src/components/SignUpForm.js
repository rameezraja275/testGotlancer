/* eslint-disable jsx-a11y/anchor-is-valid */
import React from  'react';
// import useStyles from "./style";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    bodySection:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin: "80px 0",
    },
    paper: {
        display: "flex",
        justifyContent: "center",
        top:1,
        padding: '10px 20px 60px 20px',
        width:"40%",
    
    },
    divider:{
        marginTop: '50px',
        marginLeft: '170px'
        },
});

const SignUpForm = () => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const countries = [
        { code: 'AD', label: 'Andorra', phone: '376' },
        { code: 'AE', label: 'United Arab Emirates', phone: '971' },
        { code: 'AF', label: 'Afghanistan', phone: '93' },
        { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
        { code: 'AI', label: 'Anguilla', phone: '1-264' },
        { code: 'AL', label: 'Albania', phone: '355' }, 
        { code: 'DK', label: 'Denmark', phone: '45' },
        { code: 'DM', label: 'Dominica', phone: '1-767' },
        { code: 'DO', label: 'Dominican Republic', phone: '1-809' },
        { code: 'DZ', label: 'Algeria', phone: '213' },
        { code: 'EC', label: 'Ecuador', phone: '593' },
        { code: 'EE', label: 'Estonia', phone: '372' },
        { code: 'EG', label: 'Egypt', phone: '20' },
        { code: 'EH', label: 'Western Sahara', phone: '212' },
        { code: 'ER', label: 'Eritrea', phone: '291' },]


const classes = useStyles();

    return(
        <>
            <div className = {classes.bodySection}>
                <Paper elevation={3} className={classes.paper}>
                    <form className={classes.loginForm}>
                    <Divider variant="inset" width="25%" className={classes.divider}/>
                        <Box pl={22}><h1>SignUp</h1></Box>   
                    <Box className={classes.fields} mr={1} display={'inline'}>
                        <TextField
                            style={{ width: 215 }}
                            id="outlined-multiline-flexible"
                            label="First Name"
                            multiline
                            rowsMax={4}
                            // value={value}
                            // onChange={handleChange}
                            variant="outlined"
                        />
                    </Box>
                    <Box ml={1}  display={'inline'}>
                        <TextField
                            style={{ width: 215 }}
                            id="outlined-multiline-flexible"
                            label="Last Name"
                            multiline
                            rowsMax={4}
                            // value={value}
                            // onChange={handleChange}
                            variant="outlined"
                        />
                    </Box>
                    <Box my={2}  >
                        <Autocomplete
                            id="country-select-demo"
                            style={{ width: 446  }}
                            options={countries}
                            classes={{
                                option: classes.option,
                                }}
                                autoHighlight
                                getOptionLabel={(option) => option.label}
                                renderOption={(option) => (
                                <React.Fragment>
                                    {/* <span>{countryToFlag(option.code)}</span> */}
                                    {option.label} ({option.code}) +{option.phone}
                                </React.Fragment>
                                )}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select country"
                                    variant="outlined"
                                    inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                                )}
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            id="outlined-secondary"
                            style={{ width: 446  }}
                            label="Email"
                            variant="outlined"
                            color="grey"
                        />
                    </Box>
                    <Box mr={1} display={'inline'}>
                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                style={{ width: 215}}   
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                labelWidth={60}
                            />
                        </FormControl>
                    </Box>
                    <Box ml={1} display={'inline'}>
                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Conform Password</InputLabel>
                            <OutlinedInput
                                style={{ width: 215}}
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                labelWidth={60}
                            />
                        </FormControl>             
                    </Box>
                    <Box my={2} >
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="I accept the Gotlancer Term and Conditions"
                        labelPlacement="end"
                        />
                    </FormGroup>
                    </Box>
                    <Box my={2} pl={16}>
                        <Button color="primary" variant="contained">join with Gotlancer</Button>
                    </Box>
                    <Box my={2} pl={16} >
                        <span>Already have an accoun <a href="#">Signin</a></span>
                    </Box>
                    </form>
                </Paper>
            </div>
        </>
    );
}
export default SignUpForm;