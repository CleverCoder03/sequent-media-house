"use client";

import React from "react";

const MarqueeIcon = ({ variant = 1, className = "", width = 1.5 }) => {
  const commonProps = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: width,
    className: `w-[0.8em] h-[0.8em] ${className}`, // scales with text
  };

  switch (variant) {
    case 1:
      return (
        <svg {...commonProps}>
          <polygon points="10,30 24,10 38,30" />
          <polygon points="6,34 20,14 34,34" />
          <polygon points="14,38 28,18 42,38" />
        </svg>
      );

    case 2:
      return (
        <svg {...commonProps}>
          <polygon points="8,22 26,22 34,14 16,14" />
          <polygon points="14,34 32,34 40,26 22,26" />
        </svg>
      );

    case 3:
      return (
        <svg {...commonProps}>
          <circle cx="20" cy="24" r="12" />
          <circle cx="28" cy="24" r="12" />
          <circle cx="24" cy="20" r="12" />
        </svg>
      );

    case 4:
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="16" />
          <circle cx="24" cy="24" r="10" />
          <circle cx="24" cy="24" r="4" />
          <line x1="24" y1="8" x2="24" y2="40" />
        </svg>
      );

    case 5:
      return (
        <svg {...commonProps}>
          <polygon points="8,18 28,18 40,24 28,30 8,30" />
          <line x1="12" y1="20" x2="26" y2="20" />
          <line x1="12" y1="24" x2="26" y2="24" />
          <line x1="12" y1="28" x2="26" y2="28" />
        </svg>
      );

    default:
      return null;
  }
};

export default MarqueeIcon;
