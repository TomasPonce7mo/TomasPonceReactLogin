import { MouseEventHandler } from "react";

interface Props {
  onclickaction: MouseEventHandler<HTMLImageElement>,
  imgsrc: string,
  imgclass?: string
  }

  const defaultProps = {
    imgclass: ''
  };

export const SocialLinkImage = ( propsIn: Props) => {
  const props = {...defaultProps, ...propsIn};
  const imgclass = "socialimg " + props.imgclass;
    return (
      <>
        <img onClick={props.onclickaction} src={props.imgsrc} className={imgclass}></img>
      </>
    )
  }