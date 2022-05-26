import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const LoadingButton = ({ submitButtonLabel, isDisabled, isLoading }) => {
    return (<Button variant="primary" type="submit" disabled={isDisabled}>
        {isLoading ? <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
        /> : submitButtonLabel}
    </Button>);
}
export default LoadingButton;