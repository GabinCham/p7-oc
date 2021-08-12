import './App.css';
import React from "react";
import Map from './components/map'
import RestaurantsList from "./components/list/restaurants-list";
import ModalToAddReview from "./components/modal/modal-review";
import {getRestaurant} from "./api/places.api";
import {getDetails} from "./api/details.api";
import ModalToAddRestaurant from "./components/modal/modal-restaurant";

export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            restaurantList: [],
            detailsList: []
        }
    }

    async searchDetailsForRestaurant(place_id) {
       alert(place_id);
    }

    componentDidMount() {
        getRestaurant(parseFloat(process.env.REACT_APP_DEFAULT_LAT), parseFloat(process.env.REACT_APP_DEFAULT_LNG)).then(d => {
                this.setState({restaurantList: d.results})
                // console.log('d', d);
            }
        );
        getDetails().then(d => {
           // console.log('d', d)
             this.setState({detailsList : d})
            }

        )
       // this.setState({detailsList : getDetails()})

    }

    render() {
        console.log('TEST STATE DETAILS:', this.state.detailsList);
        return (
            <div style={{display: "flex"}}>
                <div style={{width: "70vw", height: "100vh"}}>
                    <Map restaurants={this.state.restaurantList}/>
                </div>
                <div style={{width: "30vw", height: "100vh"}} className="restaurant_list">
                    <RestaurantsList restaurants={this.state.restaurantList} details={this.state.detailsList} searchDetailsForRestaurant={this.searchDetailsForRestaurant}/>
                    <ModalToAddRestaurant restaurants={this.state.restaurantList}/>
                    {console.log('test in app.js:', this.state.detailsList)}
                </div>
            </div>
        )
    }
}
