import { Text } from "../Form/Text";
import { Link } from "./Link";

interface Props {
    text: string,
    link: string,
    texttype?: string,
    linktext: string,
    textclass?: string,
    linkclass?: string,
    divclass?: string
  }

  const defaultProps = {
    textclass: '',
    linkclass: '',
    texttype: 'span',
    divclass: ''
  };


export const TextPlusLink = ( propsIn: Props) => {
    const props = {...defaultProps, ...propsIn};
    return (
        <>
        <div className={props.divclass}>
    <Text type={props.texttype}  text={props.text} className={props.textclass} /> 
    <Link linktext={props.linktext} link={props.link} linkclass={props.linkclass} />
    </div> 
    </>
    )
}