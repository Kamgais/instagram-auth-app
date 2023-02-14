import React, {FunctionComponent} from 'react'
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';


type OptionItem = {
    key: string,
    value: string
}

type SelectProps = {
    label: string,
    name: string,
    options: OptionItem[]
}

const Select: FunctionComponent<SelectProps> = ({name,label,options}) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='select' name={name} id={name}>
         {
            options.map((option) => {
               <option value={option.value} key={option.value}>{option.key}</option> 
            })
         }
      </Field>
      <ErrorMessage name={name}>
         {
            (errorMsg: any) => <TextError>{errorMsg}</TextError>
         }
      </ErrorMessage>
    </div>
  )
}

export default Select
