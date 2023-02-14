import React, {FunctionComponent} from 'react'
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';


type OptionItem = {
    key: string,
    value: string
}

type CheckBoxProps = {
    label: string,
    name: string,
    options: OptionItem[]
}

const Checkbox: FunctionComponent<CheckBoxProps> = ({label, name , options}) => {
  return (
   <div className='form-control'>
   <label htmlFor={name}>{label}</label>
   <Field id={name} name={name}>
    {
        ({field}: any) => {
            return options.map((option: OptionItem) => (
                <React.Fragment key={option.value}>
                    <input type="checkbox"
                     id={option.value} 
                     {...field}
                     value={option.value}  
                     checked = {field.value.includes(option.value)} />
                    <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
            ))
        }
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

export default Checkbox