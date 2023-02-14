import React, {FunctionComponent} from 'react'


type ErrorProps = {
    children: JSX.Element
}
const TextError: FunctionComponent<ErrorProps> = (props) => {
  return (
    <div className='error'>
     {props.children} 
    </div>
  )
}

export default TextError
