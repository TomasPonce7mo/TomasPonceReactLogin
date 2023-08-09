import { TextInput } from "../Form/TextInput";
import { SubmitButton } from "../Form/SubmitButton";
import { Text } from "../Form/Text";
import { TextBetweenLine } from "../Form/TextBetweenLine";
import { SocialLinksTable } from "../Form/SocialLinksTable";
import { Circle } from "../Form/Circle";
import { useState } from "react";

const googlealert = () => {
  alert("google.com");
}

const facebookalert = () => {
  alert("facebook.com");
}

const applealert = () => {
  alert("apple.com");
}

const social =[{
  action: googlealert,
  imgsrc: "https://i.imgur.com/BFuwY6a.png"
},{
  action: facebookalert,
  imgsrc: "https://i.imgur.com/kFXRJgf.png"
},{
  action: applealert,
  imgsrc: "https://i.imgur.com/iGFoy11.png"
}]





export const Register = () => {
  const [event, setevent] = useState("red");
  function eventActivate() {
    setevent("green");
  }
  return (
    <>
      <div className="form1">
      <div className="form3">
      <Text type="h2" className="colorgrey textaligncenter margin1" text="R e g i s t r a t e" />
      <TextInput id="Emailreg" label="Ingrese Email" type="text" className="TextInput2" 
      labelclass="textalignleft bold colorgrey lineheight3" />
      <TextInput id="passwdreg" label="Ingrese Contraseña" type="password" className="TextInput2" 
      labelclass="textalignleft bold colorgrey lineheight3" />
      <TextInput id="passwdrep" label="Repita Contraseña" type="password" className="TextInput2" 
      labelclass="textalignleft bold colorgrey lineheight3" /> <br></br> <br></br>
      <SubmitButton className="btn-violet submitbutton bold" divclass="divbutton" 
      text="R e g i s t r a r s e" onclick={eventActivate} />
      <TextBetweenLine text="Registrarse con:" className="colorgrey borderbottom2 borderbottomgrey" />
      <SocialLinksTable social={social} className="gap25" />
      </div>
      </div>
      <Circle width="100" height="100" cx="50" cy="50" r="40" fill={event} divclass="textaligncenter" 
      circleid="circle" />
    </>
  )
}
