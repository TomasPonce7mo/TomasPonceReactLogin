import { SocialLinkImage } from "./SocialLinkImage"

interface Props {
    social: any[];
}

export const SocialLinksTable = ( props: Props ) => {
  return (
    <div className="socialtable">
        {props.social.map(social => <SocialLinkImage onclickaction={social.action} imgsrc={social.imgsrc} />)}
    </div>
  )
}
