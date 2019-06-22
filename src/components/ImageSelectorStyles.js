// const styles = theme => console.log(theme) || ({
const styles = theme => ({
  imageButtonFocusVisible: {
    // borderWidth: 2,
    borderColor: theme.palette.primary.main,
  },
  imageSelector: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingTop: '66.66667%',  //1.5:1
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.23)',
    '&:hover, &:focus, &$focusVisible': {
      zIndex: 1,
      borderWidth: 1,
      borderColor: theme.palette.primary.main,
      '& $imageBackdrop': {
        opacity: 0.1,
      },
      '& $imageButtonIcon': {
        color: theme.palette.primary.main,
      },
      '& $imageButtonTitle': {
        color: theme.palette.primary.main,
      },
    },
  },

  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },

  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
  },

  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },

  imageButtonIcon: {
    position: 'relative',
    color: theme.palette.text.secondary,
  },

  imageButtonTitle: {
    position: 'absolute',
    bottom: '25%',
    [theme.breakpoints.down('md')]: {
      bottom: '20%',
    },
    [theme.breakpoints.down('xs')]: {
      bottom: '15%',
    },
    color: theme.palette.text.secondary,
  },


  imageSelected: {

  }
});

export default styles;
