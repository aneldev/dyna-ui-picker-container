import * as React from "react";
import {guid} from "dyna-guid";
import {EColor} from "dyna-ui-styles";

import "./style.less";
import "./color.less";

export enum EStyle {
  ROUNDED = "INLINE_ROUNDED",
}

export {EColor}

export interface IDynaPickerContainerProps {
  show?: boolean;
  children: JSX.Element;
  style?: EStyle;
  color?: EColor;
  responsive?: boolean;   // Set it to true and in tablet breakpoint will occupy the whole screen.
}

export class DynaPickerContainer extends React.Component<IDynaPickerContainerProps> {
  static defaultProps: Partial<IDynaPickerContainerProps> = {
    show: true,
    style: EStyle.ROUNDED,
    color: EColor.WHITE_BLACK,
    responsive: true,
  };

  private readonly id = `id--${guid()}`;
  private readonly containerRef = React.createRef<HTMLDivElement>();
  private readonly innerStyleRef = React.createRef<HTMLStyleElement>();

  constructor(props: IDynaPickerContainerProps) {
    super(props);
    (window as any).point = this.pointLeft.bind(this)
  }

  public componentDidMount(): void {
    this.keepInScreen();
    window.addEventListener("resize", this.keepInScreen);
  }

  public componentWillUnmount(): void {
    window.removeEventListener("resize", this.keepInScreen);
  }

  public componentDidUpdate(): void {
    this.keepInScreen();
    this.pointLeft(this.getPointLeft());
  }

  private pointLeft(left: number): void {
    const { show } = this.props;
    const pickerContainer = this.containerRef.current;
    if (!show) return;
    if (!pickerContainer) return;

    const css = `
      .${this.id}::before{ left: ${left}px; }
      .${this.id}::after{ left: ${left}px; }
    `;

    if (this.innerStyleRef.current) this.innerStyleRef.current.innerHTML = css;
  }

  private getPointLeft = (): number => {
    const { show } = this.props;
    const pickerContainer = this.containerRef.current;
    if (!pickerContainer) return -1;
    const content: HTMLElement = pickerContainer.parentElement as HTMLElement;
    if (!show) return -1;

    const contentBCR = content.getBoundingClientRect();
    const contentX = contentBCR.left;
    const contentWidth = contentBCR.width;
    const pickerBCR = pickerContainer.getBoundingClientRect();
    const pickerX = pickerBCR.left;

    return contentX - pickerX + (contentWidth / 2) - 10;
  };

  private keepInScreen = (): void => {
    const {show} = this.props;
    const container = this.containerRef.current;
    if (!show) return;
    if (!container) return;

    // reset the position to get the actual default value
    container.style.left = "";
    container.style.right = "";

    if (window.innerWidth < 768) return; // exit do not adjust because we are in mobile/tablet view

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
      this.id,
    ].filter(Boolean).join(' ');

    return (
      <>
        <style ref={this.innerStyleRef}/>
        <div className={className} ref={this.containerRef}>
          {children}
        </div>
      </>
    );
  }
}
