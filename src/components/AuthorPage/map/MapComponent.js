import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import { YMaps, Map, Placemark } from "react-yandex-maps"

import MapMarker from "./MapMarker"

const useStyles = makeStyles(theme => ({
  mapTitle: {
    width: "100%",
    textAlign: "center",
    padding: theme.spacing(3, 2),
    backgroundColor: "white",
    color: "black",
    position: "absolute",
    // right: 0
  },
  mapContainer: {
    width: "90%",
    maxWidth: 1000,
    margin: "auto",
    position: "relative",
  },
  title: {
    width: "fit-content",
    padding: theme.spacing(3, 2),
    margin: "0 auto 20px",
    textAlign: "center",
  },
  // tooltip: {
  //     position: 'relative',
  //     width: 100,
  //     height: 20%,
  // }
}))

export default function MapComponent({ data }) {
  const mapCoord = data.map
  console.log(data.map)
  const classes = useStyles()
  const [state] = useState({
    marker: {
      lat: mapCoord.lat,
      lon: mapCoord.lon,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/%D0%A5%D1%83%D0%B4_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%A0%D0%91.jpg/250px-%D0%A5%D1%83%D0%B4_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%A0%D0%91.jpg",
      title: data.name,
      toolTip: {
        balloonContentHeader: data.name,
        balloonContentBody: "",
        balloonContentFooter: "Беларусь",
      },
    },
    center: [mapCoord.lat, mapCoord.lon],
  })
  //   const mapState = {
  //     center: state.center,
  //     zoom: 14,
  //   }

  const mapState = { center: [55.76, 37.64], zoom: 10 }
  const { marker } = state
  console.log(state)

  return (
    <Box id={"map"}>
      <Box>
        <Paper className={classes.title}>
          <Typography variant="h5" component="h3">
            {marker.title}
          </Typography>
        </Paper>
      </Box>
      <Box className={classes.mapContainer}>
        <YMaps>
          <Map
            state={{
              center: [mapCoord.lat, mapCoord.lon],
              zoom: 14,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            <MapMarker marker={marker} />
          </Map>
        </YMaps>
      </Box>
    </Box>
  )
}
