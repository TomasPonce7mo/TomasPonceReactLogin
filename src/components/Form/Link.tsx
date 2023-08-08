interface Props {
    linktext: string,
    linkclass: string,
    link: string,
  }

export const Link = (props:Props) => {
  return (
    <a href={props.link} className={props.linkclass}>{props.linktext} </a>
  )
}
