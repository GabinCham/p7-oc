import axios from "axios";
import {restaurants} from "./places.mock";

export const getRestaurant = async (lat, lng) => {
    return restaurants;
    /*
    return await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
        .then(retour => retour.data)

     */

}
