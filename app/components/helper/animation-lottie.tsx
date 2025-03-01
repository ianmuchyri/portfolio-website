"use client";

import Lottie, { LottieOptions } from "lottie-react";

const AnimationLottie = ({
  animationPath,
  width = "95%",
}: {
  animationPath: unknown;
  width?: string;
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
