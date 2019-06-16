import React from 'react';

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';
import useStyles from './ImageSelectorStyles';
import {PropTypes} from "prop-types";
import PollItemDetail from "./PollItemDetail";

const ImageSelector = () => {
  const [image, setImage] = React.useState({
    selected: true,
    url: 'https://i.imgur.com/mNS6wtc.jpg'
  });

  const styles = useStyles();

  return (
    <ButtonBase
      focusRipple
      key={image.title}
      className={classNames(
        styles.imageSelector,
        'MuiButtonBase-root', 'MuiButton-root', 'MuiButton-outlined'
      )}
      focusVisibleClassName={styles.buttonFocusVisible}
    >
      <span
        className={styles.imageSrc}
        style={{
          backgroundImage: `url(${image.url})`,
        }}
      />
      <span className={styles.imageBackdrop} />
      <span className={styles.imageButton}>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={styles.imageTitle}
        >
          +
          <span className={styles.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>
  );
};

ImageSelector.defaultProps = {
  defaultImage: null,
  onImageSelected: (selected, url) => {},
};

ImageSelector.propsTypes = {
  defaultImage: PropTypes.string,
  onImageSelected: PropTypes.func,
};

export default ImageSelector;
