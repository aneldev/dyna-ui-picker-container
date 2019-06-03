import * as React from "react";
import {IShowcaseView, IShowcaseViewProps} from "dyna-showcase";
import {EColor, IDynaPickerContainerProps} from "../../../src";

export const multipleBoxesInARow: IShowcaseView =     {
  slug: 'multipleBoxesInARow',
  faIconName: 'flask',
  title: 'multipleBoxesInARow test',
  center: true,
  component: (() => {
    interface IMyAppProps {
    }

    interface IMyAppState {
    }

    class MyApp extends React.Component<IMyAppProps, IMyAppState> {
      constructor(props: IMyAppProps) {
        super(props);
        this.state = {
        };
      }

      public render(): JSX.Element {
        const {} = this.props;
        const {} = this.state;
        return (
          <h1>in progress</h1>
        );
      }
    }

    return <MyApp/>;
  })(),
  props: (() => {
    const props: IShowcaseViewProps[] = [];

        Object.keys(EColor).forEach((color: EColor) => {
          props.push({
            slug: `color-${color}`,
            title: `${color.toLocaleLowerCase()}`,
            props: {
              color,
            } as IDynaPickerContainerProps,
          } as IShowcaseViewProps);
    });
    return props;
  })()
};
