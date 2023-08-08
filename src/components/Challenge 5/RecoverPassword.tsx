import { TextInput } from "../Form/TextInput.tsx"
import { TextPlusLink } from "../Form/TextPlusLink.js"

function RecoverPassword() {

  return (
    <>
    <div className="form1">
      <div className="form3">
      <h2 className="colorgrey textaligncenter margin1">Recuperar contraseña</h2>
      <h2 className="colorpurple textaligncenter margin1">.V2</h2>
      <TextInput id="email" label="Email" type="text" className="TextInput2" labelclass="textalignleft bold colorgrey lineheight3" /> <br></br> <br></br> <br></br>
      <button type="submit" className="btn-dark submitbutton smalltext"><b>E n v i a r&ensp;M a i l</b></button> <br></br> <br></br> <br></br>
      <TextPlusLink divclass="textaligncenter" text="¿Olvidaste tu Email?" textclass="fontweight500" 
      linktext=" Precione aqui" linkclass="colorwhite nounderline bold" link="RecoverPassword.tsx" />
      </div>
    </div>
    </>
  )
}

export default RecoverPassword