import React from 'react';
import { Container, Typography, Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { withI18n } from '@lingui/react';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '0',
    },
    title: {
        textAlign: 'center',
        margin: '20px 0',
        color: '#07346a',
        fontWeight: 'bold',
        ['@media (max-width: 490px)']: {
            textAlign: 'center'
        }
    },
    table: {
        margin: '30px auto',
        boxShadow: '4px 4px 10px #000000',
        width: '85%'
    },
    tHead: {
        backgroundColor: '#07346a',
    },
    tableTitle: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#ffffff',
        padding: '20px',
        border: '1px solid #E0E0E0',
        ['@media (max-width: 490px)']: {
            textAlign: 'center',
            padding: '16px'
        }
    },
    dateTitle: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#ffffff',
        border: '1px solid #E0E0E0',
        ['@media (max-width: 490px)']: {
            display: 'none'
        }
    },
    cell: {
        fontSize: '1rem',
        border: '1px solid #E0E0E0',
        padding: '20px',
        ['@media (max-width: 490px)']: {
            textAlign: 'center'
        }
    },
    dateCell: {
        fontSize: '1rem',
        border: '1px solid #E0E0E0',
        padding: '0.5rem 0.75rem',
        ['@media (max-width: 490px)']: {
            display: 'none'
        }
    }
}));

const Works = ({ data }) => {
    const { works } = data;
    const { listOfWorks } = works
    const classes = useStyles();
    const masterpieces = listOfWorks.map((work, index) => {
        const { film, year } = work;
        const style = index % 2 ? 'rgba(204, 204, 204, 0.5)' : '#ffffff';
        return ( 
            <TableRow key={index}>
                <TableCell className={classes.cell} style={{background: style}}>{film}</TableCell>
                <TableCell className={classes.dateCell} style={{background: style}}>{year}</TableCell>
            </TableRow>
        )
    });
    return (
        <Container className={classes.container}  id={'works'}>
            <Typography variant="h3" className={classes.title}> 
             Film
            </ Typography>
            <Table className={classes.table}>
                <TableHead className={classes.tHead}>
                    <TableRow>
                        <TableCell className={classes.tableTitle}>Name</TableCell>
                        <TableCell className={classes.dateTitle}>Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {masterpieces}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Works