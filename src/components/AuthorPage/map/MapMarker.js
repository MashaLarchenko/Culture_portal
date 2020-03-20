import React from "react"
import { Placemark } from "react-yandex-maps"

export default function MapMarker(props) {
  const { lat, lon, toolTip } = props.marker
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
}
