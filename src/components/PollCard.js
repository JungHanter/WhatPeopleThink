import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './PollCardStyles.js'

const PollCard = () => {
  const styles = useStyles();

  return (

    <Card className={styles.card}>
      <CardActionArea className={styles.cardContent}>
        <CardMedia
          className={styles.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={styles.topic}>
            탈주범이 되어 돌아온 당신의 가장 친한 친구
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={styles.desc}>
            큰 범죄를 저지른 당신의 가장 친한 친구가 감옥에서 탈출해 돌아왔다. 숨겨달라고 당신을 찾아온 친구, 당신은 어떻게 할 것인가?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          스크랩
        </Button>
        <Button size="small" color="secondary">
          공유
        </Button>
      </CardActions>
    </Card>
  );
};

export default PollCard;
