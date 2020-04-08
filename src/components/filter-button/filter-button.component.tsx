import React, { createRef } from 'react';
import { Portal } from '../portal/portal.component';

interface FilterButtonState {
  toggle: boolean;
  top: number | undefined;
  left: number | undefined;
  width: number | undefined;
}

export class FilterButton extends React.PureComponent<{}, FilterButtonState> {
  contentRef = createRef<HTMLDivElement>();

  state = {
    toggle: false,
    top: undefined,
    left: undefined,
    width: undefined,
  };

  componentDidMount() {
    const { current } = this.contentRef;
    this.setState({
      top: current?.offsetTop,
      left: current?.offsetLeft,
      width: current?.offsetWidth,
    });

    document.addEventListener('mousedown', this.handleToggle);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleToggle);
  }

  handleToggle = (e: any) => {
    if (this.contentRef && !this.contentRef.current?.contains(e.target)) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  };

  render() {
    const { top, left, width } = this.state;
    return (
      <div className='dropdown__button' ref={this.contentRef}>
        <div className='dropdown__content'>
          <button className='filter-button'>
            <div className='button__content'>
              {this.props.children}
              {this.state.toggle && (
                <Portal top={top} left={left} width={width}>
                  <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                  </ul>
                </Portal>
              )}
            </div>
          </button>
        </div>
      </div>
    );
  }
}
