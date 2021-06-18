import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header';

const OrderTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <Grid container direction="column">
            <Grid item >
                <Header />
            </Grid>
            <Grid item container>
                <TableContainer component={Paper}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Manufacturer</TableCell>
                                <TableCell>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                products.map(product => (
                                    <TableRow key={product.id}>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.type}</TableCell>
                                        <TableCell>${product.price}</TableCell>
                                        <TableCell>{product.manufacturer}</TableCell>
                                    </TableRow>
                                ))
                            }

                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>
        </Grid>
    );
};

export default OrderTable;