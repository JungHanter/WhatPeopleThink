import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
  },

  testDivider: {
    margin: '25px 0',
  },

  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
  },
  button: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

export default useStyles;
