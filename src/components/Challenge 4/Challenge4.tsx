import { TextInput } from "../Form/TextInput";
import { SubmitButton } from "../Form/SubmitButton";
import { TextPlusLink } from "../Form/TextPlusLink";
import { Text } from "../Form/Text";
import { Link } from "../Form/Link";
import { TextBetweenLine } from "../Form/TextBetweenLine";
import { SocialLinksTable } from "../Form/SocialLinksTable";
import { Circle } from "../Form/Circle";
import { useEffect, useState } from "react";

interface Props {
  flagsetter: React.Dispatch<React.SetStateAction<string>>,
  flag: string,
}

export const Challenge4 = ( props:Props ) => {
  const [color, setcolor] = useState("red")

  function eventActivate() {
    props.flagsetter('login');
  }
  useEffect(() => {
    if (props.flag == "login"){
      setcolor("green")
    }
    else {
      setcolor("red");
    }
  }, [props.flag]);

      const googlealert = () => {
        alert("google.com");
      }
      
      const twitteralert = () => {
        alert("twitter.com");
      }
      
      const githubalert = () => {
        alert("github.com");
      }

      const social =[{
        action: googlealert,
        imgsrc: "https://i.imgur.com/UDf9k6D.png"
      },{
        action: twitteralert,
        imgsrc: "https://i.imgur.com/3ZyvwPK.png"
      },{
        action: githubalert,
        imgsrc: "https://i.imgur.com/oyRh22T.png"
      }]
  
    return (
    <>
    <div className="form1">
      <div className="form2">
        <Text type="h2" text="Login" className="colorwhite textaligncenter" />
        <TextInput className="TextInput" id="username" type="text" label="Username" />
        <TextInput className="TextInput" id="passwd" type="password" label="Password" />
        <Link linktext="Forgot Password ?" link="App.tsx" linkclass="colorwhite nounderline forgotpassword" />
        <SubmitButton onclick={eventActivate} className="btn-violet submitbutton bold" divclass="divbutton" text="Sign in" />
        <TextBetweenLine text="Login with social accounts" />
        <SocialLinksTable social={social} /> <br></br>
        <TextPlusLink texttype="span" text="Don't have an account?" textclass="smalltext" 
        linktext=" Sign up" link="App.tsx" linkclass="colorwhite nounderline" divclass="textaligncenter" />
              
        </div>
      </div>
      <Circle width="100" height="100" cx="50" cy="50" r="40" fill={color} divclass="textaligncenter" 
        circleid="circle" />
    </>
  )
}
