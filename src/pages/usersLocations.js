import Map from '../components/googleMap';
import { useEffect, useState } from "react";
import { get } from "../common/apiClient"


const UsersLocations = () => {
    const [location, setLocation] = useState();
    const [locations, setLocations] = useState();
    useEffect(() => {
        async function getLocations() {
            const res = await get('locations')
            if (res.ok) {
                let data = await res.json()
                if (data && data.length > 0) {
                    const locations = [];
                    data.map(user => {
                        if (user && user.entries.length > 0) {
                            locations.push({ name: user.name, location: user.entries[user.entries.length - 1].location, temp: user.entries[user.entries.length - 1].temp });
                        }
                    });
                    setLocations(locations);
                }
            }
        }
        getLocations();
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
    return (<>
        <Map currentLocation={location} locations={locations} >
            {/* <Marker key={i} position={latLng} /> */}
        </Map>
    </>);
}
export default UsersLocations;