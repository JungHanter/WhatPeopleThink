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
        '&$removeButton': {
          opacity: 0,
        },
      },
      '& $imageButtonIcon': {
        color: theme.palette.primary.main,
        '&$removeButton' : {
          color: 'white',
        },
      },
      '& $imageButtonTitle': {
        color: theme.palette.primary.main,
        '&$removeButton' : {
          color: 'white',
        },
      },
    },

    '&:hover': {
      '& $imageButtonIcon$removeButton, & $imageButtonTitle$removeButton': {
        opacity: 1,
      },
      '& $imageBackdrop$removeButton': {
        opacity: '0.8 !important',
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

  loadingBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    opacity: 0.2,
    transition: theme.transitions.create('opacity'),
  },

  imageLoading: {
    display: 'block',
    '&.hide': {
      display: 'none',
    }
  },
  imageLoadingProgress: {
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
  },

  removeButton: {
    opacity: 0,
  },

  fileInput: {
    visibility: 'hidden',
    position: 'absolute'
  },

});

export default styles;
