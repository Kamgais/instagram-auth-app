import React, {FunctionComponent} from 'react'
import  {FaMinusCircle}  from "react-icons/fa";

type ErrorProps = {
    children: JSX.Element
}


const styles = {
  color: '#e74c3c',
  fontSize: '11px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontWeight: '300'
}
const TextError: FunctionComponent<ErrorProps> = (props) => {
  return (
    <div className='error' style={styles}>
   <FaMinusCircle/>  {props.children} 
    </div>
  )
}

export default TextError
