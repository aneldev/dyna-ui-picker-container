import * as React from "react";
import {IShowcaseView} from "dyna-showcase";
import {DynaPickerContainer} from "../../../src";

export const inScreen: IShowcaseView = {
  slug: 'in-screen',
  faIconName: 'flask',
  title: 'in the screen test',
  description: 'Since is not responsive, it should stay inside the screen',
  center: true,
  component: (
    <DynaPickerContainer
      responsive={false}
      show
    >
      <div style={{ whiteSpace: "nowrap" }}>
        <h1>my content</h1>
        <h3>the content of my picker is a wide...</h3>
        <p>awesome!</p>
      </div>
    </DynaPickerContainer>
  ),
};
