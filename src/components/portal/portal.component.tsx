import React, { RefObject } from 'react';
import ReactDOM from 'react-dom';
import { PortalContainer } from './portal.styles';

export interface PortalProps {
  top?: number;
  left?: number;
  width?: number;
}

const portalRoot = document.getElementById('portal-holes') as HTMLElement;

export class Portal extends React.Component<PortalProps> {
  container: HTMLDivElement;
  constructor(props: PortalProps) {
    super(props);
    this.container = document.createElement('div');
  }

  componentDidMount() {
    portalRoot?.appendChild(this.container);
  }
  componentWillUnmount() {
    portalRoot?.removeChild(this.container);
  }

  render() {
    const { children, top, left, width } = this.props;
    return ReactDOM.createPortal(
      <PortalContainer top={top} left={left} width={width}>
        {children}
      </PortalContainer>,

      portalRoot
    );
  }
}
