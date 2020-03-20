import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Modal from "@material-ui/core/Modal"
import IconButton from "@material-ui/core/IconButton"
import Container from "@material-ui/core/Container"
import VideoPlayer from "./videoPlayer"

const useStyles = makeStyles(theme => ({
  container: {
    padding: "50px 0",
    textAlign: "center",
  },
  title: {
    color: "#07346a",
    fontSize: "2.5em",
    fontWeight: "bold",
    margin: "auto",
    paddingBottom: "10px",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    right: "-4%",
    top: theme.spacing(2),
    color: "#e7e7e7",
  },

  videoContainer: {
    position: "relative",
    margin: "0 auto",
    maxWidth: "85%",
    maxHeight: "85%",
  },
  previewImg: {
    width: '100%',
  },
  imgContainer: {
    width: '50%',
    display: 'block',
    margin: '0 auto',
    ['@media (max-width: 490px)']: {
      width: '100%'
  }
  }
}))

const VideoModal = ({ video }) => {
  const { youtube } = video
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const startIndex = youtube.indexOf("v=") + 2
  const endIndex = youtube.lastIndexOf("&")
  const imgId = youtube.substring(startIndex, endIndex)

  const imgVideo = `https://img.youtube.com/vi/${imgId}/0.jpg`

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container maxWidth="md" className={classes.container} id={"video"}>
      <Typography variant="h3" className={classes.title}>
        Youtube
      </Typography>
      <div className={classes.imgContainer}>
        <img src={imgVideo} alt="" className={classes.previewImg}/>
      </div>
      <button className='button' onClick={handleOpen}>
        View on youtube
      </button>
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

export default VideoModal
