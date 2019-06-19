import React, {Component} from 'react';

import { withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';
import styles from './ImageSelectorStyles';
import PropTypes from 'prop-types';

// @withStyles(styles)
class ImageSelector extends Component {
  constructor(props)  {
    super(props);

    this.state = {
      image: {
        selected: false,
        url: null,
      },
      // image: {
      //   selected: true,
      //   url: 'https://i.imgur.com/mNS6wtc.jpg',
      // },
      initialized: false,
    }
  }

  handleClick = (e) => {
    const image = this.state.image;

    if (image.selected) {
      this.setState(
        {image: {selected: false, url: null}}
      );
    } else {
      this.setState(
        {image: {selected: true, url: 'https://i.imgur.com/mNS6wtc.jpg'}} //temp dummy
      );
    }

    this.props.onImageSelected(image.selected, image.url);
  }

  //before mount with props --> change state when props updated
  componentWillMount() {
    if (!this.state.initialized && this.props.defaultImage)
    {
      this.setState({
        image: {
          selected: true,
          url: this.props.defaultImage,
        },
      });
      console.log ("Intialize Image with url=" + this.props.defaultImage);
    }

    //initial image once
    this.setState({
      initialized: true,
    });

    console.log("componentWillMount()");
  }

  render() {
    const styles = this.props.classes;
    const image = this.state.image;

    return (
      <ButtonBase
        focusRipple
        key={image.title}
        className={classNames(
          styles.imageSelector, styles.imageButtonBase,
          'MuiButtonBase-root', 'MuiButton-root', 'MuiButton-outlined',
        )}
        onClick={this.handleClick}
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
  }
}

ImageSelector.defaultProps = {
  defaultImage: null,
  onImageSelected: (selected, url) => {},
};

ImageSelector.propsTypes = {
  defaultImage: PropTypes.string,
  onImageSelected: PropTypes.func,
};

export default withStyles(styles)(ImageSelector);
