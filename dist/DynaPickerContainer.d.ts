import * as React from "react";
import { EColor } from "dyna-ui-styles";
import "./style.less";
import "./color.less";
export interface IDynaPickerContainerProps {
    show?: boolean;
    style?: EStyle;
    color?: EColor;
    pointerPosition?: EPointerPosition;
    responsive?: boolean;
    children: JSX.Element;
}
export declare enum EStyle {
    ROUNDED = "INLINE_ROUNDED"
}
export declare enum EPointerPosition {
    LEFT = "LEFT",
    MIDDLE = "MIDDLE",
    RIGHT = "RIGHT"
}
export { EColor };
export declare class DynaPickerContainer extends React.Component<IDynaPickerContainerProps> {
    static defaultProps: Partial<IDynaPickerContainerProps>;
    private readonly id;
    private readonly containerRef;
    private readonly innerStyleRef;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    updatePosition: () => void;
    private getPointerPosition;
    private locatePointer;
    private locatePicker;
    render(): JSX.Element;
}
