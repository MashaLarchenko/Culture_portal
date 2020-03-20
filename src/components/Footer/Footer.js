import React from "react"

const style = {
  footer: {
    height: "50px",
    backgroundColor: "#000",
    color: "white",
    textAlign: "center",
  },

  p: {
    lineHeight: "50px",
  },
}
export default function Footer() {
  return (
    <footer style={style.footer}>
      <p style={style.p}> © {new Date().getFullYear()} Larchenko </p>
    </footer>
  )
}
