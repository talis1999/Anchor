import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems:'baseline',
    margin:'32px'
  },
  appBar:{
    backgroundColor:'#4050ac',
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  className={classes.appBar}>
          <div className={classes.title}>
            <EnhancedEncryptionIcon fontSize='large'/>
            <Typography variant="h4">
                Anchor system
            </Typography>
          </div>
      </AppBar>
    </div>
  );
}