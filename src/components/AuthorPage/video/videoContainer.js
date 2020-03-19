import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
// import CloseIcon from '@material-ui/icons/CloseIcon';
import VideoPlayer from './videoPlayer';
// import { withI18n } from '@lingui/react';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '50px 0',
        textAlign: 'center'
    },
    title: {
        color: '#4A90E2',
        fontSize: '3em',
        fontWeight: 'bold',
        margin: 'auto',
        textAlign: 'center',
    },
    button: {
        position: 'relative',
        padding: '1rem 3rem',
        margin: '1rem auto',
        display: 'block',
        boxShadow: '21px 7px 29px -3px rgba(0,0,0,0.74)',
        background: 'linear-gradient(to right, rgba(194, 234, 241, 0.93) 18%, rgba(113, 195, 229, 0.75) 65%, rgba(30, 126, 167, 0.75) 100%)',
    },

    closeButton: {
        position: 'absolute',
        right: '-4%',
        top: theme.spacing(2),
        color: '#e7e7e7',
    },

    videoContainer: {
        position: 'relative',
        margin: '0 auto',
        maxWidth: '85%',
        maxHeight: '85%',
    }
}));

const VideoModal = ( { video }) => {
    const { youtube } = video;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const startIndex = youtube.indexOf('v=') + 2;
const endIndex = youtube.lastIndexOf('&');
const imgId = youtube.substring(startIndex, endIndex);
    // console.log(youtube, youtube.substring(youtube.indexOf('v=')+2, youtube.lastIndexOf('&')), youtube.indexOf('v='), youtube.lastIndexOf('&'));

    const imgVideo = `https://img.youtube.com/vi/${imgId}/0.jpg`;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="md" className={classes.container}  id={'video'}>
            <Typography variant="h3" className={classes.title}>
                Youtube
            </Typography>
            <div>
                <img src={imgVideo} alt=""/>
            </div>
            <Button className={classes.button} onClick={handleOpen}>View on youtube</Button>
            <Modal open={open} className={classes.videoContainer}>
                <div className={classes.videoContainer}>
                    <IconButton className={classes.closeButton} onClick={handleClose}>
                      <div>x</div> 
                    </IconButton>
                    <VideoPlayer url={youtube} />
                </div>
            </Modal>
        </Container>
    )
}

export default VideoModal;