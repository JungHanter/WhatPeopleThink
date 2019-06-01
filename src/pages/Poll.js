import React from 'react';

import Typography from '@material-ui/core/Typography';
import CardList from '../components/CardList';

import useStyles from './styles'

function Poll() {
  const styles = useStyles();

  return (
    <div>
      <Typography variant='h5' component='h1'
                  color='primary' className={styles.listHeader}>Poll</Typography>
      <CardList />
    </div>
  );
}

export default Poll;
