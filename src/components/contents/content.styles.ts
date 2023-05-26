"use client";
import { styled as styles } from "@stitches/react";
import styled from "styled-components";

export const Container = styles("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  position: "relative",
  animation: "fadeIn",
  animationDuration: "2s",
  transition: "0.3s ease-in-out",

  variants: {
    height: {
      half: {
        height: "50vh",
      },
      full: {
        height: "100vh",
      },
    },
  },
});

export const HoverImageLeft = styled.div<ImageHover>`
  background: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  animation: fadeInBottomLeft;
  animation-duration: 2s;
  transition: all 0.3s ease-in-out;
  z-index: 3;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => props.widthTablet};
    height: ${(props) => props.heightTablet};
    top: ${(props) => props.topTablet};
    right: ${(props) => props.rightTablet};
    left: ${(props) => props.leftTablet};
    bottom: ${(props) => props.bottomTablet};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => props.widthMobile};
    height: ${(props) => props.heightMobile};
    top: ${(props) => props.topMobile};
    right: ${(props) => props.rightMobile};
    left: ${(props) => props.leftMobile};
    bottom: ${(props) => props.bottomMobile};
  }

  @media only screen and (max-width: 500px) {
    width: ${(props) => props.widthMobileS};
    height: ${(props) => props.heightMobileS};
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fadeIn;
  }

  @media only screen and (max-width: 375px) {
    width: ${(props) => props.widthMobileSS};
    height: ${(props) => props.heightMobileSS};
  }
`;

export const HoverImageRight = styled.div<ImageHover>`
  background: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  animation: fadeInBottomRight;
  animation-duration: 2s;
  transition: all 0.3s ease-in-out;
  z-index: 3;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => props.widthTablet};
    height: ${(props) => props.heightTablet};
    top: ${(props) => props.topTablet};
    right: ${(props) => props.rightTablet};
    left: ${(props) => props.leftTablet};
    bottom: ${(props) => props.bottomTablet};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => props.widthMobile};
    height: ${(props) => props.heightMobile};
    top: ${(props) => props.topMobile};
    right: ${(props) => props.rightMobile};
    left: ${(props) => props.leftMobile};
    bottom: ${(props) => props.bottomMobile};
  }

  @media only screen and (max-width: 500px) {
    width: ${(props) => props.widthMobileS};
    height: ${(props) => props.heightMobileS};
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fadeIn;
  }

  @media only screen and (max-width: 375px) {
    width: ${(props) => props.widthMobileSS};
    height: ${(props) => props.heightMobileSS};
  }
`;

export const InnerSection = styles("div", {
  width: "100vw",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "1rem",
  animation: "fadeInLeft",
  animationDuration: "0.5s",

  variants: {
    bgColor: {
      primary: {
        backgroundColor: "#fff",
      },
      secondary: {
        backgroundColor: "#F5F4F9",
      },
      highlight: {
        backgroundColor: "#5E3DB3",
      },
      highlight_Dark: {
        backgroundColor: "#090C35",
      },
    },
    height: {
      20: {
        height: "20%",
      },
      25: {
        height: "25%",
      },
      30: {
        height: "30%",
      },
      40: {
        height: "40%",
      },
      50: {
        height: "50%",
      },
      55: {
        height: "55%",
      },
      60: {
        height: "60%",
      },
    },
    align: {
      left: {
        flexDirection: "row",
      },
      right: {
        flexDirection: "row-reverse",
      },
    },
  },

  "@media only screen and (max-width: 500px)": {
    display: "none",
  },
});

export const Seperate = styles("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  width: "50%",
  height: "100%",

  "@media only screen and (max-width: 500px)": {
    display: "none",
  },
});

export const SeperateMobile = styles("div", {
  display: "none",

  "@media (max-width: 500px)": {
    display: "flex",
    width: "100%",
    position: "relative",
    paddingBottom: "2%",
  },

  variants: {
    bgColor: {
      normal: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        backgroundColor: "#fff",
        height: "60%",
        zIndex: "1",
      },
      detail: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: "40%",
        backgroundColor: "#F5F4F9",
        zIndex: "2",
      },
    },
  },

  defaultVariants: {
    bgColor: "normal",
  },
});

export const MobileContainerSlider = styles("div", {
  width: "100%",
  height: "100%",
  position: "absolute",
  left: "0",
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const ParagraphHeader = styles("h3", {
  color: "#C2C2C2",
  fontSize: "36px",
  fontWeight: "400",
  letterSpacing: "1.5px",
  position: "relative",
  marginLeft: "3rem",
  animation: "fadeInRight",
  animationDuration: "2s",
  zIndex: "5",

  "@media only screen and (max-width: 1440px)": {
    fontSize: "34px",
  },
  "@media only screen and (max-width: 1366px)": {
    fontSize: "30px",
    marginLeft: "0",
  },
  "@media only screen and (max-width: 1280px)": {
    fontSize: "28px",
  },

  "@media only screen and (max-width: 500px)": {
    margin: "0",
    marginBottom: "10%",
    fontSize: "28px",
    lineHeight: "33px",
  },
});

export const NumberParagraph = styles("div", {
  fontSize: "18px",
  position: "absolute",
  left: "-12%",
  top: "15%",
  animation: "fadeInUp",
  animationDuration: "3s",
  zIndex: "5",

  "@media only screen and (max-width: 1366px)": {
    left: "-15%",
    fontSize: "16px",
  },
  "@media only screen and (max-width: 1280px)": {
    left: "-20%",
    fontSize: "14px",
  },
  "@media only screen and (max-width: 500px)": {
    fontSize: "18px",
    left: "-16%",
    top: "-5%",
  },

  variants: {
    fcolor: {
      normal: {
        color: "#000",
      },
      highlight: {
        color: "#8F6BE8",
      },
    },
  },

  defaultVariants: {
    fcolor: "normal",
  },
});

export const LineHighlight = styles("div", {
  position: "absolute",
  width: "19px",
  height: "5px",
  borderRadius: "2.5px",
  left: "-11%",
  bottom: "15%",
  animation: "fadeInUp",
  animationDuration: "3s",
  zIndex: "5",

  "@media only screen and (max-width: 1366px)": {
    left: "-15%",
    height: "4px",
  },
  "@media only screen and (max-width: 1280px)": {
    left: "-20%",
    bottom: "0",
  },
  "@media only screen and (max-width: 500px)": {
    height: "5px",
    left: "-15%",
  },

  variants: {
    shade: {
      normal: {
        backgroundColor: "#603EBE",
      },
      highlight: {
        backgroundColor: "#fff",
      },
    },
  },

  defaultVariants: {
    shade: "normal",
  },
});

export const DetailParagraph = styles("p", {
  fontSize: "20px",
  lineHeight: "28px",
  margin: "1rem",
  marginTop: "2rem",
  animation: "fadeInRight",
  animationDuration: "2s",
  zIndex: "5",
  width: "80%",

  "@media only screen and (max-width: 1440px)": {
    fontSize: "18px",
  },
  "@media only screen and (max-width: 1366px)": {
    fontSize: "16px",
    position: "relative",
    left: "-8.2%",
    width: "100%",
  },
  "@media only screen and (max-width: 1280px)": {
    left: "-10%",
  },
  "@media only screen and (max-width: 500px)": {
    left: "0",
    padding: "0 5%",
    fontSize: "15px",
    lineHeight: "18px",
  },

  variants: {
    fcolor: {
      normal: {
        color: "#000",
      },
      invert: {
        color: "#fff",
      },
    },
  },

  defaultVariants: {
    fcolor: "normal",
  },
});
