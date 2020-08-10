import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import DDL from './DDL';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:'#4050ac',
        display:'flex',
        flexDirection:'column',
        padding:'8px',
        borderRadius:'5px',
        alignItems:'center',
        width:'20%',
        margin:'auto',
        minWidth:'300px'
    },
    button:{
        padding:'16px 64px',
        margin:'8px',
        color:'white',
        border:'1px solid white'
    }
  }));


export default function AddInjured() {
    const classes = useStyles();
    const [state, setState] = useState('')
    const [id, setId] = useState('')
    const [coordinates, setCoordinates] = useState('')
    return (
        <div className={classes.root}>
            <h1>Add injured</h1>
            <TextField id="Id" label="Id" variant="filled" style={{backgroundColor:'white',marginBottom:'8px'}} onChange={e => setId(e.target.value)}/>
            <TextField id="Coordinates" label="Coordinates" variant="filled" style={{backgroundColor:'white'}} onChange={e => setCoordinates(e.target.value)}/>
            <DDL state={state} setState={setState}/>
            <Button className={classes.button} onClick = {e => console.log({id,coordinates,state})}>add</Button>
        </div>
    )
}
