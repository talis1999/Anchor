import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
      backgroundColor:'white'
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
}));

export default function DDL(props) {

    const classes = useStyles();
    const { state, setState } = props;
    return (
        
        <div>
           <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={state}
          onChange={e => setState(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'uninjured'}>uninjured</MenuItem>
          <MenuItem value={'lightly injured'}>lightly injured</MenuItem>
          <MenuItem value={'moderately wounded'}>moderately wounded</MenuItem>
          <MenuItem value={'severely injured'}>severely injured</MenuItem>
          <MenuItem value={'deceased'}>deceased</MenuItem>
          <MenuItem value={'rescued'}>rescued</MenuItem>
        </Select>
      </FormControl> 
        </div>
    )
}
