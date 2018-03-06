import * as React from "react";
import {EColor} from "dyna-ui-styles";

import "./style.less";
import "./color.less";

export enum EStyle {
  ROUNDED = "INLINE_ROUNDED",
}

export {EColor}

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

  constructor(props: IDynaPickerContainerProps) {
    super(props);
    this.keepInScreen = this.keepInScreen.bind(this);
  }

  public refs: {
    container: HTMLDivElement,
  };

  public componentDidMount(): void {
    this.keepInScreen();
    window.addEventListener("resize", this.keepInScreen);
  }

  public componentWillUnmount(): void {
    window.removeEventListener("resize", this.keepInScreen);
  }

  public componentDidUpdate(): void {
    this.keepInScreen();
  }

  private keepInScreen(): void {
    const {show} = this.props;
    const {container} = this.refs;
    if (!show) return;

    // reset the position to get the actual default value
    container.style.left = "";
    container.style.right = "";

    const getContainerLeft = (): number => container.getClientRects()[0].left; // IE11 bug fix, don't use getComputedStyle!

    if (getContainerLeft() + container.offsetWidth > window.innerWidth - 10) {
      container.style.right = "10px";
    }

    if (getContainerLeft() - 10 < 0) {
      container.style.right = "";
      container.style.left = "10px";
    }
  }

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
      <div className={className} ref="container">{children}</div>
    );
  }
}
