interface inputProps {
  id?: string,
  label?: string,
  labelclass?: string,
  type: string,
  className: string
}

const defaultProps = {
  id: '',
  label: '',
  labelclass: ''
};

export const TextInput = (propsIn:inputProps) => {
const props = {...defaultProps, ...propsIn};
    return (
      <>
          <label className={props.labelclass} htmlFor={props.id}>{props.label}</label> <br></br>
          <input type={props.type} className={props.className} id={props.id} required></input>
      </>
    )
  }