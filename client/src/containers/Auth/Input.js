import React from 'react';
import {Grid, IconButton, InputAdornment, TextField} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const Input = ({handleChange, autoFocus, type, handleShowPassword, label,  name, half, autoComplete, value}) => {
    return (
        <>
            <Grid item xs={12} sm={half ? 6 : 12}>
                <TextField
                    autoComplete={autoComplete}
                    name={name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    label={label}
                    value={value}
                    autoFocus={autoFocus}
                    type={type}
                    InputProps={name === 'password' ? {
                        endAdornment: (
                            <InputAdornment position="end">
                               <IconButton onClick={handleShowPassword}>
                                   {type === "password" ? <Visibility/> : <VisibilityOff/>}
                               </IconButton>
                            </InputAdornment>
                        )
                    } : null}
                />
            </Grid>
        </>
    );
};

export default Input;