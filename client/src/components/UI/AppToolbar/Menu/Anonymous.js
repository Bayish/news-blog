import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const Anonymous = () => {
    return (
        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
    );
};

export default Anonymous;