import React from 'react';

import Grid from '@material-ui/core/Grid';
import PollCard from './PollCard'

import useStyles from './CardListStyles.js'

const CardList = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} lg={4} >
        <PollCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} >
        <PollCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} >
        <PollCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} >
        <PollCard />
      </Grid>
    </Grid>
  );
};

export default CardList;
