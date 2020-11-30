import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from '../../img/CheesePizza.jpg';
import logo2 from '../../img/PepperoniPizza.jpg';
import Grid from '@material-ui/core/Grid';
import logo3 from '../../img/SausagePizza.jpg';
import logo4 from '../../img/HawaiianPizza.jpg';
import logo5 from '../../img/VegetarianPizza.jpg';
import logo6 from '../../img/MeatLoversPizza.jpg';
import logo7 from '../../img/BBQChickenPizza.jpg';
import logo8 from '../../img/BuffaloChickenPizza.jpg';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    height: 200,
    width: 400,
  },
  control: {
    padding: theme.spacing(2),
  }
}));

export default function PizzaCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Grid container>

        <Grid item md={3}>

          <Button>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    C
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Extra cheese pizza"
                subheader="November 26, 2020"
              />
              <CardMedia
                className={classes.media}
                image={logo}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Start your pizza journey with this delicious pizza.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>How we make it:</Typography>
                  <Typography paragraph>
                    We put our italian job into making this pizza.
                  </Typography>
                  <Typography paragraph>
                    We let it cook for over 3 hours in the over at low temperatures. No rushing.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Button>

          <Button>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    C
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Pepperoni Pizza"
                subheader="November 26, 2020"
              />
              <CardMedia
                className={classes.media}
                image={logo2}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Start your pizza journey with this delicious pizza.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>How we make it:</Typography>
                  <Typography paragraph>
                    We put our italian job into making this pizza.
                  </Typography>
                  <Typography paragraph>
                    We let it cook for over 3 hours in the over at low temperatures. No rushing.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Button>

        </Grid>

        <Grid item md={3}>

          <Button>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    C
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Sausage Pizza"
                subheader="November 26, 2020"
              />
              <CardMedia
                className={classes.media}
                image={logo3}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Start your pizza journey with this delicious pizza.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>How we make it:</Typography>
                  <Typography paragraph>
                    We put our italian job into making this pizza.
                  </Typography>
                  <Typography paragraph>
                    We let it cook for over 3 hours in the over at low temperatures. No rushing.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Button>

          <Button>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    C
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Hawaiian Pizza"
                subheader="November 26, 2020"
              />
              <CardMedia
                className={classes.media}
                image={logo4}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Start your pizza journey with this delicious pizza.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>How we make it:</Typography>
                  <Typography paragraph>
                    We put our italian job into making this pizza.
                  </Typography>
                  <Typography paragraph>
                    We let it cook for over 3 hours in the over at low temperatures. No rushing.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Button>
        </Grid>

        <Grid item md={3}>

          <Button>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    C
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Vegetarian Pizza"
                subheader="November 26, 2020"
              />
              <CardMedia
                className={classes.media}
                image={logo5}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Start your pizza journey with this delicious pizza.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>How we make it:</Typography>
                  <Typography paragraph>
                    We put our italian job into making this pizza.
                  </Typography>
                  <Typography paragraph>
                    We let it cook for over 3 hours in the over at low temperatures. No rushing.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Button>

          <Button>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    C
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Meat Lovers Pizza"
                subheader="November 26, 2020"
              />
              <CardMedia
                className={classes.media}
                image={logo6}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Start your pizza journey with this delicious pizza.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>How we make it:</Typography>
                  <Typography paragraph>
                    We put our italian job into making this pizza.
                  </Typography>
                  <Typography paragraph>
                    We let it cook for over 3 hours in the over at low temperatures. No rushing.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Button>

        </Grid>
        <Grid item md={3}>

          <Button>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    C
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="BBQ Chicken Pizza"
                subheader="November 26, 2020"
              />
              <CardMedia
                className={classes.media}
                image={logo7}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Start your pizza journey with this delicious pizza.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>How we make it:</Typography>
                  <Typography paragraph>
                    We put our italian job into making this pizza.
                  </Typography>
                  <Typography paragraph>
                    We let it cook for over 3 hours in the over at low temperatures. No rushing.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Button>

          <Button>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    C
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Buffalo Chicken Pizza"
                subheader="November 26, 2020"
              />
              <CardMedia
                className={classes.media}
                image={logo8}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Start your pizza journey with this delicious pizza.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>How we make it:</Typography>
                  <Typography paragraph>
                    We put our italian job into making this pizza.
                  </Typography>
                  <Typography paragraph>
                    We let it cook for over 3 hours in the over at low temperatures. No rushing.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}