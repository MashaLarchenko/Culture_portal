import React from "react"
import { Placemark } from "react-yandex-maps"

export default function MapMarker(props) {
  const { lat, lon, imgUrl, toolTip } = props.marker
  const imgStyle = {
    width: 30,
    height: 30,
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    border: "blue solid 2px",
    borderRadius: "50%",
    overflow: "hidden",
  }
  return (
      <Placemark
        geometry={[lat, lon]}
        modules={["geoObject.addon.balloon"]}
        properties={{
          hintContent: "Собственный значок метки",
          balloonContentHeader: toolTip.balloonContentHeader,
          balloonContentBody: toolTip.balloonContentBody,
          balloonContentFooter: "Беларусь",
        }}
      />)

      {/* <Placemark
        geometry={{
          coordinates: [lat, lon],
        }}
        // modules={["geoObject.addon.balloon"]}
        properties={toolTip}
      /> */}
      {/* <MarkerLayout>
          <div style={imgStyle}></div>
        </MarkerLayout>
      </Marker> */}
}
