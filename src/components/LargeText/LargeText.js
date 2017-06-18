import styled from 'styled-components';

const LargeText = styled.div.attrs({
  color: props => props.color || 'black'
})`
  font-family: 'FreightBook', 'serif';
  font-size: 48px;
  color: ${props => props.color}
`

export default LargeText;