import { SocialLinkImage } from "./SocialLinkImage"

interface Props {
    social: any[],
    className?: string
}

const defaultProps = {
  className: ''
}

export const SocialLinksTable = ( propsIn: Props ) => {
  const props = {...defaultProps, ...propsIn};
  const className = 'socialtable ' + props.className;
  return (
    <div className={className}>
        {props.social.map(social => <SocialLinkImage onclickaction={social.action} imgsrc={social.imgsrc} />)}
    </div>
  )
}
