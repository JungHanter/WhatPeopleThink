import React, {Fragment, useEffect} from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import useStyles from './PollItemDetailStyles'
import {PropTypes} from "prop-types";

const PollItemDetail = ({editable}) => {
  const [pollInfo, setPollInfo] = React.useState({
    topic: '',
    desc: '',
    stanceLeft: '',
    stanceRight: '',
  });

  const handlePollInfoFormChange = name => event => {
    setPollInfo({ ...pollInfo, [name]: event.target.value });
  };

  const styles = useStyles();

  //set test state
  // useEffect(() => {
  //   setPollInfo({
  //     topic: '탈주범이 되어 돌아온 당신의 가장 친한 친구',
  //     desc: '큰 범죄를 저지른 당신의 가장 친한 친구가 감옥에서 탈출해 돌아왔다. 숨겨달라고 당신을 찾아온 친구, 당신은 어떻게 할 것인가?',
  //     stanceLeft: '',
  //     stanceRight: '',
  //   });
  // });

  return (
    <Paper className={styles.paper}>
      {/*{editable ? (*/}
        <React.Fragment>
          <Typography variant="h5" component="h3" gutterBottom>
            {pollInfo.topic}
          </Typography>
          <Typography component="p">
            {pollInfo.desc}
          </Typography>
        </React.Fragment>
      <Divider className={styles.testDivider} />
      {/*) : (*/}
        <React.Fragment>
          <form id="pollInfo" autoComplete="off">
            <TextField
              id="topic"
              label="제목"
              placeholder="제목을 입력해주세요."
              className={styles.textField}
              required
              value={pollInfo.topic}
              onChange={handlePollInfoFormChange('topic')}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="desc"
              label="설명"
              placeholder="자세한 상황설명 등 추가내용을 작성해주세요."
              className={styles.textField}
              required
              value={pollInfo.desc}
              onChange={handlePollInfoFormChange('desc')}
              fullWidth multiline
              rows="6"
              margin="normal"
              variant="outlined"
            />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h5" gutterBottom>
                  입장 A:
                </Typography>
                <TextField
                  id="stanceLeft"
                  label="입장 A"
                  placeholder="입장 A라면 어떻게 할까요?"
                  className={styles.textField}
                  required
                  value={pollInfo.stanceLeft}
                  onChange={handlePollInfoFormChange('stanceLeft')}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h5" gutterBottom>
                  입장 B:
                </Typography>
                <TextField
                  id="stanceRight"
                  label="입장 B"
                  placeholder="입장 B라면 어떻게 할까요?"
                  className={styles.textField}
                  required
                  value={pollInfo.stanceRight}
                  onChange={handlePollInfoFormChange('stanceRight')}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Button
                className={styles.button}
                size="large" variant="contained" color="primary" >
              게시하기
            </Button>
          </form>
        </React.Fragment>
      {/*)}*/}
    </Paper>
  );
};

PollItemDetail.defaultProps = {
  editable: false,
};

PollItemDetail.propsTypes = {
  editable: PropTypes.bool,
};


export default PollItemDetail;
