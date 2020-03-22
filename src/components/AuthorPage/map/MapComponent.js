import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { YMaps, Map} from "react-yandex-maps"
import MapMarker from "./MapMarker"
import './map.css'

const useStyles = makeStyles(theme => ({
  mapTitle: {
    width: "100%",
    textAlign: "center",
    padding: theme.spacing(3, 2),
    backgroundColor: "white",
    color: "#07346a",
    position: "absolute",
  },
  mapContainer: {
    width: "90%",
    maxWidth: 1000,
    margin: "auto",
    position: "relative",
  },
  map_title: {
    color: '#07346a',
    paddingBottom: '10px',
    fontSize: '2.5em',
    textAlign: 'center',
    fontWeight: 'bold',
  }
}))

export default function MapComponent({ data }) {
  const mapCoord = data.map
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

  const { marker } = state
  return (
    <Box id={"map"}>
          <Typography variant="h3" className={classes.map_title}>
            Map
          </Typography>
      <Box className={classes.mapContainer}>
        <YMaps>
          <Map
            state={{
              center: [mapCoord.lat, mapCoord.lon],
              zoom: 14,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            className='map'
          >
            <MapMarker marker={marker} />
          </Map>
        </YMaps>
      </Box>
    </Box>
  )
}
