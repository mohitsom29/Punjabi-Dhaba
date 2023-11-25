const useCurrentLocation = (dispatch,addLocation) => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    }

    const success = async (position) => {
        const coordinated  = position.coords;
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${coordiantes.latitude}&lon=${coordiantes.longitude}&format=json`);
        const data = await res.json();
        dispatch(
            addLocation({
                lat: coordinated.latitude,
                long: coordinates.longitude,
                city: data?.address?.city,
                address: data?.display_name,
            })
        );
        window?.location.reload();
    }

    const error = (err) => {
        console.warn(`ERROR-(${err.code}): ${err.message}`);
    }
    navigator.geolocation ? navigator?.geolocation?.getCurrentPosition(success,error,options) : alert("Unable to fetch your location");
}

export default useCurrentLocation;