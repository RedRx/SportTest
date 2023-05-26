import Content from "@c/contents/Content";
import "animate.css";

export default function Home() {
  const content_americanFootball: ContentProps = {
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

  const content_basketball: ContentProps = {
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

  return (
    <div>
      <Content {...content_americanFootball} />
      <Content {...content_basketball} />
    </div>
  );
}
