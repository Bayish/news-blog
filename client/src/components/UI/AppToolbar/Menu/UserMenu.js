import React, {useState} from 'react';
import {Avatar, Button, Menu, MenuItem, Typography} from "@material-ui/core";

const UserMenu = ({user, classes, logOut}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
                <div className={classes.profile}>
                    <Avatar className={classes.purple}
                            alt={user?.result.name}
                            src={user?.result.imageUrl}
                    >
                        {user?.result.name.charAt(0)}
                    </Avatar>
                    <Typography
                        className={classes.userName}
                        variant="h6"
                    >
                        {user.result.name}
                    </Typography>
                </div>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>My account</MenuItem>
                <MenuItem><Button
                    variant="contained"
                    color="secondary"
                    onClick={logOut}
                >
                    Logout
                </Button></MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;