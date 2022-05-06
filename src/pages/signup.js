import UserInfoForm from "../components/userInfoForm";
import { SIGNUP_BUTTON_LABEL, SIGNUP_FORM_TITLE } from '../common/constants'
import { Card } from "react-bootstrap";
import { post } from "../common/apiClient"
import * as Yup from 'yup';
import { useState } from "react";
import { useNavigate } from 'react-router'

const Signup = () => {
    const [error, setError] = useState();
    const history = useNavigate();
    const signup = async (formValues) => {
        const res = await post('user', { email: formValues.email, name: formValues.name, password: formValues.password })
        if (res.ok) {
            let data = await res.json()
            if (data) {
                localStorage.setItem('jwt', data.token);
                localStorage.setItem('email', formValues.email);
                history('/userProfile');
            }
        }
        else {
            let error = await res.text()
            setError(error);
            console.log(error);
        }
    }
    const validationSchema = Yup.object({
        password: Yup.string()
            .required('Required')
            .min(8, 'Must be more than 8 characters'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords don't match!")
            .required('Required')
            .min(8, 'Must be more than 8 characters'),
        email: Yup.string().email('Invalid email address').required('Required'),
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
    })
    return (
        <div className="user-info-card-wrapper">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <UserInfoForm formType='signup'
                        submitButtonLabel={SIGNUP_BUTTON_LABEL}
                        submitFunction={signup}
                        validationSchema={validationSchema}
                        formError={error}
                        formTitle={SIGNUP_FORM_TITLE} />
                </Card.Body>
            </Card>
        </div>
    );

}

export default Signup;