import { Card } from "react-bootstrap";
import "../styles/common.css"
import UserInfoForm from "../components/userInfoForm";
import { LOGIN_BUTTON_LABEL, NOT_CURRENT_USER_TEXT, LOGIN_FORM_TITLE } from '../common/constants'
import * as Yup from 'yup';
import { post } from "../common/apiClient"
import { useState } from "react";
import { useNavigate } from 'react-router'
import '../styles/login.css'


const Login = () => {
    const [error, setError] = useState();
    const history = useNavigate();
    const login = async (formValues) => {
        const res = await post('login', { email: formValues.email, password: formValues.password })
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
        password: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
    })
    return (
        <div className="user-info-card-wrapper">
            <Card className="login-card">
                <Card.Body>
                    <UserInfoForm formType='login'
                        submitButtonLabel={LOGIN_BUTTON_LABEL}
                        submitFunction={login}
                        validationSchema={validationSchema}
                        formError={error}
                        formTitle={LOGIN_FORM_TITLE}
                    />
                    <p className="mb-0 dark-gray-font padding-top-8">
                        {NOT_CURRENT_USER_TEXT} <a href="/signup">here</a>
                    </p>
                </Card.Body>
            </Card>
        </div >
    );

}

export default Login;