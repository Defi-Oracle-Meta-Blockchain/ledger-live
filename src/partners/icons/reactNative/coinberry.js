//@flow
import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  width: number
};

const Coinberry = ({ width = 150 }: Props) => (
  <Svg viewBox="0 0 612 205.1" width={width} height={(width / 612) * 205.1}>
    <Path
      fill="#334F93"
      d="M146.3 101.8c5.2 0 9.4-4 9.4-9.4 0-5.2-4.1-9.5-9.4-9.5-5.5 0-9.5 4.4-9.5 9.5 0 5.3 3.9 9.4 9.5 9.4M102.3 164.7c8.4 0 9.4-10.3 9.4-25.7 0-18.7-2-25.8-9.5-25.8-8.9 0-9.6 12.1-9.6 25.8 0 13.1 0 25.7 9.7 25.7m-.1-55.3c15.9 0 27.3 12.7 27.3 29.6 0 16.1-10.8 29.5-27.3 29.5-16.9 0-27.4-13.7-27.4-29.5 0-15.6 10.6-29.6 27.4-29.6M246.2 155c0 3.4 1.6 9.6 8.3 9.6 7.3 0 11.5-6.1 11.5-25.2 0-7.1-.8-23.3-11.3-23.3-5.6 0-7.4 4.5-8.5 7.1V155zm-23.6-70.1h23.6v31.4c2-2.2 6.5-6.8 14.7-6.8 14 0 22.8 12.3 22.8 28.1 0 15.4-8.3 30.9-28.3 30.9-2.8 0-6.8-.9-11-3.5-2.8-1.8-6.3-1.8-9 .1l-4.7 3.3h-1.4V94.8c0-5.7-2.3-6.1-6.7-7v-2.9z"
    />
    <Path
      fill="#334F93"
      d="M77.8 137.3H76c-.2 6.7-2.4 12.8-5.9 16.9-.6.8-2.6 2.6-3.5 3.4-2 1.7-4.8 2.8-8.8 2.8-9.5 0-16.9-9.8-16.9-26.8 0-5.5.9-20.3 10.3-20.3 1.8 0 4.9 1.1 4.9 4.7 0 6.6 0 12.5 6.8 12.5 1 0 8.3 0 8.3-7.7 0-8.7-10.2-13.2-18.8-13.2-11.4 0-28.6 7.4-28.6 31.3 0 15 10.4 27.8 25.9 27.8 7.6 0 14.3-3 19.5-8.3 1-1.2 8.6-8.1 8.6-23.1M370.1 166.7h-32.3v-2.9c3.9-.8 6.6-1.2 6.6-7.3V121c0-6-2.9-6.7-6.6-7.1v-3h22.9l.1 4.4c0 1.6 2 2.4 3.2 1.1 3-3.4 7.3-7 12.8-7 8.3 0 10.1 6.6 10.1 9.5 0 3.1-1.7 8.1-7.7 8.1-7 0-6.9-7.1-10.8-7.1-1.8 0-7.1 2.7-7.1 11.5v22.9c0 7.4 1.5 9.3 8.8 9.6v2.9zM218.1 157v-30.4c0-13.3-9.6-17.1-16.2-17.1s-11.9 4.2-14.8 7.2c-1 1-2.6.3-2.6-1.1V111h-23.1v2.9c4.8.8 6.5 1.7 6.5 7.1V158.7c0 2.8-2.3 5.1-5.1 5.1H160c-2.8 0-5.1-2.3-5.1-5.1v-47.8h-23.2v2.9c4.6.9 6.5 1.7 6.5 7.1v35.6c0 5.8-2 6.1-6.5 7.3v2.9h59v-2.9c-5.6-.6-5.9-4.1-5.9-6.9v-32.4c0-1.1 5.2-7 10.1-7 6.6 0 6.7 6.7 6.7 10.1V157c0 4.5-1.7 6.6-5.7 6.9v2.9h28.5V164c-6.3-.4-6.3-4.1-6.3-7M475.2 110.9v2.9c3 .1 6.7.1 6.7 4 0 1.8-.6 3.4-1.3 5.5l-8.3 23.2-8.7-22.4c-1.1-2.7-2.5-5.8-2.5-7 0-2.9 3.2-3 6.5-3.2v-3H446c-3 0-5 3.1-3.8 5.8l7.2 15.9 14.5 35.7-2.2 6.5c-.9 2.7-3.9 9.9-8 9.9-1.5 0-2-1.5-2-2s.3-1.1.3-2.2c0-2.2-1.3-6.1-6.8-6.1-7.3 0-8 6.1-8 7.9 0 3.9 3.2 9.5 11.2 9.5 11.4 0 14-6.9 20-23l18.1-48.1c2.3-6 4.4-6.3 7-6.7v-3h-18.3zM420.9 166.7h-32.3v-2.9c3.9-.8 6.6-1.2 6.6-7.3V121c0-6-2.9-6.7-6.6-7.1v-3h22.9l.1 4.4c0 1.6 2 2.4 3.2 1.1 3-3.4 7.3-7 12.8-7 8.3 0 10.1 6.6 10.1 9.5 0 3.1-1.7 8.1-7.7 8.1-7 0-6.9-7.1-10.8-7.1-1.8 0-7.1 2.7-7.1 11.5v22.9c0 7.4 1.5 9.3 8.8 9.6v2.9zM487.5 159.5h.9c1 0 1.4-.8 1.4-1.8 0-1.2-.6-1.5-1.4-1.5h-.9v3.3zm-2.3-3.7h3.5c1.2 0 2.4.5 2.4 1.8 0 1.1-.6 1.8-1.6 2.2l1.2 1.6c.5.8 1.2 1.4 1.5 1.7v.2h-1.3c-.6 0-1.2-1.4-2.5-3.2h-1v2c0 .9 0 .9 1 1v.3h-3.2v-.3c1-.1 1-.1 1-1v-4.8c0-.9 0-.9-1-1v-.5zm3.4-2.4c-3.3 0-5.8 2.9-5.8 6.1s2.6 6.1 5.8 6.1c3.2 0 5.8-2.9 5.8-6.1-.1-3.2-2.6-6.1-5.8-6.1m0 13.1c-3.9 0-7-3.1-7-7s3-7 7-7c3.9 0 6.9 3.1 6.9 7s-3.1 7-6.9 7M321.8 132.6c-.1-3.8-.1-10.1-1.1-13.7-.8-2.7-2.3-5.7-6.6-5.7-4.5 0-8.6 2.7-8.6 19.4h16.3zm15.5 20.7c-7.4 11.3-14.3 15.2-24 15.2-12.3 0-24.6-8.9-24.6-29.7 0-18 11.1-29.4 25-29.4 21.1 0 22.7 21.1 23 27.7h-30.6c.3 10.3 3 22.7 14.5 22.7 7.1 0 11.4-5.4 13.7-8.1l3 1.6zM579 43c-7.2 0-9.7 6.1-18.8 3.3-.8-.3-1.5.7-.8 1.3 5.5 4.6 14.1 11.2 24 10.6 7.9-.6 7.3-15.2-4.4-15.2"
    />
    <Path
      fill="#EC2D6E"
      d="M588.3 63.8c-.5 2.5-1.3 5.5-2 7.4-.2.4-.7.6-1.1.4-18.2-8.8-38.9 11.7-60.7 5.1-17.7-5.3-18.7-40 3.9-40.5 18.3-.4 32.8 30.4 59 26.6.5-.1 1 .2.9 1M533 94.4c9.5 1.2 22.8 8.9 30.8 9.3.7 0 .9.9.4 1.4-4.7 3.9-9.5 6.3-13.8 6.3-6.8 0-15-6.1-22.3-15.2-1.2-1.7 2.9-2 4.9-1.8"
    />
    <Path
      fill="#EC2D6E"
      d="M525.2 90.4c5.4-3.4 16.5.4 27.6 4.9 10.6 4.3 16.1 4.5 20.3.3 4.8-4.8 14.5-18.8 7.5-20.6-16.1-4.1-38.2 15.1-60.6 5.3-.7-.3-1.3.3-1 1 .4 1.1 2.8 6.1 4.9 8.9.4.4.7.6 1.3.2M541.8 15.1c6 0 6.8 8.1 13.1 15.4.5.7-.1 1.3-.5 1.3-20-.8-21-16.7-12.6-16.7M560.4 28.9c-1.1-.7-2.3-1.8-3.2-3.2-.2-.2-.2-.5 0-.8 1.8-2.9 3.4-6.7 5.8-8.3 3.7-2.8 10.6.6 7.8 6.2-1.1 2.2-3.6 4.5-6.2 6.1-1.8 1.1-3.4.6-4.2 0"
    />
  </Svg>
);
export default Coinberry;
