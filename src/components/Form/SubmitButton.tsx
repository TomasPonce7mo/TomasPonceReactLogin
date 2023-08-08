interface Props {
    className: string,
    divclass: string,
    text: string
  }

export const SubmitButton = (props:Props) => {
  return (
    <div className={props.divclass}>
        <button type="submit" className={props.className}>{props.text}</button> 
        </div>
  )
}