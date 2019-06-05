import * as React from "react";
import { EColor } from "dyna-ui-styles";
import "./style.less";
import "./color.less";
export declare enum EStyle {
    ROUNDED = "INLINE_ROUNDED"
}
export { EColor };
export interface IDynaPickerContainerProps {
    show?: boolean;
    children: JSX.Element;
    style?: EStyle;
    color?: EColor;
    responsive?: boolean;
}
export declare class DynaPickerContainer extends React.Component<IDynaPickerContainerProps> {
    static defaultProps: Partial<IDynaPickerContainerProps>;
    private readonly id;
    private readonly containerRef;
    private readonly innerStyleRef;
    constructor(props: IDynaPickerContainerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    updatePosition: () => void;
    private keepInScreen;
    private pointLeft;
    private getPointLeft;
    render(): JSX.Element;
}
