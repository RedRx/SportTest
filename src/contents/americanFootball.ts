export const content_americanFootball: ContentProps = {
  // NOTE: Content properties with autocomplete support to select variants
  //
  contentHeader: "ATHLETS", // Custom name of the content

  // Autocomplete variants
  contentHeight: "full",
  contentAlign: "right",
  hoverImage: {
    src: "/assets/images/amerf.svg",
    srcOptional: "/assets/images/amerfm.svg",
    srcOptional2: "/assets/images/amerfmm.svg",
    width: "100%",
    height: "100%",
    widthMobileS: "70%",
    heightMobileS: "52%",
    top: "7%",
    left: "-25%",
    leftTablet: "-35%",
    leftMobile: "-25%",
  },
  topLayerBg: "primary",
  topLayerHeight: 40,
  centerLayerBg: "secondary",
  centerLayerHeight: 30,
  bottomLayerBg: "highlight",
  bottomLayerHeight: 30,
  detailParagraphTop: `Connect with coaches directly, you can ping coaches to view profile.`,
  detailParagraphCenter: `Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.`,
  detailParagraphBottom: `Resources and tools for you to get better as a student Athelte. 
Access to training classes, tutor sessions, etc`,
  zindex: "2",
};
