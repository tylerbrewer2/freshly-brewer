import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Label from '../Label';
import TextInput from '../TextInput';
import Col from '../Col';

const TextInputGroupCore = ({
    className,
    labelText,
    value,
    onChange,
    identifier,
    required,
    width
  }) => (
  <Col width={width}>
    <div className={className}>
      <Label>{labelText}</Label>
      <TextInput
        value={value}
        onChange={onChange}
        identifier={identifier}
      />
    </div>
  </Col>
)

TextInputGroupCore.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  identifier: PropTypes.string,
  required: PropTypes.bool,
  width: PropTypes.number,
}

TextInputGroupCore.defaultProps = {
  identifier: null,
  required: false,
  width: 12,
}

const TextInputGroup = styled(TextInputGroupCore)`
margin-bottom: 30px;
`

export default TextInputGroup;