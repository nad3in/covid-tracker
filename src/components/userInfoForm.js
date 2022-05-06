import { Formik } from 'formik';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const UserInfoForm = ({ formType, submitButtonLabel, submitFunction, validationSchema, formError, formTitle }) => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    return (
        <>
            <h2 className='text-center dark-gray-font'>{formTitle}</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitFunction}
            >
                {({ errors, values, handleBlur, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        {formType === "signup" && <Form.Group className="mb-3" controlId="name">
                            <Form.Label className='dark-gray-font'>Name</Form.Label>
                            <Form.Control
                                name="name"
                                placeholder="Enter name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>

                        </Form.Group>}
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className='dark-gray-font'>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label className='dark-gray-font'>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>

                        </Form.Group>

                        {formType === "signup" && <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label className='dark-gray-font'>Confirm Password</Form.Label>
                            <Form.Control
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.confirmPassword}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.confirmPassword}</Form.Control.Feedback>

                        </Form.Group>}
                        {formError && <Form.Text variant={'danger'}>{formError}</Form.Text>}
                        <Button variant="primary" type="submit">
                            {submitButtonLabel}
                        </Button>
                    </Form>)
                }
            </Formik>
        </>
    );

}
export default UserInfoForm