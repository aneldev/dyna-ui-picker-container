import * as React from "react";
import {IShowcaseView, IShowcaseViewProps} from "dyna-showcase";
import {DynaPickerContainer, EColor, IDynaPickerContainerProps} from "../../../src";
import {CSSProperties} from "react";

export const multipleBoxesInARow: IShowcaseView = {
  slug: 'multipleBoxesInARow',
  faIconName: 'flask',
  title: 'multipleBoxesInARow test',
  center: true,
  wrapperStyle: {
    width: "100%",
  },
  component: (() => {
    interface IMyAppProps {
    }

    interface IMyAppState {
      showPicker: boolean[];
    }

    class MyApp extends React.Component<IMyAppProps, IMyAppState> {
      constructor(props: IMyAppProps) {
        super(props);
        this.state = {
          showPicker: Array(5).fill(false),
        };
      }

      private handleClick(index: number): void {
        this.setState({
          showPicker: this.state.showPicker.map((v, scanIndex) => {
            if (scanIndex === index) return !v;
            return v;
          }),
        });
      }

      public render(): JSX.Element {
        const {} = this.props;
        const { showPicker } = this.state;
        return (
          <div style={containerStyle}>
            {Array(5).fill(null).map((v, index) => (
              <div
                key={index}
                style={itemStyle(index)}
                onClick={() => this.handleClick(index)}
              >
                <span style={labelStyle}>[{index}] Click me</span>
                <DynaPickerContainer
                  show={showPicker[index]}
                  responsive={true}
                >
                  <div style={pickerContentStyle}>Picker content {index} - Big text - Big end.</div>
                </DynaPickerContainer>
              </div>
            ))}
          </div>
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


const containerStyle: CSSProperties = {
  display: "flex",
};

const itemStyle = (index: number): CSSProperties => {
  const color = ['red', 'green', 'blue', 'orange', 'purple'][index];
  return {
    flex: "1 1 0",
    border: `1px solid ${color}`,
    padding: "24px",
  }
};

const labelStyle: CSSProperties = {
  cursor: "pointer",
};

const pickerContentStyle: CSSProperties = {
  padding: "24px",
  whiteSpace: "nowrap",
};

