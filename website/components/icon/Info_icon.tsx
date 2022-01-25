import { InputHTMLAttributes } from "react"
import styled from "styled-components"

interface Icon extends InputHTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
}

const SVG = styled.svg`
  cursor: pointer;
`

const Path = styled.path`
  line-height: normal;
  text-indent: 0;
  text-align: start;
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-color: #000;
  text-transform: none;
  white-space: normal;
  isolation: auto;
  mix-blend-mode: normal;
  fill: var(--text2);
`

const Info_icon = ({ width, height, ...props }: Icon) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <Path
        d="M 8.5058594 1 C 4.6457884 1 1.5058594 4.14 1.5058594 8 C 1.5058594 11.8601 4.6457884 15 8.5058594 15 C 12.36593 15 15.505859 11.8601 15.505859 8 C 15.505859 4.14 12.36593 1 8.5058594 1 z M 8.5058594 2 C 11.82549 2 14.505859 4.6804 14.505859 8 C 14.505859 11.3197 11.82549 14 8.5058594 14 C 5.1862286 14 2.5058594 11.3197 2.5058594 8 C 2.5058594 4.6804 5.1862286 2 8.5058594 2 z M 8.0058594 4 L 8.0058594 5 L 9.0058594 5 L 9.0058594 4 L 8.0058594 4 z M 8.0058594 6 L 8.0058594 12 L 9.0058594 12 L 9.0058594 6 L 8.0058594 6 z "
        color="#000"
        enable-background="accumulate"
        font-family="sans-serif"
        font-weight="400"
        overflow="visible"
      />
    </SVG>
  )
}

Info_icon.defaultProps = {
  width: "1.6rem",
  height: "1.6rem",
}

export default Info_icon
