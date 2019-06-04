import * as React from "react";
import {IShowcaseView} from "dyna-showcase";
import {
  DynaPickerContainer,
  EColor,
  EStyle,
  IDynaPickerContainerProps
} from "../../../src";

export const colors: IShowcaseView = {
  slug: 'colours',
  faIconName: 'flask',
  title: 'rounded - colours',
  center: true,
  wrapperStyle:{
    width: "50%",
    height: "50px",
    border: "1px solid darkgray",
    backgroundColor: "gray",
  },
  component: (
    <DynaPickerContainer
      show
    >
      <div>
        <h1>my content</h1>
        <h3>the content of my picker</h3>
        <p>awesome!</p>
      </div>
    </DynaPickerContainer>
  ),
  props: [
    {
      slug: 'white-black',
      title: 'white-black',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.WHITE_BLACK,
      } as IDynaPickerContainerProps
    },
    {
      slug: 'black-white',
      title: 'black-white',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.BLACK_WHITE,
      } as IDynaPickerContainerProps
    },
    {
      slug: 'gray-white-black',
      title: 'gray-white-black',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.GREY_WHITE,
      } as IDynaPickerContainerProps
    },
    {
      slug: 'transparent-white',
      title: 'transparent-white',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.TRANSPARENT_WHITE,
      } as IDynaPickerContainerProps
    },
    {
      slug: 'white-red',
      title: 'white-red',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.WHITE_RED,
      } as IDynaPickerContainerProps
    },
    {
      slug: 'orange-white',
      title: 'orange-white',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.ORANGE_WHITE,
      } as IDynaPickerContainerProps
    },
    {
      slug: 'white-orange',
      title: 'white-orange',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.WHITE_ORANGE,
      } as IDynaPickerContainerProps
    },
    {
      slug: 'orange-white-hide',
      title: 'orange-white-hide',
      props: {
        show: false,
        style: EStyle.ROUNDED,
        color: EColor.ORANGE_WHITE,
      } as IDynaPickerContainerProps
    },
    {
      slug: 'orange-white-hide-non-responsive',
      title: 'orange-white-hide-responsive',
      props: {
        show: true,
        style: EStyle.ROUNDED,
        color: EColor.ORANGE_WHITE,
        responsive: false,
      } as IDynaPickerContainerProps
    },
  ]
}
