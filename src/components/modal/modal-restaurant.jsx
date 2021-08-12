import React from "react";
import {details} from "../../api/details.mock";
import * as assert from "assert";
import {restaurants} from "../../api/places.mock";


const submitNewRestaurant = async place_id => {
    const restaurantName = document.getElementById('restaurantName').value;

    let newPlaceId = "azertyuiopmlkjhgfdsqwxcvbn"
    let newRestaurant =
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 45.727663,
                    "lng": 4.830482
                },
                "viewport": {
                    "northeast": {
                        "lat": 45.727663,
                        "lng": 4.830482
                    },
                    "southwest": {
                        "lat": 45.727663,
                        "lng": 4.830482
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "name": restaurantName,
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3001,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116097334261293766677\">{{restaurantName}}</a>"
                    ],
                    "photo_reference": "ATtYBwL-SiN49O1bF2hFLOoIhFWnrhKhoCrNrqsC8LdjLwRX1A1JXDdeeNdsqgpWdi7HNv4qeV_GzO5i-_5gsRXWRMffSPErY4g0KHCXGlsNUq5mwqRVF4er31pQ95ODWwDroEoyWNzVUa7gRzqIfiPNExehxHN_Xq36S_KjXyUSBYjx7S0D",
                    "width": 4495
                }
            ],
            "place_id": newPlaceId,
            "plus_code": {
                "compound_code": "PRHJ+77 Lyon, France",
                "global_code": "8FQ6PRHJ+77"
            },
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJMxOToCnq9EcREuoX_SlbSJY",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 8447,
            "vicinity": "267 Rue Marcel Mérieux, Lyon"
        }


    restaurants.results.unshift(newRestaurant);

    //console.log('this.props.restaurants', this.props.restaurants)


    console.log('restaurants', restaurants.results)
    console.log('newRestaurant', newRestaurant)

}


class ModalToAddRestaurant extends React.Component {


    render() {
        //  console.log('this.props', this.props.restaurants)

        return (
            <div className="mb-auto mt-auto">

                <a data-bs-toggle="modal" data-bs-target="#addRestaurant">Ajouter un restaurant</a>

                <div className="modal fade" id="addRestaurant" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajouter un restaurant</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <div className="grid">

                                    <div className="input-group mb-3 flex">
                                        <span className="input-group-text">Nom du restaurant</span>
                                        <input id="restaurantName" type="text" className="form-control"
                                               placeholder="Nom du restaurant"
                                               aria-label="Server"/>
                                    </div>

                                    <div className="input-group mb-3 flex">
                                        <span className="input-group-text">Commentaire</span>
                                        <input id="text" type="text" className="form-control"
                                               placeholder="Notez ce restaurant"
                                               aria-label="Server"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <a type="button" className="btn btn-secondary" data-bs-dismiss="modal">Retour</a>
                                <button type="button" className="btn btn-primary"
                                        onClick={() => submitNewRestaurant()}
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                >Envoyer
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalToAddRestaurant;
