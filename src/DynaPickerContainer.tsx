import * as React from "react";

import "./style.less";
import "./color.less";

export enum EStyle {
  ROUNDED = "INLINE_ROUNDED",
}

export enum EColor {
  WHITE_BLACK = "WHITE_BLACK",
  GRAY_WHITE_BLACK = "GRAY_WHITE_BLACK",
  WHITE_RED = "WHITE_RED",
  BLACK_WHITE = "BLACK_WHITE",
  TRANSPARENT_WHITE = "TRANSPARENT_WHITE",
  ORANGE_WHITE = "ORANGE_WHITE",
}

export interface IDynaPickerContainerProps {
  show?: boolean;
  children: any;
  style?: EStyle;
  color?: EColor;
  responsive?: boolean;
}

export class DynaPickerContainer extends React.Component<IDynaPickerContainerProps> {
  static defaultProps: IDynaPickerContainerProps = {
    show: true,
    children: null,
    style: EStyle.ROUNDED,
    color: EColor.WHITE_BLACK,
    responsive: true,
  };

  public render(): JSX.Element {
    const {
      show, children, style, color, responsive,
    } = this.props;

    const className: string = [
      'dyna-ui-picker-container',
      `dyna-ui-picker-container--style-${style}`,
      `dyna-ui-picker-container--color-${color}`,
      `dyna-ui-picker-container--${show ? 'show' : 'hide'}`,
      `dyna-ui-picker-container--${responsive ? 'responsive' : ''}`,
    ].join(' ').trim();

    return (
      <div className={className}>{children}</div>
    );
  }
}
