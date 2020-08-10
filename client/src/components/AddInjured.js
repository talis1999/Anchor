import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import DDL from './DDL';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:'#4050ac',
        display:'flex',
        flexDirection:'column',
        padding:'32px',
        borderRadius:'5px',
        alignContent:'center',
        width:'30%',
        margin:'auto'
    },
    button:{
        padding:'16px',
        color:'white',
        border:'1px solid white'
    }
  }));

export default function AddInjured() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Add injured</h1>
            <TextField id="filled-basic" label="Id" variant="filled" style={{backgroundColor:'white'}}/>
            <TextField id="filled-basic" label="Cordinates" variant="filled" style={{backgroundColor:'white'}}/>
            <DDL/>
            <Button className={classes.button}>add</Button>
        </div>
    )
}
