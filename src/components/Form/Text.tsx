import React from 'react'

interface Props {
    text: string,
    className: string,
    type: string
  }

export const Text = (props:Props) => {
    const className= props.className;
  return React.createElement(props.type, { className }, props.text);
}
