import { useEffect, useState } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const Map = ({ currentLocation, locations }) => {
    const [center, setCenter] = useState();
    const { REACT_APP_MAPS_API_KEY } = process.env
    const [showInfoWindow, setInfoWindow] = useState();
    const containerStyle = {
        width: "95%",
        height: "100vh",
        marginLeft: "5%"
    };
    const google = window.google;
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: REACT_APP_MAPS_API_KEY
    })

    useEffect(() => {
        if (google && currentLocation) {
            setCenter(new google.maps.LatLng(currentLocation.lat, currentLocation.lng))
        }

    }, [google])
    const handelOnMouseOver = (markerIndex) => {
        setInfoWindow(markerIndex);
    }
    const handelOnMouseOut = () => {
        setInfoWindow(false);
    }
    return (isLoaded ?
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            {

                locations && locations.length > 0 && locations.map((user, index) => {
                    return (<Marker key={index} position={user.location} onMouseOver={() => handelOnMouseOver(index)} onMouseOut={handelOnMouseOut} >
                        {showInfoWindow === index && (
                            <InfoWindow>
                                <>
                                    <h6>{user.name}</h6>
                                    <h6>{user.temp}</h6>
                                </>
                            </InfoWindow>
                        )}
                    </Marker>);
                })

            }

        </GoogleMap> : <></>
    );
}
export default Map