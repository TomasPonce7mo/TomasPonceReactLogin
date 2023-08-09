import { MouseEventHandler } from "react"

interface Props {
    onclick?: MouseEventHandler<HTMLButtonElement> | undefined,
    className: string,
    divclass: string,
    text: string
  }

  const defaultProps = {
    onclick: undefined
  }

export const SubmitButton = (propsIn:Props) => {
  const props = {...defaultProps, ...propsIn}
  return (
    <div className={props.divclass}>
        <button type="submit" className={props.className} onClick={props.onclick}>{props.text}</button> 
        </div>
  )
}