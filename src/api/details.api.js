import axios from "axios";
import {details} from "./details.mock";

export const getDetails = async () => {
    return new Promise(r => r(details));

    // return await axios.get(
    //     `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&place_id=ChIJMxOToCnq9EcREuoX_SlbSJY&language=fr`)
    //     .then(retour => retour.data)

}

// https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDSK2HkWCT0-w4rIqGmK6DNhlKw2z1sZxQ&place_id=ChIJMxOToCnq9EcREuoX_SlbSJY&language=fr
