/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent, CardActions, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import copyToClipboard from '@utils/copy-to-clipboard';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    margin: 20,
  },
  button: {
    margin: theme.spacing(1),
  },
  content: {
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 15,
  },
  actions: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  // icon: {
  //   width: 10,
  //   height: 10,
  // },
  hiddenInput: {
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: -2,
  },
}));

const TextCard = ({ lines }) => {
  const copyText = () => {
    copyToClipboard(`${lines.join('\n')}`);
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        {lines?.map((line) => (
          <Typography variant="body1" color="primary" className={classes.resultText}>
            {line}
          </Typography>
        ))}
        {/* <input
            contentEditable
            // readOnly
            type="input"
            ref={this.text}
            defaultValue={`${firstline}     ${secondline}`}
            className={classes.hiddenInput}
          /> */}
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton className={classes.copier} onClick={copyText}>
          <Typography>کپی</Typography>

          {/* <FilterNone className={classes.icon} /> */}
        </IconButton>

        {/* {navigator.share &&
          <IconButton
            className={classes.copier}
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Web Fundamentals',
                  text: 'Check out Web Fundamentals — it rocks!',
                  url: 'https://developers.google.com/web',
                })
                  .then(() => console.log('Successful share'))
                  .catch(error => console.log('Error sharing', error));
              }
          }}
          >
            <ShareIcon className={classes.icon} />
          </IconButton>
        } */}
      </CardActions>
    </Card>
  );
};

TextCard.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TextCard.defaultProps = {};

export default TextCard;
