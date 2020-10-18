import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Input from './Input'

import styled from 'styled-components'

import { Container, Button, Form as UIForm } from 'semantic-ui-react'

const StyledForm = styled(Form)({
    maxWidth: '300px',
    margin: '0 auto'
});


const FormikContainer: React.FC = (): JSX.Element => {

    type FormValues = {
        name: string;
        phone: string;
        email: string;
        password: string;
    }

    const initialValues: FormValues = {
        name: '',
        phone: '',
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(1)
            .required('Required'),
        phone: Yup.string()
            .test('mobile test', 'Must be a valid UK mobile number', 
                value => value ? value.startsWith('07') && value.length === 11 : null)
            .matches(/^[0-9]*$/, 'Must be a valid UK mobile number')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        password: Yup.string()
            .min(5, 'Must be 5-20 characters')
            .max(20, 'Must be 5-20 characters')
            .required('Required')
    })

    const onSubmit = (values: FormValues, onSubmitProps: FormikHelpers<FormValues>) => {
        
        alert(`
            Name: ${values.name}
            Phone: ${values.phone}
            Email: ${values.email}
            Password: ${values.password}
        `)

        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm()
    
    }

    type inputObj = {
        label: string;
        name: string;
        type: string;
        placeholder: string;
    }

    const inputsArr: inputObj[] = [
        {
            label:'Name',
            name:'name',
            type:'text',
            placeholder: 'Name'
        }, 
        {
            label:'Phone',
            name:'phone',
            type:'text',
            placeholder: 'Phone'
        }, 
        {
            label:'Email',
            name:'email',
            type:'text',
            placeholder: 'Email'
        }, 
        {
            label:'Password',
            name:'password',
            type:'password',
            placeholder: 'Password'
        }
    ]

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => (
                    <StyledForm>
                        <UIForm as='div'>
                            {inputsArr.map(input =>
                                        <Input
                                            key={input.name}
                                            label={input.label} 
                                            name={input.name} 
                                            type={input.type}
                                            placeholder={input.placeholder}
                                        />
                            )}
                            <Button type='submit' disabled={formik.isSubmitting}>Submit</Button>
                        </UIForm>
                    </StyledForm>
                )}
            </Formik>
        </Container>
    )
}

export default FormikContainer
