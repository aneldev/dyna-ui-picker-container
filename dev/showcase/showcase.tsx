import * as React from 'react';
import {DynaPickerContainer, IDynaPickerContainerProps, EColor, EStyle} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

require('./showcase.less');

export default {
  logo: <Logo />,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>dyna-ui-picker-container</h3>
          <p>simple picker container</p>
        </div>
      ),
    },
    {
      slug: 'sizes',
      faIconName: 'flask',
      title: 'rounded - white/black - sizes',
      center: true,
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
      wrapperStyle:{
      },
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
            color: EColor.GRAY_WHITE_BLACK,
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
          slug: 'orange-white-hide',
          title: 'orange-white-hide',
          props: {
            show: false,
            style: EStyle.ROUNDED,
            color: EColor.ORANGE_WHITE,
          } as IDynaPickerContainerProps
        },
      ]
    },
    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><a href="https://github.com/aneldev/dyna-ui-picker-container">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-ui-picker-container">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
