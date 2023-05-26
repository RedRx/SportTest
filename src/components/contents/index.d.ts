interface LayerProps {
  layerBG: "primary" | "secondary" | "highlight" | "highlight_Dark";
  layerHeight: 20 | 25 | 30 | 40 | 50 | 55 | 60;
}

declare type ImageHover = {
  src: string;
  srcOptional?: string;
  srcOptional2?: string;
  width: string;
  height: string;
  widthTablet?: string | undefined;
  heightTablet?: string | undefined;
  widthMobile?: string | undefined;
  heightMobile?: string | undefined;
  widthMobileS?: string | undefined;
  heightMobileS?: string | undefined;
  widthMobileSS?: string | undefined;
  heightMobileSS?: string | undefined;
  top?: string | null | undefined;
  right?: string | null | undefined;
  left?: string | null | undefined;
  bottom?: string | null | undefined;
  topTablet?: string | null | undefined;
  rightTablet?: string | null | undefined;
  leftTablet?: string | null | undefined;
  bottomTablet?: string | null | undefined;
  topMobile?: string | null | undefined;
  rightMobile?: string | null | undefined;
  leftMobile?: string | null | undefined;
  bottomMobile?: string | null | undefined;
};

declare type ContentProps = {
  contentHeader?: string | undefined;
  contentHeight?: "half" | "full";
  contentAlign?: "left" | "right";
  hoverImage?: ImageHover | undefined;
  topLayerBg?: LayerProps["layerBG"];
  topLayerHeight?: LayerProps["layerHeight"];
  centerLayerBg?: LayerProps["layerBG"];
  centerLayerHeight?: LayerProps["layerHeight"];
  bottomLayerBg?: LayerProps["layerBG"];
  bottomLayerHeight?: LayerProps["layerHeight"];
  detailParagraphTop?: string | undefined;
  detailParagraphCenter?: string | undefined;
  detailParagraphBottom?: string | undefined;
  zindex?: string | undefined;
};
