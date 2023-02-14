import React, {FunctionComponent} from 'react'
import  {Field, ErrorMessage} from 'formik';
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TextError from './TextError';

type DateProps = {
    label: string,
    name: string
}

const DatePicker: FunctionComponent<DateProps> = ({label, name}) => {
  return (
    <div className='form-control'>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name}>
        {
            ({form:{setFieldValue}, field}: any) => {
                return (
                    <DateView
                    id={name}
                    closeOnScroll = {(e) => e.target === document}
                    {...field}
                    selected={field.value}
                    onChange = {(date) => setFieldValue(name,date)}
                    />
                )
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

export default DatePicker