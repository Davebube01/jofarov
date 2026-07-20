"use client";

import ReactCountUp from "react-countup";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function CountUp({ end, suffix = "", prefix = "", duration = 2.5 }: CountUpProps) {
  return (
    <ReactCountUp
      end={end}
      suffix={suffix}
      prefix={prefix}
      duration={duration}
      enableScrollSpy
      scrollSpyOnce
    />
  );
}
