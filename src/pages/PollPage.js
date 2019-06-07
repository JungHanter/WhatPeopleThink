import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import CardList from '../components/CardList';

import useStyles from './styles'

function PollPage() {
  const styles = useStyles();

  return (
    <Fragment>
      <Typography variant='h5' component='h1'
                  color='primary' className={styles.listHeader}>Poll</Typography>
      <CardList />
    </Fragment>
  );
}

export default PollPage;
