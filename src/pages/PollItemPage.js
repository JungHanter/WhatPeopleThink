import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';

import useStyles from './styles'

const PollItemPage = () => {
  const styles = useStyles();

  return (
    <Fragment>
      <Typography variant='h5' component='h1'
                  color='primary' className={styles.listHeader}>
        새로운 <Typography variant='inherit' color='secondary'>POLL</Typography> 만들기
      </Typography>
    </Fragment>
  );
};

export default PollItemPage;
