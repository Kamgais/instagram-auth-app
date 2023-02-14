import React, {FunctionComponent} from 'react'
import Checkbox from '../shared/Checkbox'
import DatePicker from '../shared/DatePicker'
import Input from '../shared/Input'
import Radio from '../shared/Radio'
import Select from '../shared/Select'
import TextArea from '../shared/TextArea'


type OptionItem = {
    key: string,
    value: string
}


type ControlType = {
    control: string,
    label: string,
    withLabel?: boolean,
    name: string,
    placeholder?: string,
    type?:string,
    options?: OptionItem[]
}

export const FormikControl: FunctionComponent<ControlType> = ({control, label, name, type, options, placeholder, withLabel}) => {
  
    switch(control) {

        case 'input' :  return <Input label={label} name={name} type={type!} placeholder={placeholder!} withLabel={withLabel!}/>
        case 'textarea': return  <TextArea label={label} name={name} placeholder={placeholder!}/>
        case 'select' : return  <Select label={label} name={name} options={options!}/>
        case 'radio': return <Radio label={label} name={name} options={options!} />
        case 'checkbox' :  return <Checkbox label={label} name={name} options={options!}/>
        case 'date' : return  <DatePicker label={label} name={name}/>
        default: return null;
    }
}
