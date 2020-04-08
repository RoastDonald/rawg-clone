import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

export const ArrowDown = styled(Arrow)`
  transform: rotate(${(props) => (props.rotate ? props.rotate : '90')}deg);
  min-width: ${(props) => (props.width ? props.width : '18')}px;
  height: ${(props) => (props.height ? props.height : '18')}px;
  path {
    fill: hsla(0, 0%, 100%, 0.3);
  }
`;
