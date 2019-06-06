import * as React from "react";
import {guid} from "dyna-guid";
import {EColor} from "dyna-ui-styles";

import "./style.less";
import "./color.less";

export interface IDynaPickerContainerProps {
  show?: boolean;
  style?: EStyle;
  color?: EColor;
  pointerPosition?: EPointerPosition;
  responsive?: boolean;   // Set it to true and in tablet breakpoint will occupy the whole screen.
  children: JSX.Element;
}

export enum EStyle {
  ROUNDED = "INLINE_ROUNDED",
}

export enum EPointerPosition {
  LEFT = "LEFT",
  MIDDLE = "MIDDLE",
  RIGHT = "RIGHT",
}

export {EColor}

const SIZE_OF_POINTER = 16;
const EDGE_GAP = 8;
const MIN_POINTER_GAP = 32; // from the picker

export class DynaPickerContainer extends React.Component<IDynaPickerContainerProps> {
  static defaultProps: Partial<IDynaPickerContainerProps> = {
    show: true,
    style: EStyle.ROUNDED,
    color: EColor.WHITE_BLACK,
    pointerPosition: EPointerPosition.MIDDLE,
    responsive: true,
  };

  private readonly id = `id--${guid()}`;
  private readonly containerRef = React.createRef<HTMLDivElement>();
  private readonly innerStyleRef = React.createRef<HTMLStyleElement>();

  public componentDidMount(): void {
    this.updatePosition();
    window.addEventListener("resize", this.updatePosition);
  }

  public componentWillUnmount(): void {
    window.removeEventListener("resize", this.updatePosition);
  }

  public componentDidUpdate(): void {
    this.updatePosition();
  }

  public updatePosition=(): void =>{
    const pointerPosition = this.getPointerPosition();
    if (pointerPosition === -1) return; // Exit. The ui is not ready or there is no need to locate..
    this.locatePicker(pointerPosition);
    this.locatePointer(pointerPosition);
  };

  private getPointerPosition = (): number => { // Get position of the pointer on the screen
    const { show, pointerPosition } = this.props;
    if (!show) return -1;

    const pickerContainer = this.containerRef.current;
    if (!pickerContainer) return -1;

    const content: HTMLElement = pickerContainer.parentElement as HTMLElement;
    const contentBCR = content.getBoundingClientRect();
    const contentLeft = contentBCR.left;
    const contentWidth = contentBCR.width;

    switch (pointerPosition) {
      case EPointerPosition.LEFT:
        return contentLeft + MIN_POINTER_GAP + EDGE_GAP;
      case EPointerPosition.RIGHT:
        return contentLeft + (contentWidth - MIN_POINTER_GAP - EDGE_GAP - EDGE_GAP);
      case EPointerPosition.MIDDLE:
      default:
        return contentLeft + (contentWidth / 2);
    }
  };

  private locatePointer(pointerPosition: number): void {
    const { show } = this.props;
    if (!show) return;

    const pickerContainer = this.containerRef.current;
    if (!pickerContainer) return;

    const pickerBCR = pickerContainer.getBoundingClientRect();
    const pickerLeft = pickerBCR.left;

    const localLeft = pointerPosition - pickerLeft - (SIZE_OF_POINTER / 2);

    const css = `
      .${this.id}::before{ left: ${localLeft}px; }
      .${this.id}::after{ left: ${localLeft + 1}px; }
    `;

    if (this.innerStyleRef.current) this.innerStyleRef.current.innerHTML = css;
  }

  private locatePicker(pointerPosition: number): void {
    const { show } = this.props;
    if (!show) return;

    const pickerContainer = this.containerRef.current;
    if (!pickerContainer) return;

    const windowWidth = window.innerWidth;
    const pickerWidth = pickerContainer.offsetWidth;

    const content: HTMLElement = pickerContainer.parentElement as HTMLElement;
    const contentBCR = content.getBoundingClientRect();
    const contentLeft = contentBCR.left;

    let pickerLeft: number = pointerPosition - (pickerWidth / 2);

    if (pickerLeft + pickerWidth > windowWidth - EDGE_GAP) pickerLeft = windowWidth - pickerWidth - EDGE_GAP;
    if (pointerPosition - pickerLeft < MIN_POINTER_GAP) pickerLeft = pointerPosition - MIN_POINTER_GAP;
    if (pickerLeft < EDGE_GAP) pickerLeft = EDGE_GAP;

    pickerLeft -= contentLeft;

    pickerContainer.style.left = `${pickerLeft}px`;
  }

  public render(): JSX.Element {
    const {
      show, children, style, color, responsive,
    } = this.props;

    const classNameWrapper: string = [
      'dyna-ui-picker-container__wrapper',
      this.id,
    ].filter(Boolean).join(' ');

    const classNameContainer: string = [
      'dyna-ui-picker-container',
      `dyna-ui-picker-container--style-${style}`,
      `dyna-ui-picker-container--color-${color}`,
      `dyna-ui-picker-container--${show ? 'show' : 'hide'}`,
      `dyna-ui-picker-container--${responsive ? 'responsive' : ''}`,
      this.id,
    ].filter(Boolean).join(' ');

    return (
      <div className={classNameWrapper}>
        <style ref={this.innerStyleRef}/>
        <div className={classNameContainer} ref={this.containerRef}>
          {children}
        </div>
      </div>
    );
  }
}
