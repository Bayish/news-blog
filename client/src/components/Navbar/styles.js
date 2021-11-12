import {makeStyles} from '@material-ui/core/styles';
import {deepPurple} from "@material-ui/core/colors";

export default makeStyles(theme => ({
    mainLink:{
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            color: 'inherit'
        }
    },
    staticToolbar : {
        marginBottom: theme.spacing(3)
    },

    heading: {
        maxWidth: '100%',
        fontSize: '28px',
        fontWeight: 'bold',
        textDecoration: 'none',
        textAlign: 'center',
        color: 'white',
    },
    [theme.breakpoints.down('sm')]: {
        heading: {
            color: 'white',
            textAlign: 'center',
            fontSize: '16px',
        },
    },
    align: {
        textAlign:"center"
    },
    [theme.breakpoints.down('xs')]: {
        staticToolbar : {
            marginBottom: theme.spacing(8)
        },
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
        profile: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    },
    userName: {
        display: 'flex',
        alignItems: 'center'
    },
    brandContainer: {
        display: "flex",
        anItems: 'center'
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    }
}))