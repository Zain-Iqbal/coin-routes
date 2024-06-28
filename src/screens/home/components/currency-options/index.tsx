import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import {Currencies} from "../../../../utils/constants";


const CurrencyOptions = (props) => {
    const {currency, setCurrency, setPrevCurrency} = props

    const onChangeCurrency = (e) => {
        setPrevCurrency(currency)
        const value = e.target.value
        setCurrency(value)
    }
    return <FormControl className={'dropdown'} fullWidth>
        <InputLabel id="demo-simple-select-label">Currencies</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Currencies"
            value={currency}
            onChange={onChangeCurrency}
        >
            {Currencies.map(item => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
        </Select>
    </FormControl>
}

export default CurrencyOptions
