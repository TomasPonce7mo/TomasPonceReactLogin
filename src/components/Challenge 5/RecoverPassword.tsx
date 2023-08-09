import { SubmitButton } from "../Form/SubmitButton.tsx"
import { TextInput } from "../Form/TextInput.tsx"
import { TextPlusLink } from "../Form/TextPlusLink.js"
import { Text } from "../Form/Text.tsx"

export const RecoverPassword = () => {
  return (
    <>
    <div className="form1">
      <div className="form3">
      <Text type="h2" className="colorgrey textaligncenter margin1" text="Recuperar contraseña" />
      <Text type="h2" className="colorpurple textaligncenter margin1" text=".V2" />
      <TextInput id="email" label="Email" type="text" className="TextInput2" labelclass="textalignleft bold colorgrey lineheight3" /> <br></br> <br></br> <br></br>
      <SubmitButton className="btn-dark submitbutton smalltext bold" divclass="divbutton" text="E n v i a r&ensp;M a i l" /> <br></br>
      <TextPlusLink divclass="textaligncenter" text="¿Olvidaste tu Email?" textclass="fontweight500" 
      linktext=" Precione aqui" linkclass="colorwhite nounderline bold" link="RecoverPassword.tsx" />
      </div>
    </div>
    </>
  )
}