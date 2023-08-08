import { TextInput } from "../Form/TextInput";
import { SubmitButton } from "../Form/SubmitButton";
import { TextPlusLink } from "../Form/TextPlusLink";
import { Text } from "../Form/Text";
import { Link } from "../Form/Link";
import { TextBetweenLine } from "../Form/TextBetweenLine";
import { SocialLinksTable } from "../Form/SocialLinksTable";

export const Challenge4 = () => {
  
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
        <SubmitButton className="btn-violet submitbutton bold" divclass="divbutton" text="Sign in" />
        <TextBetweenLine text="Login with social accounts" />
        <SocialLinksTable social={social} /> <br></br>
        <TextPlusLink texttype="span" text="Don't have an account?" textclass="smalltext" 
        linktext=" Sign up" link="App.tsx" linkclass="colorwhite nounderline" divclass="textaligncenter" />
        </div>
      </div>
    </>
  )
}
