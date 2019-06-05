import * as React from 'react';
import {IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import {intro} from "./views/intro";
import {colors} from "./views/colors";
import {multipleBoxesInARow} from "./views/multiple-boxes-in-a-row";
import {inScreen} from "./views/in-screen";

import "./style.less";
import {theEnd} from "./views/the-end";

export default {
  logo: <Logo/>,
  views: [
    intro,
    colors,
    multipleBoxesInARow,
    inScreen,
    theEnd,
  ]
}as IShowcase;
