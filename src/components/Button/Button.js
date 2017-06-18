import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  font-family: 'AvenirNextRegular';
  color: white;
  background-color: #113040;
  border: 0;
  font-size: 12px;
  letter-spacing: 1.5px;
  margin-top: 15px;
  transition: .3s all;
  display: inline-block;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #030C11;
  };
  width: ${ props => props.fullWidth ? '100%' : ''};
`

export default Button;