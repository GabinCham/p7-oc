import React from "react";
import {RestaurantItemList} from '../item-list/comment-item-list'
import ModalToAddReview from "../modal/modal-review";
import ModalToAddRestaurant from "../modal/modal-restaurant";


class RestaurantsList extends React.Component {

    render() {
        //  console.log('restoList', this.props.restaurants);

        return (
            <>
                {this.props.restaurants.map(i =>
                    <RestaurantItemList key={'item-' + i.place_id}
                                        searchDetailsForRestaurant={this.props.searchDetailsForRestaurant}
                                        restaurant={i}
                                        detail={this.props.details.find(d => d.place_id === i.place_id) ?? null
                                        }/>)}
            </>

        )
    }
}

export default RestaurantsList;
