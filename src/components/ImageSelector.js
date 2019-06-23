import React, {Component} from 'react';

import { withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

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
      loading: false,
    };

    this.fileInput = React.createRef();
  }

  //https://negabaro.github.io/react/2019/02/12/react-file-upload.html
  //https://codeburst.io/react-image-upload-with-kittens-cc96430eaece
  //https://stackoverflow.com/questions/39913863/how-to-manually-trigger-click-event-in-reactjs
  handleClick = (e) => {
    const image = this.state.image;

    if (image.selected) {
      this.setState(
        {image: {selected: false, url: null}}
      );
    } else {
      this.fileInput.click();
      // this.setState(
      //   {image: {selected: true, url: 'https://i.imgur.com/mNS6wtc.jpg'}} //temp dummy
      // );
    }

    this.props.onImageSelected(image.selected, image.url);
  };

  handleImageChange = (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    if (file == null) return;
    else if (!file.name.match(/.(jpg|jpeg|png)$/i)) {
      alert("지원하지 않는 이미지 형식입니다.");
    } else {
      console.log(file);
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          image: {selected: true, url: reader.result}
        })
      };
      reader.readAsDataURL(file);
    }

    // reader.onload = () => {
    //   this.setState({
    //     image: {select: true}
    //   });
    // };
  };

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
      console.log ("Initialize Image with url=" + this.props.defaultImage);
    }

    //initial image once
    this.setState({
      initialized: true,
    });
  }

  render() {
    const styles = this.props.classes;
    const image = this.state.image;

    return (
      <ButtonBase
        focusRipple
        key={image.title}
        className={classNames(
          styles.imageSelector,
          'MuiButtonBase-root', 'MuiButton-root',
          'MuiButton-outlined', 'MuiButton-outlinedPrimary',
          {'imageSelected': image.selected}
        )}
        color="primary"
        onClick={this.handleClick}
        focusVisibleClassName={styles.imageButtonFocusVisible}
      >
        <span
          className={styles.imageSrc}
          style={{
            backgroundImage: `url(${image.url})`,
          }}
        />
        {image.selected ? (
          <React.Fragment>
            <span className={classNames(styles.imageBackdrop, styles.removeButton)} />

            <span className={styles.imageButton}>
              <Icon className={classNames(styles.imageButtonIcon, styles.removeButton)}
                    fontSize="large" >remove</Icon>
              <Typography
                component="span"
                variant="subtitle1"
                color="primary"
                className={classNames(styles.imageButtonTitle, styles.removeButton)}
              >
                이미지 삭제
              </Typography>
            </span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className={styles.imageBackdrop} />

            <span className={styles.imageButton}>
              <Icon className={styles.imageButtonIcon}
                    fontSize="large" >add</Icon>
              <Typography
                component="span"
                variant="subtitle1"
                color="primary"
                className={styles.imageButtonTitle}
              >
                이미지 추가
              </Typography>
            </span>
          </React.Fragment>
        )}
        <input type='file' id='img'
               accept=".png, .jpg, .jpeg"
               ref={(ref) => {this.fileInput=ref}}
               className={styles.fileInput}
               onChange={this.handleImageChange} />
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
