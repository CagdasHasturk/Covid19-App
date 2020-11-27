import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function EarthIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={120}
      height={120}
      viewBox="0 0 1276 1280"
      {...props}
    >
      <G fill="#f44336">
        <Path d="M608.5.7C530.5 5.2 466.4 19.2 400 46 282.8 93.4 182.7 174.2 110.8 279.5 56.3 359.3 20.2 452.3 6.5 548.4 1.7 582.2.6 600.3.6 640.5c0 39.6 1.1 56.7 6 90.5 26.2 184.6 131.8 348.7 289.2 449.3 87.8 56.1 184.3 88.5 292.2 97.9 21.8 1.9 82.1 1.6 104.5-.5 43.8-4.2 83.2-11.6 121.5-22.7 170.8-49.4 313.3-168.4 393-328 22.4-45 34.9-78.6 49.5-134 14.5-54.8 18.9-88.8 18.9-146 .1-41.5-2.2-69.8-9-110.5-22.6-136.3-85.8-258.2-183.6-354C1005.4 106.5 915 53.9 810.5 24c-54.8-15.7-74.4-19-139-23-13.7-.9-50.8-1.1-63-.3zM660.7 5h6.3l-5.1 9.6c-5.1 9.5-5.2 9.6-6.2 22.5-.6 7.6-.6 13.4-.1 13.9 1 1 17.6 6.1 18.1 5.6.2-.2 1.1-4.2 2-8.9 1.6-8.1 2-9 6.4-13.3l4.7-4.6L718.7 44c17.5 7.9 36.5 16.6 42.3 19.5l10.5 5.2 26.3-2.1 26.2-2.2 7.3-7.2c4-4 7.5-7.2 7.9-7.2.3 0 17.4 8.1 38 18l37.3 18h33.7l9.6 5.7c29.6 17.3 64 42 92.2 66.2 11.3 9.7 32.2 29.3 31.7 29.7-.2.2-7.9-2.5-17.3-6-40.8-15.2-68.2-28.6-81.7-39.8l-4.8-4-37.1-2.9-37.2-3-8.3 8.3c-4.6 4.5-8.3 8.9-8.3 9.8.1.8 1.8 5.5 3.9 10.5l3.8 9 7.1.3c4 .2 7.2.6 7.3 1 0 .4.6 6.3 1.3 13.2.7 6.9 1.2 12.6 1.2 12.7-.1.1-5.5-3-12-6.9-9.3-5.5-12-6.8-12.7-5.7-.5.8-4.1 7.2-8.1 14.2-6.3 11.2-7.5 12.7-9.3 12.2-1.1-.4-4.7-.9-8-1.2-3.3-.2-6.9-.8-8-1.3-1.1-.5-3.1-1-4.5-1.2-1.8-.2-3-1.4-4.3-4.1-2-4.1-2.7-4.2-10.8-2.7-3.6.7-6.3 2-8.4 4l-3 2.9-4.5-3.4c-4.3-3.3-4.9-3.5-12.8-3.5-8.9 0-8.4-.3-10.6 6.7-.6 1.9-.2 2.2 4.4 2.8l5 .7-4.5 5.6c-4.1 5.3-4.3 5.8-3 7.9 2.1 3.1 2 3.3-2.3 3.3-4.9 0-17.1-3.1-25.6-6.5-7.4-3-15.4-3.4-20.6-1.2-4.2 1.7-10.3 7.6-23.4 22.5l-9.9 11.4 7.9 7.9 7.9 7.9h5.7c3.2 0 9.2 1 13.3 2.2 6.4 1.9 7.6 2.6 8.4 5 1.1 3.2 2.4 3.3 20.4 2.1l9.8-.6 11.7-9.3c12.3-9.9 12.3-9.9 28.3-12.6 6.5-1.1 6.6-1.1 17.3 3.2 9.8 3.9 11.2 4.2 16.4 3.6 15.4-1.8 17.5-1.9 16.8-.8-1 1.6 2.1 8.2 8 17.2 2.7 4.1 7.2 13 10 19.6 2.9 6.7 7.5 15.5 10.2 19.7 4.5 6.6 5.2 8.3 5.9 14.8.8 7.1.9 7.4 3.3 7.2 1.4-.2 8 .2 14.8.8 6.8.6 12.5.9 12.8.6.3-.2-1.2-3.1-3.2-6.3-2.7-4.4-5.5-7.1-11-10.8-6.1-4.2-7.5-5.7-9-9.5-.9-2.5-4.8-12.6-8.6-22.4-3.9-9.8-6.8-18-6.6-18.1.1-.2 2.3-1.1 4.8-2 5.2-2 5.1-2.1 10 7.4 1.6 3 5.1 8.9 7.9 12.9 4.9 7.4 5.2 7.6 16.8 13.5l11.8 6.1.5 8.6c.8 13 2.4 15 17 20.4l11.5 4.2 8.5-4.5c12.1-6.4 12.2-6.5 14.9-11.5l2.5-4.5-4.2-5.6-4.3-5.6h21.9l8.5 9.3c8.3 9 8.8 9.4 23.1 16.5 11.8 5.8 14.6 7.6 14.2 9-.2.9-.7 4.4-1.1 7.6l-.7 5.9 8.8 8.8 8.8 8.9-3.4 3.5c-1.9 1.9-3.7 3.5-4.2 3.5-2.3 0-40.2-17.7-51.5-24.1l-13.2-7.4-22.3 1.2c-12.3.7-24.2 1.5-26.4 1.8l-4.1.6.4 9.2c.2 5.1.6 10.2.8 11.3.3 1.5 5.6 5.5 16.8 12.8 13.2 8.6 19.7 12 34 18 15.4 6.4 44.7 22.1 46.3 24.7.3.5 0 5.5-.6 11.1-1.1 9.4-1.7 11.2-6.4 20-2.8 5.4-5.4 9.8-5.9 9.8-.4 0-4.3-2.4-8.7-5.3-5.5-3.7-13.4-11-26.2-24.3l-18.3-18.9-5.1-.1c-4.9 0-5.5-.3-20.7-12.3L952 402.9l-7.2.3-7.2.3-2.1 8.5-2.1 8.5-3.5-.3c-6.4-.6-6.9-1-7-5.5 0-2.3-.3-5-.7-5.9-.4-.9-13.5-11.2-29.2-22.8-15.7-11.6-28.4-21.4-28.3-21.6 0-.3 3-3.8 6.6-7.8 6.3-7 6.8-7.4 14.6-9.6 4.5-1.2 8.1-2.6 8.1-3 0-.3-2.1-3.8-4.8-7.6l-4.7-6.9-5.4-.3c-4.9-.3-6.5-1.1-17.2-8.5l-11.9-8.1-11.5 2.8-11.5 2.8-7.2-5.8c-3.9-3.3-10.6-8.8-14.7-12.2l-7.6-6.4-9.7.6c-14.7.8-29-1.4-42.3-6.4l-11-4.2L721 285l-13.5 1.2-14.5 10.2-14.5 10.2-13.5 2.3c-12.3 2-14.1 2.6-20.5 6.6-3.8 2.4-10.4 5.3-14.5 6.5-7 2-7.7 2.5-11.5 7.6l-4 5.5-12.6-.6-12.5-.6-13.5 12.1c-8.6 7.8-13.6 13.1-14.1 14.8-.4 1.5-2.3 9.9-4.4 18.8l-3.7 16-13.2 14c-12.8 13.5-13.2 14.1-14.8 20.6-1 3.9-1.7 10.7-1.7 16.2 0 9.1.2 10.1 5 22.1 6.4 16.1 14.6 32.5 32.8 65.8l14.7 26.7 5.7 3.5c5.4 3.2 6.7 3.5 16.6 4.1l10.7.7 13.8 10.9c9.7 7.5 14.7 10.8 16.5 10.8 1.5 0 11.7.7 22.7 1.5s20.5 1.5 21 1.5c.6 0 2.6 2.5 4.5 5.6l3.4 5.6 5.2-.7 5.2-.6 9.2 10.7 9.3 10.6 4.1-.5c2.3-.3 5.9-.9 8.2-1.2l4-.7 2.6 17.9 2.5 17.8-6.3 8.9c-3.5 4.9-9.7 11.8-13.7 15.3l-7.4 6.4 2.9 16.7c1.5 9.3 3.9 30.2 5.2 47 2.5 30.2 2.5 30.2.5 37.2-3.8 13.7-3.8 13.7-16.9 22.4l-11.9 7.9-14.3 42.6-14.2 42.6 4.4 21.7 4.4 21.7-2.8 18.7-2.8 18.8-8.8 11.5-8.8 11.6-.7 11.4c-.5 7.7-1.5 13.7-3 18.2l-2.3 6.7 8.8 2.6 8.8 2.6 10-4.5 9.9-4.5h24.8l20.8 6.7 20.9 6.7 13.1-6.6c7.3-3.7 23-12.5 34.9-19.6l21.7-12.9 10.7-1.1c5.9-.7 11.1-1.7 11.5-2.3.3-.6 1.2-8.4 2-17.2l1.3-16.1 5.7-6.6 5.8-6.7 9.8-1.2c15.7-2 16.3-2.2 26.2-10.5l9.2-7.6h15.6l27.9-25c31.4-28.2 28.8-24.5 31.9-45 .9-5.8 2.6-15.3 3.9-21.2 2.3-10.6 2.4-10.8 13.1-26.6l10.7-15.9 6.7-.7c3.6-.3 8.3-.6 10.5-.6 2.4 0 8.1-1.9 15.5-5.1 9.8-4.4 15-7.7 34.1-21.7l22.6-16.5 7.4-12.6c13.3-22.7 18-30.9 18-31.8 0-.5-3.4-2.1-7.5-3.6l-7.5-2.6-3.8 4-3.7 4-9.3-7.5c-11.7-9.5-11.1-9.1-12-6.5-.6 1.4-1.2-2.1-2-11.1-.8-8.8-.9-13.8-.2-15 2.3-4.4 1.2-7.4-5.3-14.2-7.3-7.5-11.3-15.1-18.2-33.8-4.3-11.6-4.7-13.7-6.1-29.1-1.2-13.8-1.2-17.7-.1-23 .8-4.3 1.1-9.9.6-16.9-.6-10.9-.2-44.4.7-51.6l.5-4.1 7.5 1.7c4.1 1 7.8 2.1 8.1 2.4.4.4-.4 10.9-1.8 23.4l-2.5 22.7 4.8 10.4 4.8 10.3v17.7c0 26.8 1.8 39.5 8 57.9l5.2 15.2 12.1 15.3c6.6 8.3 12.1 15.4 12.3 15.5.1.2 2.7-1.5 5.7-3.7 5.3-4.1 5.4-4.1 14.3-4.1l8.9-.1 28.5-31.5 28.5-31.5 1.7-8.2c.9-4.5 1.7-8.9 1.8-9.8 0-1.8-6.1-10.5-20.3-28.9-10.4-13.4-11-13.7-19.3-7.7-3 2.1-5.8 3.6-6.2 3.3-.3-.4-1.1-4.7-1.8-9.7-1-7.5-2-10.3-5.6-16.7-3.6-6.3-4.8-7.6-6.5-7.4-1.5.2-2.8-.6-3.9-2.3-1.4-2.1-1.5-4-1-11.3.4-4.8 1.3-11.4 1.9-14.6 1.2-5.9 1.2-6 7.5-9.4 3.5-1.9 6.4-3.3 6.6-3.1 1 1.4 11 29.9 12.8 36.8l2.3 8.4 13.5 11.6c7.4 6.4 20.7 18.5 29.5 27l15.9 15.4 4.4 14.1c2.5 7.7 5.9 21.1 7.6 29.6l3.2 15.5 6.9 2.7 7 2.6-.3 19.9c-.2 10.9-1.5 37.3-2.8 58.7-1.4 21.4-2.4 39-2.2 39.1.2.1 2.2 1.2 4.6 2.4 2.3 1.2 4.2 2.6 4.2 3.1 0 3.1-10.8 39.3-16.6 55.6-24.3 68.7-58.8 130.6-104.1 187.2-93.9 117.2-226.9 197.4-373.8 225.6-39.9 7.6-75 10.8-119 10.8-46 0-81.7-3.4-123.1-11.7l-16.2-3.2-9.5-9.9c-5.2-5.5-10.5-11.2-11.8-12.7-2.5-2.9-4-3.4-143.4-46.9l-26-8.1-17-11.2c-72.7-47.8-133.8-109-181.8-182.1l-10.6-16.1-5.2-36.8c-5.1-36.7-5.2-36.8-8.9-43.4-2.1-3.6-5-10.9-6.6-16l-2.8-9.4 1.7-13.6c1.2-9.9 2.1-13.9 3.3-14.6.8-.6 4.3-2.8 7.7-5l6.1-4-.2-5.5c-.1-3-.5-10.5-.8-16.5l-.5-11 10.5-7.7L113 782v-21.5l24.1-31.5c13.2-17.3 24.4-31.9 24.9-32.4.6-.6 4.6.2 10.2 1.9l9.3 2.7 3.9-4.4c2.5-2.7 14.1-23.1 30.1-52.8l26.1-48.4 14.4-2.9 14.4-2.9 4.1-4.6c8-9.1 7.7-8.4 6.5-15.7-.9-5.3-2.8-10-9.8-23l-8.7-16.2-12-7.5-12-7.5-.3-18.5-.2-18.4-17.8-9.5-17.7-9.4.2-24.4.3-24.4 4-7.4 4.1-7.4-4-6.6c-3.8-6.3-4.6-7-14.8-12.7l-10.8-6.1-2.4-10.5-2.4-10.5 1.7-18.2c1-10 1.4-18.8.9-19.6-1.2-2-22.4-29.7-22.7-29.7-.2 0-7.2 2.7-15.5 6-14.8 5.8-15.5 6-24.7 6-5.2 0-9.4-.2-9.4-.5 0-1.1 14.1-21.5 24.2-35 33.2-44.5 74.3-86.5 117.7-120.3 18.5-14.4 17.4-13.9 30.1-14.1 8.5-.2 15.1.5 29 3l18.1 3.2 3.7-3.6c2.2-2.1 4.7-6.2 6-9.7 1.8-4.6 4.3-8.1 10.1-14.2l7.7-8.1 8.3-.5c7.2-.4 9.1-.9 13.9-3.8 6.6-4 19.2-9 25.9-10.3 2.7-.6 18.1-2 34.3-3.2l29.5-2.1 3.1-3c1.7-1.6 5.3-5.6 8-8.9 4.8-5.8 5-5.9 9.9-5.9 6.9.1 19.4 1.8 22.7 3.1 1.5.6 2.9 2.2 3.3 3.7.3 1.4 1.6 3.9 2.7 5.5 1.6 2.2 1.9 3.9 1.6 7.7-.5 4.4-.3 4.8 1.2 4 1-.5 6.2-5.6 11.5-11.2 8.7-9.3 10.5-11.9 18.4-26.8l8.8-16.5 6.9-.7c3.8-.4 10.3-1 14.5-1.3l7.6-.6 4.6-8.2 4.7-8.2-4.3-.6-4.2-.6 5-.3c20.8-1.2 39.9-1.7 50.5-1.4 6.9.2 15.3.4 18.7.4zM22.3 555.3c3.7 14.9 8.7 37.6 11.1 50.3l4.4 23.1-.8 21.9-.8 21.9 9.4 17.1c5.2 9.3 9.4 17.5 9.4 18.2 0 .6-2.1 8.5-4.6 17.4l-4.6 16.3-1.1 30-1 30.1 6.1 17.4c6.4 18.1 8.7 28.4 15.6 69.6l3.2 19.2 6 9.8c4.5 7.4 7.4 14 12 27.6 3.4 9.9 5.8 17.6 5.3 17.1-1.4-1.5-13.7-24-20.7-38-34.6-69.2-55.5-142-63.7-221.8-4.3-41.6-3.7-98.2 1.5-140 2.3-17.8 5.1-34.5 5.9-34.5.3 0 3.7 12.3 7.4 27.3z" />
        <Path d="M822.5 144l1 13-8.5 9.7c-5.9 6.7-9.5 11.8-11.3 16.2-1.5 3.5-2.6 6.5-2.4 6.7.4.5 46.1-1.7 46.6-2.2.7-.6-3.9-15.2-7.9-25.4-2.1-5.2-4.3-13.1-5-17.5-.7-4.4-1.6-8.6-2-9.4-.7-1.3-7.8-4-10.5-4.1-.7 0-.7 4.2 0 13zM996.8 954.1l-13.7 11-16.3 1.1-16.3 1.1-8.7 6.6c-8.5 6.4-8.8 6.8-11.8 14.6-3 7.7-3.6 8.4-13.6 17.3-10.6 9.5-13.8 11.2-20.6 11.2-4.2 0-4.5.5-2.2 3.8 1.5 2.1 1.3 2.5-4.5 9l-6.1 6.7v8.2c0 8.3 0 8.3 2.6 8.3 3.3 0 33.5-3 35-3.5.6-.2 13.9-14.6 29.5-32 15.6-17.5 30.2-33.8 32.4-36.2 3.7-4.1 4.6-4.5 11-5.5 6.9-1.1 7.1-1.1 15.3-9.2 4.5-4.4 8.2-8.5 8.2-9.1 0-1.7-5.1-14.5-5.8-14.5-.4.1-6.9 5-14.4 11.1z" />
      </G>
    </Svg>
  )
}

export default EarthIcon