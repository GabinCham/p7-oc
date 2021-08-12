import '../App.css'
import React from "react";
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';
import mapStyles from "./../mapStyle";
import ModalToAddRestaurant from "./modal/modal-restaurant";


const mapContainerStyle = {
    width: '70vw',
    height: '100vh'
}
const onLoad = marker => {
   // console.log('marker: ', marker)
}


class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //markers: [],
            markers: [],
            setMarkers: [],
            selected: null,
            setSelected: null,
            centerGeolocation: {
                lat: parseFloat(process.env.REACT_APP_DEFAULT_LAT),
                lng: parseFloat(process.env.REACT_APP_DEFAULT_LNG)
            },
        }
        this.onClick = this.onClick.bind(this);

        this.option = {
            styles: mapStyles,
            disableDefaultUI: true,
            zoomControl: true
        }
    }

    toggleFromMap() {
        alert('ça passe');

    }

    onClick(t, map, coord) {
        alert('click')
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        this.setState(previousState => {
            return {
                markers: [
                    ...previousState.markers,
                    {
                        title: "",
                        name: "",
                        position: { lat, lng }
                    }
                ]
            };
        });
    }

/*
    {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 45.7281729,
                    "lng": 4.8307208
                },
                "viewport": {
                    "northeast": {
                        "lat": 45.7295107802915,
                        "lng": 4.831885630291503
                    },
                    "southwest": {
                        "lat": 45.7268128197085,
                        "lng": 4.829187669708499
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "name": "Ninkasi GERLAND",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3001,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116097334261293766677\">Ninkasi GERLAND</a>"
                    ],
                    "photo_reference": "ATtYBwL-SiN49O1bF2hFLOoIhFWnrhKhoCrNrqsC8LdjLwRX1A1JXDdeeNdsqgpWdi7HNv4qeV_GzO5i-_5gsRXWRMffSPErY4g0KHCXGlsNUq5mwqRVF4er31pQ95ODWwDroEoyWNzVUa7gRzqIfiPNExehxHN_Xq36S_KjXyUSBYjx7S0D",
                    "width": 4495
                }
            ],
            "place_id": "ChIJMxOToCnq9EcREuoX_SlbSJY",
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
*/


        componentDidMount() {

        // TODO: DEMANDER AUTORISATION


        const self = this;

        navigator.geolocation.getCurrentPosition(function (position) {
            self.setState({
                    centerGeolocation: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                }
            )
        })
    }



    render() {
        //console.log('console.log(this.props.restaurants)', this.props.restaurants);

        return (

            <div>
                <ModalToAddRestaurant/>

                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>


                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={15}
                        center={this.state.centerGeolocation}
                        options={this.option}
                        onClick={(event) => {
                            this.toggleFromMap();

                            // console.log('LATITUDE [0]', lat);

                        //    this.state.setMarkers(current => [...current, {
                            //    lat: event.latLng.lat(),
                            //    lng: event.latLng.lng(),
                             //   date: new Date()
                           // }
                           // ])
                        }}>

                        <Marker className="ping"
                            position={this.state.centerGeolocation}
                       />
                        {this.props.restaurants.map(i =>
                            <Marker
                                key={'marker-' + i.place_id}
                                restaurant={i}
                                onLoad={onLoad}
                               // onClick={this.state.toggleFromMap()}
                                //    this.state.setSelected(this.props.marker);
                                //}}
                                position={{
                                    lat: i.geometry.location.lat,
                                    lng: i.geometry.location.lng
                                }}
                            />)}

                        {/*  {this.state.markers.map(marker =>
                    <Marker
                        position={{
                           lat: this.state.restaurantList.restaurant.geometry.lat,
                           lng: this.state.restaurantList.restaurant.geometry.lng

                        }}
                        icon={{
                            url: "/assets/chef-logo.svg",
                            scaledSize: new window.google.maps.Size(30, 30),
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                        }}
                        onClick={() => {
                            this.state.setSelected(marker);
                        }}
                    />)}
                    */}


                        {this.state.selected ? (
                            <InfoWindow
                                position={{lat: this.state.selected.lat, lng: this.state.selected.lng}}
                                onCloseClick={() => {
                                    this.state.setSelected(null);
                                }}>
                                <div>
                                    <h2>
                <span role="img" aria-label="pin">
                  logo pin
                </span>{" "}
                                        Restaurant
                                    </h2>
                                    <p>Description</p>
                                </div>
                            </InfoWindow>
                        ) : null}

                    </GoogleMap>
                </LoadScript>

            </div>

        );
    }
}

export default Map;
