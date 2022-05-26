import TempratureForm from "../components/tempratureForm";
import * as Yup from 'yup';
import "../styles/common.css"
import "../styles/userProfile.css"
import { useEffect, useState } from "react";
import { put } from "../common/apiClient"
import { useNavigate } from 'react-router'



const UserProfile = () => {
    const [location, setLocation] = useState();
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        }
        function showPosition(position) {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        }
    }, []);

    const submitTempratureEntriy = async (formValues, reset) => {
        setLoading(true);
        const email = localStorage.getItem('email')
        const res = await put('addtemprature',
            {
                email: email,
                entry: {
                    temp: formValues.userTemprature,
                    additionalInfo: formValues.additionalInfo,
                    location: location
                }
            })
        if (res.ok) {
            let data = await res.json()
            if (data) {
                history('/userProfile');
            }
            reset();
        }
        setLoading(false);

    }
    const validationSchema = Yup.object({
        userTemprature: Yup.number()
            .typeError('you must specify a number')
            .min(30, 'Min value 30.')
            .max(45, 'Max value 45.').required('Required'),
    })
    return (<TempratureForm submitFunction={submitTempratureEntriy} validationSchema={validationSchema} loading={loading} />);
}

export default UserProfile;