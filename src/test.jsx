import React from "react";
import { BackgroundGradientAnimation } from "./component/ui/BackgroundGradientAnimation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <p className="text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          Gradients X Animations
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
