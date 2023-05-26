"use client";
import React, { useEffect } from "react";
import {
  Container,
  InnerSection,
  Seperate,
  SeperateMobile,
  ParagraphHeader,
  NumberParagraph,
  LineHighlight,
  DetailParagraph,
  HoverImageLeft,
  HoverImageRight,
  MobileContainerSlider,
} from "./content.styles";
import { Typography } from "@mui/material";
import { useDetectWidth } from "@/hooks/useDetectWidth";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Content: React.FC<ContentProps> = ({
  contentHeader,
  contentHeight,
  contentAlign,
  hoverImage,
  topLayerBg,
  topLayerHeight,
  centerLayerBg,
  centerLayerHeight,
  bottomLayerBg,
  bottomLayerHeight,
  detailParagraphTop,
  detailParagraphCenter,
  detailParagraphBottom,
  zindex,
}) => {
  const width = useDetectWidth();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Container height={contentHeight} style={{ zIndex: zindex }}>
        {contentAlign === "right" && (
          <HoverImageLeft
            // src={hoverImage?.src as string}
            src={
              width! > 768
                ? (hoverImage?.src as string)
                : width! > 500
                ? (hoverImage?.srcOptional as string)
                : (hoverImage?.srcOptional2 as string)
            }
            width={hoverImage?.width as string}
            height={hoverImage?.height as string}
            widthTablet={hoverImage?.widthTablet as string}
            heightTablet={hoverImage?.heightTablet as string}
            widthMobile={hoverImage?.widthMobile as string}
            heightMobile={hoverImage?.heightMobile as string}
            widthMobileS={hoverImage?.widthMobileS as string}
            heightMobileS={hoverImage?.heightMobileS as string}
            widthMobileSS={hoverImage?.widthMobileSS as string}
            heightMobileSS={hoverImage?.heightMobileSS as string}
            top={hoverImage?.top as string}
            left={hoverImage?.left as string}
            bottom={hoverImage?.bottom as string}
            right={hoverImage?.right as string}
            topTablet={hoverImage?.topTablet as string}
            leftTablet={hoverImage?.leftTablet as string}
            bottomTablet={hoverImage?.bottomTablet as string}
            rightTablet={hoverImage?.rightTablet as string}
            topMobile={hoverImage?.topMobile as string}
            leftMobile={hoverImage?.leftMobile as string}
            bottomMobile={hoverImage?.bottomMobile as string}
            rightMobile={hoverImage?.rightMobile as string}
          />
        )}
        {contentAlign === "left" && (
          <HoverImageRight
            src={hoverImage?.src as string}
            width={hoverImage?.width as string}
            height={hoverImage?.height as string}
            widthTablet={hoverImage?.widthTablet as string}
            heightTablet={hoverImage?.heightTablet as string}
            widthMobile={hoverImage?.widthMobile as string}
            heightMobile={hoverImage?.heightMobile as string}
            widthMobileS={hoverImage?.widthMobileS as string}
            heightMobileS={hoverImage?.heightMobileS as string}
            widthMobileSS={hoverImage?.widthMobileSS as string}
            heightMobileSS={hoverImage?.heightMobileSS as string}
            top={hoverImage?.top as string}
            left={hoverImage?.left as string}
            bottom={hoverImage?.bottom as string}
            right={hoverImage?.right as string}
            topTablet={hoverImage?.topTablet as string}
            leftTablet={hoverImage?.leftTablet as string}
            bottomTablet={hoverImage?.bottomTablet as string}
            rightTablet={hoverImage?.rightTablet as string}
            topMobile={hoverImage?.topMobile as string}
            leftMobile={hoverImage?.leftMobile as string}
            bottomMobile={hoverImage?.bottomMobile as string}
            rightMobile={hoverImage?.rightMobile as string}
          />
        )}
        <InnerSection
          aria-label="top-layer"
          bgColor={topLayerBg}
          height={topLayerHeight}
          align={contentAlign}
        >
          <Seperate
            style={
              contentAlign === "left"
                ? ({ marginLeft: "8%" } as React.CSSProperties)
                : undefined
            }
          >
            <Typography
              variant="h1"
              color="#E7E7E7"
              sx={{
                fontSize: "90px",
                fontWeight: "400",
                lineHeight: "105px",
                marginBottom: "10%",
                animation: "fadeInDown",
                animationDuration: "3s",
                zIndex: "5",
                "@media only screen and (max-width: 1440px)": {
                  fontSize: "80px",
                },
                "@media only screen and (max-width: 1366px)": {
                  fontSize: "70px",
                },
                "@media only screen and (max-width: 1280px)": {
                  fontSize: "70px",
                  marginBottom: "5%",
                },
                "@media only screen and (max-width: 1024px)": {
                  fontSize: "80px",
                  marginBottom: "10%",
                },
              }}
            >
              {contentHeader}
            </Typography>
            <ParagraphHeader>
              <NumberParagraph>01</NumberParagraph>
              <LineHighlight />
              CONNECTION
            </ParagraphHeader>
            <DetailParagraph>{detailParagraphTop}</DetailParagraph>
          </Seperate>
          <Seperate />
        </InnerSection>

        <InnerSection
          aria-label="center-layer"
          bgColor={centerLayerBg}
          height={centerLayerHeight}
          align={contentAlign}
        >
          <Seperate
            style={
              contentAlign === "left"
                ? ({ marginLeft: "8%" } as React.CSSProperties)
                : undefined
            }
          >
            <ParagraphHeader>
              <NumberParagraph>02</NumberParagraph>
              <LineHighlight />
              COLLABORATION
            </ParagraphHeader>
            <DetailParagraph>{detailParagraphCenter}</DetailParagraph>
          </Seperate>
          <Seperate />
        </InnerSection>

        <InnerSection
          aria-label="bottom-layer"
          bgColor={bottomLayerBg}
          height={bottomLayerHeight}
          align={contentAlign}
        >
          <Seperate
            style={
              contentAlign === "left"
                ? ({ marginLeft: "8%" } as React.CSSProperties)
                : undefined
            }
          >
            <ParagraphHeader>
              <NumberParagraph
                fcolor={contentAlign === "left" ? "highlight" : "normal"}
              >
                03
              </NumberParagraph>
              <LineHighlight shade="highlight" /> GROWTH
              {/* Fix text space is not equal and not beauty */}
              {bottomLayerBg === "highlight" && (
                <span style={{ color: "#603EBE" }}>******</span>
              )}
              {bottomLayerBg === "highlight_Dark" && (
                <span style={{ color: "#090C35" }}>******</span>
              )}
            </ParagraphHeader>
            <DetailParagraph fcolor="invert">
              {detailParagraphBottom}
            </DetailParagraph>
          </Seperate>
          <Seperate />
        </InnerSection>

        {/*Mobile*/}
        <SeperateMobile>
          <Typography
            variant="h1"
            color="#E7E7E7"
            sx={{
              fontSize: "70px",
              fontWeight: "400",
              lineHeight: "105px",
              animation: "fadeInDown",
              animationDuration: "3s",
              marginLeft: "5%",
              marginTop: "1%",
            }}
          >
            {contentHeader}
          </Typography>
        </SeperateMobile>
        <SeperateMobile bgColor="detail">
          <Swiper
            // modules={[Navigation, Pagination, Scrollbar, A11y]}
            modules={[Pagination, A11y]}
            spaceBetween={1}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide>
              <MobileContainerSlider>
                <ParagraphHeader>
                  <NumberParagraph>01</NumberParagraph>
                  <LineHighlight />
                  CONNECTION
                </ParagraphHeader>
                <DetailParagraph>{detailParagraphTop}</DetailParagraph>
              </MobileContainerSlider>
            </SwiperSlide>
            <SwiperSlide>
              <MobileContainerSlider>
                <ParagraphHeader>
                  <NumberParagraph>02</NumberParagraph>
                  <LineHighlight />
                  COLLABORATION
                </ParagraphHeader>
                <DetailParagraph>{detailParagraphTop}</DetailParagraph>
              </MobileContainerSlider>
            </SwiperSlide>
            <SwiperSlide>
              <MobileContainerSlider>
                <ParagraphHeader>
                  <NumberParagraph>03</NumberParagraph>
                  <LineHighlight />
                  GROWTH UP
                  {/* <span style={{ color: '#f5f4f9' }}>***</span> */}
                </ParagraphHeader>
                <DetailParagraph>{detailParagraphTop}</DetailParagraph>
              </MobileContainerSlider>
            </SwiperSlide>
          </Swiper>
        </SeperateMobile>
      </Container>
    </>
  );
};

export default Content;
