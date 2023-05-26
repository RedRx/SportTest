export const content_basketball: ContentProps = {
  // NOTE: Content properties with autocomplete support to select variants
  //
  contentHeader: "PLAYERS", // Custom name of the content

  // Autocomplete variants
  contentHeight: "full",
  contentAlign: "left",
  hoverImage: {
    src: "/assets/images/basket.svg",
    srcOptional: "/assets/images/basketmm.svg",
    srcOptional2: "/assets/images/basketmm.svg",
    width: "85%",
    height: "85%",
    widthMobile: "100%",
    heightMobile: "100%",
    widthMobileS: "90%",
    heightMobileS: "45%",
    widthMobileSS: "100%",
    top: "3%",
    right: "-10%",
    topTablet: "2%",
    topMobile: "-10%",
    rightTablet: "-10%",
    rightMobile: "-33%",
  },
  topLayerBg: "primary",
  topLayerHeight: 55,
  centerLayerBg: "secondary",
  centerLayerHeight: 25,
  bottomLayerBg: "highlight_Dark",
  bottomLayerHeight: 20,
  detailParagraphTop: `Connect with talented athlete directly, you can watch their 
skills through video showreels directly from Surface 1.`,
  detailParagraphCenter: `Work with recruiter to increase your chances of finding
talented athlete.`,
  detailParagraphBottom: `Save your time, recruit proper athlets for your team.`,
  zindex: "1",
};
