import styled from 'styled-components';
import { PortalProps } from './portal.component';

export const PortalContainer = styled.div<PortalProps>`
  z-index: 15;
  position: absolute;
  font-size: 1.4rem;
  top: ${({ top }) => (top ? top : 0)}px;
  left: ${({ left }) => (left ? left : 0)}px;
  min-width: ${({ width }) => (width ? width : 0)}px;
  background-color: white;
  border-radius: 6px;
  color: #000;
`;
