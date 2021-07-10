import { Box, Select, FormControl, MenuItem } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrency } from '../features/currencyMode/currencyModeSlice';

const CurrencyDropdown = () => {


    const dispatch = useDispatch();


    const [currency, setCurrency] = useState('');

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
        dispatch(changeCurrency(event.target.value));
    }

    const CurrencyItems = [
        'AUD', 'CAD', 'EUR', 'GBP', 'NZD', 'USD', 'ARS', 'BGN', 'BHD', 'BRL', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CZK', 'DKK', 'DOP', 'FJD',
        'GEL', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JPY', 'KES', 'KRW', 'LBP', 'LKR', 'MAD', 'MMK', 'MXN', 'MYR', 'NOK', 'OMR',
        'PHP', 'PLN', 'RON', 'RSD', 'RUB', 'SEK', 'SGD', 'THB', 'TND', 'TRY', 'UAH', 'VND', 'ZAR'
    ]



    return (
        <Box>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency}
                    onChange={handleCurrencyChange}
                    label="CURRENCY"
                    displayEmpty
                >
                    <MenuItem value="">$</MenuItem>
                    {
                        CurrencyItems.map(cur => <MenuItem value={cur}>{cur}</MenuItem>)
                    }

                </Select>
            </FormControl>

        </Box>
    );
};

export default CurrencyDropdown;