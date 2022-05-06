import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import "../styles/common.css"
import "../styles/userProfile.css"

const TempratureForm = ({ submitFunction, validationSchema }) => {
    const initialValues = {
        userTemprature: undefined,
        additionalInfo: ''
    }
    return (
        <div className='form-wrapper'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitFunction}
            >
                {({ errors, values, handleBlur, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="userTemprature">
                            <Form.Label className='dark-gray-font'>Temprature</Form.Label>
                            <Form.Control placeholder="Enter temprature"
                                value={values.userTemprature}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isInvalid={!!errors.userTemprature}
                                type='number'
                            />
                            <Form.Control.Feedback type='invalid'>{errors.userTemprature}</Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="additionalInfo">
                            <Form.Label className='dark-gray-font'>Additional info</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                value={values.additionalInfo}
                                onBlur={handleBlur}
                                onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            submit
                        </Button>
                    </Form>)}
            </Formik >
        </div>
    );
}
export default TempratureForm;