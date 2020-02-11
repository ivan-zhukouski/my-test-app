import React from 'react'
import {Select, FormControl, InputLabel, MenuItem} from "@material-ui/core";

export default ({data}) => {
    if (!data) { return (<p>Loading...</p>); }
    const options = data.map((singer, index)=>{
         return(
             <MenuItem key={`singer-${index}`}> {singer.singer} </MenuItem>
         )
    });
    const [state, setState] = React.useState({
        singer: '',
    });
    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <FormControl style={{width: '200px'}}>
            <InputLabel shrink>Singer</InputLabel>
            <Select
                value={state.singer}
                onChange={handleChange('singer')}
                displayEmpty
            >
                <MenuItem value=''>All</MenuItem>
                {options}
            </Select>
        </FormControl>
    )
}
