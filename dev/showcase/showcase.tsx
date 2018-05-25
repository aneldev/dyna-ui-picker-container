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
      slug: 'colours',
      faIconName: 'flask',
      title: 'rounded - colours',
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
    },
    {
      slug: 'in-screen',
      faIconName: 'flask',
      title: 'in the screen test',
      description:'Since is not responsive, it should stay inside the screen',
      center: true,
      component: (
        <DynaPickerContainer
          responsive={false}
          show
        >
          <div style={{whiteSpace:"nowrap"}}>
            <h1>my content</h1>
            <h3>the content of my picker is a wide...</h3>
            <p>awesome!</p>
          </div>
        </DynaPickerContainer>
      ),
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
