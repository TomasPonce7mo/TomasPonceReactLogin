interface Props {
    className: string,
    divclass: string
  }

export const SubmitButton = (props:Props) => {
  return (
    <div className={props.divclass}>
        <button type="submit" className={props.className}>Sign in</button> 
        </div>
  )
}