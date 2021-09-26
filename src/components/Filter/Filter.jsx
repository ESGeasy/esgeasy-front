import { useState } from 'react'
import { Select, MenuItem, InputLabel } from '@mui/material';

const Filter = ({ name, posibleValues, defaultValue, handler }) => {
    const [filterValue, setFilterValue] = useState(defaultValue); 
    
    const handleFilter = (event) => {
        handler(event.target.value);
        setFilterValue(event.target.value);
    };

    return (
        <div>
            <InputLabel id={name}>{name}</InputLabel>
            <Select labelId={name}
                    id={name.concat("_select")}
                    value={filterValue}
                    displayEmpty
                    onChange={handleFilter}>
                {posibleValues.map((name) => (
                    <MenuItem value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}

export default Filter