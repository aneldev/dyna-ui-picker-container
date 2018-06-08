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
    children: any;
    style?: EStyle;
    color?: EColor;
    responsive?: boolean;
}
export declare class DynaPickerContainer extends React.Component<IDynaPickerContainerProps> {
    static defaultProps: IDynaPickerContainerProps;
    constructor(props: IDynaPickerContainerProps);
    refs: {
        container: HTMLDivElement;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    private keepInScreen;
    render(): JSX.Element;
}
