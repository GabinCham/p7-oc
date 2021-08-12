import "../../App.css"
import React, {useState, useEffect} from "react";
import ModalToAddReview from "../modal/modal-review";
import DayJS from 'react-dayjs';

// import AccordionWrapper from './components/AccordionWrapper';
// import AccordionItem from './components/AccordionItem';

export function Rtif({boolean, ...props}) {

    const {children} = props;
    if (boolean)

        return (
            {...children}
        );
    return null;
}

export function TranslateDate(dateUnix) {
    const date = new Date(dateUnix);
    date.getTime()
    console.log('DATE', date)

    return date;
}


export const RestaurantItemList = props => {

    const [isClick, openToggle] = useState(false);

    let urlRatingRestaurant = Math.round(props.restaurant.rating);

    const searchDetailsForRestaurant = async place_id => {
        if (props.detail === null || props.detail === undefined) {
            await props.searchDetailsForRestaurant(place_id);
        }
        openToggle(!isClick);
    }

    // console.log('COMMENTAIRES:', props.detail);
    return (
        <div className="restaurant_list_item">
            <h1>{props.restaurant.name}</h1>
            <p>{props.restaurant.vicinity}</p>
            <div className="d-flex ratings_restaurant">
                <img className="ratings_restaurant_img" src={`/assets/ratings/rate_${urlRatingRestaurant}.svg`}
                     alt="ratings"/>
                <ModalToAddReview/>
            </div>


            <div className="details">
                <Rtif boolean={isClick}>
                    {(props.detail !== null && props.detail !== undefined) && (<div>{props.detail.reviews.map(r =>
                        <div>
                            <div className="d-flex">
                                <img className="author_pic" src={r.profile_photo_url} alt="profil picture"/>
                                <p className="author_name">{r.author_name}</p>
                            </div>
                            <div className="d-flex mb-3">
                                <img className="rating" src={`/assets/ratings/rate_${r.rating}.svg`} alt="rate"/>
                                <p className="infos mt-auto mb-auto">{r.relative_time_description}</p>
                            </div>


                            <p>{r.text}</p>
                            <p className="infos">Ajouté le
                                <span> </span>
                                <DayJS
                                    format="MM-DD-YYYY"
                                    asString={true}
                                    element="span">{r.time}</DayJS>
                            </p>
                        </div>
                    )}</div>)}
                </Rtif>
            </div>

            <a onClick={() => searchDetailsForRestaurant(props.restaurant.place_id)}>
                {isClick === true && (<>Masquer les avis</>)}
                {isClick === false && (<>Voir les avis</>)}
            </a>
        </div>
    )

}
