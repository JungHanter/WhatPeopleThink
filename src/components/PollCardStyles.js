import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    // maxWidth: 400,
    // padding: theme.spacing(3, 2),
  },
  cardContentContainer: {
    // height: 500,
    // zIndex: 3
  },

  voteOverlay: {
    position: 'relative',
    width: '100%',
    height: 180,
    [theme.breakpoints.up('sm')]: {
      height: 200,
    },
    [theme.breakpoints.up('md')]: {
      height: 200,
    },
    [theme.breakpoints.up('lg')]: {
      height: 240,
    },
  },

  voteImageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    // zIndex: 1,
  },
  voteImage: {
    height: '100%',
    width: '50%',
    display: 'inline-block',
  },

  voteInfoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: theme.spacing(7),
    position: 'absolute',
    bottom: 0,
    left: 0,
    // zIndex: 2
  },
  voteInfo: {
    color: '#fff',
    width: '40%',
    marginLeft: '5%',
    marginTop: theme.spacing(0.8),
    textAlign: 'center',
    align: 'center',
    display: 'inline-block',
  },
  voteInfoSecond: {
    marginLeft: 0,
    marginRight: '5%',
  },
  voteInfoVersus: {
    color: '#fff',
    width: '10%',
    marginTop: theme.spacing(1.2),
    textAlign: 'center',
    align: 'center',
    display: 'inline-block',
  },

  pollDesc: {

  },
  topic: {  //title

  },
  detail: {

  },
  addition: {

  }
}));

export default useStyles;
