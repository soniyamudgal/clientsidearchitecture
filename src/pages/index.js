import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 10,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const pageHeadingStyles = {
  width: "100%",
  "textAlign": "center"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64
}
const gameImage ={
  width: 200,
  height: 200
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyle: "none",
  display:"flex"
}
const listItemStyles = {
  display: "inline",
  marginLeft: 80
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Hangman",
    imgSrc:"../static/hangman.jpg",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    badge: true,
    color: "#E95800",
  },
  {
    text: "Tic Tac Toe",
    imgSrc:"../static/tic-tac-toe.png",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    badge: true,
    color: "#1099A8",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Game Zone</title>
      <h1 style={pageHeadingStyles}>
        Game Zone
      </h1>
      <h2 style={headingStyles}>
        Try our latest games!!!
        <br />
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h2>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
             <a
                style={linkStyle}
                href={`${link.url}`}
              >
              <div><img src={link.imgSrc} style={gameImage}></img></div>
            <span>
             
                {link.text}
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
            </span>
              </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
