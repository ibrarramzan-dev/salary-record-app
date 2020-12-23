import '../style/InfoBarContainer.css';
import React from 'react';
import { Grid } from '@material-ui/core';

const InfoBarContainer = props => {
  return (
    <div id="info-bar-container-container">
      <Grid container>
        <Grid item xs={3}>
          <p id="info-bar-container-data-title">{props.dataTitle}</p>
        </Grid>
        <Grid item xs={2}>
          <b>Total Records: </b> 99
        </Grid>
        <Grid item xs={2}>
          <b>Minimum: </b> 1381
        </Grid>
        <Grid item xs={3}>
          <b>Maximum: </b> 296485
        </Grid>
        <Grid item xs={2}>
          <b>Average: </b> 137240
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoBarContainer;