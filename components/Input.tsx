import { Field, ErrorMessage } from 'formik'
import ErrorText from './ErrorText'

import { Form } from 'semantic-ui-react'

type Props = {
    label: string,
    name: string,
    type: string,
    placeholder: string;
}

const Input: React.FC<Props> = ({ label, name, type, placeholder }): JSX.Element => {
    
    return (
        <Form.Field>           
            <label htmlFor={name}>{label}</label>
            <Field type={type} id={name} name={name} placeholder={placeholder}/>
            <ErrorMessage name={name} component={ErrorText}/>
        </Form.Field>
    )
}

export default Input
