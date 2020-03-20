import React from "react"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './slider.css';

const useStyles = makeStyles({
    containerMain: {
        padding: '50px 0',
        textAlign: 'center'
    },
    title: {
        color: '#07346a',
        fontSize: '2.2em',
        fontWeight: 'bold',
        margin: 'auto',
        padding: '20px 0',
    },
    containerNested: {
        width: '70%',
        padding: '15px',
        margin: '0 auto',
        ['@media (max-width: 490px)']: {
            width: '90%'
        }
    }

});

export default function Gallery ({ data }) {
    const images = [];
    data.gallery.forEach(img => {
        images.push({
            original: img.file.url,
            thumbnail: img.file.url,
        });
    });
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.containerMain}  id={'gallery'}>
            <Container className={classes.containerNested}>
                <Typography variant="h3" gutterBottom className={classes.title}>
                   Gallery
                </Typography>
                <ImageGallery items={images} showBullets={true} />
            </Container>
        </Container>
    )
}