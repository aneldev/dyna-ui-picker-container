import * as React from "react";

import "./style.less";
import "./color.less";

export enum EStyle {
  ROUNDED = "INLINE_ROUNDED",
}

export enum EColor {
  WHITE_BLACK = "WHITE_BLACK",
  WHITE_RED = "WHITE_RED",
  BLACK_WHITE = "BLACK_WHITE",
  TRANSPARENT_WHITE = "TRANSPARENT_WHITE",
  ORANGE_WHITE = "ORANGE_WHITE",
}

export interface IDynaPickerContainerProps {
  show: boolean;
  children: any;
  style?: EStyle;
  color?: EColor;
}

export class DynaPickerContainer extends React.Component<IDynaPickerContainerProps> {
  static defaultProps: IDynaPickerContainerProps = {
    show: true,
    children: null,
    style: EStyle.ROUNDED,
    color: EColor.WHITE_BLACK,
  };

  public render(): JSX.Element {
    const {
      show, children, style, color,
    } = this.props;

    const className: string = [
      'dyna-ui-pricker-container',
      `dyna-ui-pricker-container-style-${style}`,
      `dyna-ui-pricker-container-color-${color}`,
      show ? '--show' : '--hide',
    ].join(' ').trim();

    return (
      <div className={className}>
        <div className="dyna-ui-pricker-container-arrow-helper"/>
        <div className="dyna-ui-pricker-container-content">{children}</div>
      </div>
    );
  }
}
