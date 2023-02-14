import React, {FunctionComponent} from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'


type OptionItem = {
    key: string,
    value: string
}

type RadioProps = {
    label: string,
    name: string,
    options: OptionItem[]
}

const Radio: FunctionComponent<RadioProps> = ({label, name, options}) => {
  return (
    <div className='form-control'>
    <label htmlFor={name}>{label}</label>
    <Field name={name} id={name}>
        {
            ({field}: any) => {
              return options.map((option: any) => (
                <React.Fragment key={option.key}>
                <input type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked = {field.value === option.value}
                />
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

export default Radio