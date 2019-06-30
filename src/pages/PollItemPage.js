import React, { Fragment } from 'react';


import PollItemDetail from "../components/PollItemDetail";
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import {PropTypes} from "prop-types";

const PollItemPage = ({match}) => {
  const styles = useStyles();

  const pollId = match.params.pollId;
  const newItem = !pollId;
  const [editMode, setEditMode] = React.useState(!pollId);

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
  // newItem: true,
  // pollId: -1,
};

PollItemPage.propsTypes = {
  // newItem: PropTypes.bool,
  // pollId: PropTypes.number,
};

export default PollItemPage;
