import * as React from "react";
import "./style.less";
import "./color.less";
export declare enum EStyle {
    ROUNDED = "INLINE_ROUNDED",
}
export declare enum EColor {
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
export declare class DynaPickerContainer extends React.Component<IDynaPickerContainerProps> {
    static defaultProps: IDynaPickerContainerProps;
    render(): JSX.Element;
}
