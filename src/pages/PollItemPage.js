import React, { Fragment } from 'react';


import PollItemDetail from "../components/PollItemDetail";
import Typography from '@material-ui/core/Typography';

import useStyles from './styles'
import {PropTypes} from "prop-types";

const PollItemPage = ({newItem, itemId}) => {
  const styles = useStyles();

  const [editMode, setEditMode] = React.useState(true);

  return (
    <Fragment>
      {newItem &&
        <Typography variant='h5' component='h1'
                    color='primary' className={styles.listHeader}>
          새로운 <Typography variant='inherit' color='secondary'>POLL</Typography> 만들기
        </Typography>
      }
      <PollItemDetail editable={newItem || editMode}/>
    </Fragment>
  );
};

PollItemPage.defaultProps = {
  newItem: true,
  itemId: 0,
};

PollItemPage.propsTypes = {
  newItem: PropTypes.bool,
  itemId: PropTypes.number,
};

export default PollItemPage;
