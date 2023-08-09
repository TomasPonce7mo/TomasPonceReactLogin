interface Props {
    text: string,
    className?: string
  }

  const defaultProps = {
    className: ''
  };
  
  export const TextBetweenLine = (propsIn:Props) => {
    const props = {...defaultProps, ...propsIn};
    const className = 'textbetweenline ' + props.className;
      return (
        <>
            <p className={className}><span>{props.text}</span></p>
        </>
      )
    }