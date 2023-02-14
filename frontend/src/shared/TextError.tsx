import React, {FunctionComponent} from 'react'
import  {FaMinusCircle}  from "react-icons/fa";

type ErrorProps = {
    children: JSX.Element
}


const styles = {
  color: 'red',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px'
}
const TextError: FunctionComponent<ErrorProps> = (props) => {
  return (
    <div className='error' style={styles}>
   <FaMinusCircle/>  {props.children} 
    </div>
  )
}

export default TextError
