import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import cogoToast from 'cogo-toast';

import DDL from './DDL';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#4050ac',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 0px',
        alignItems: 'center',
        width: '20%',
        margin: 'auto',
        minWidth: '300px'
    },
    button: {
        padding: '16px 64px',
        backgroundColor:'#384044',
        margin: '8px',
        color: 'white',
        border: '1px solid white',
        '&:hover': {
            backgroundColor:'#59686f',
            border: '1px solid red',
            transition: '0.3s',
        }
    },
    header: {
        backgroundColor: '#535f64',
        color: "white",
        padding: '24px 0px',
        width: '20%',
        margin: 'auto',
        minWidth: '300px',
        borderRadius:'8px 8px 0px 0px'
    },
    footer: {
        backgroundColor: '#535f64',
        color: "white",
        padding: '8px 0px',
        width: '20%',
        margin: 'auto',
        minWidth: '300px',
        borderRadius:'0px 0px 8px 8px'
    }
}));


export default function AddInjured() {
    const classes = useStyles();
    const [state, setState] = useState('')
    const [id, setId] = useState('')
    const [coordinates, setCoordinates] = useState('')

    const addInjured = () => {
        if (state && id && coordinates) {
            cogoToast.success('Injured added');
            console.log({ id, coordinates, state })
        }
        else
            cogoToast.warn("please fill the form")
    }

    return (
        <div>
            <div className={classes.header}>
                <Typography variant="h4">
                    Add injured
            </Typography>
            </div>
            <div className={classes.root}>
                <TextField id="Id" label="Id" variant="filled" style={{ backgroundColor: 'white', marginBottom: '8px' }} onChange={e => setId(e.target.value)} />
                <TextField id="Coordinates" label="Coordinates" variant="filled" style={{ backgroundColor: 'white' }} onChange={e => setCoordinates(e.target.value)} />
                <DDL state={state} setState={setState} />
            </div>
            <div className={classes.footer}>
                <Button className={classes.button} onClick={e => addInjured()}>add</Button>
            </div>
        </div>
    )
}
