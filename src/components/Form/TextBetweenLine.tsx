interface Props {
    text: string
  }
  
  export const TextBetweenLine = (props:Props) => {
  
      return (
        <>
            <p className="textbetweenline"><span>{props.text}</span></p>
        </>
      )
    }