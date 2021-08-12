import React from "react";
import {details} from "../../api/details.mock";
import * as assert from "assert";


const submitNewReview = async place_id => {
    const text = document.getElementById('text').value;
    const author = document.getElementById('author').value;
    const rating = document.getElementById('rating').value;
    //const ratingOne = document.getElementById('radio_1').value;
    //const ratingTwo = document.getElementById('radio_2').value;
    // const ratingThree = document.getElementById('radio_3').value;
    const ratingFour = document.getElementById('radio_4').value;
    // const ratingFive = document.getElementById('radio_5').value;
    //const rating = document.getElementsByClassName('.radio').value;
    // $(':radio').change(function() {
    //    console.log('New star rating: ' + this.value);
    //});
    //document.getElementById('radio').change(function() {
    //    console.log('New star rating: ' + this.value);
    //});
    //+  profil pics
    let profilPic = '/assets/user_profil.png'


    let newReviews =

        {
            "author_name": author,
            "author_url": "https://www.google.com/maps/contrib/101257934785356209821/reviews",
            "language": "fr",
            "profile_photo_url": profilPic,
            "rating": ratingFour,
            "relative_time_description": "Il y a " + Date.now(),
            "text": text,
            "time": Date.now()
        }


    //console.log(reviews)

    //let number = parseInt(details.length)
    // console.log('tab details lenght', number)

    //  console.log('tab details push', details[0].reviews.push(reviews))
    //  console.log('tab details', details)
    details[0].reviews.unshift(newReviews);


    // console.log(text);
    // console.log(author);
    // console.log(rating);
    // console.log(ratingOne);
    //  console.log(ratingTwo);
    // console.log(ratingThree);
    //   console.log(ratingFour);
    //console.log(ratingFive);
}


class ModalToAddReview extends React.Component {


    render() {

        return (
            <div className="mb-auto mt-auto">

                <a data-bs-toggle="modal" data-bs-target="#exampleModal">Donner son avis</a>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajouter un avis</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <div className="grid">

                                    <form className="rating flex" id="rating">
                                        <label>
                                            <input type="radio" id="radio_1" name="stars" value="1"/>
                                            <span className="icon">★</span>
                                        </label>

                                        <label>
                                            <input type="radio" id="radio_2" name="stars" value="2"/>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" id="radio_3" name="stars" value="3"/>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" id="radio_4" name="stars" value="4"/>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" id="radio_5" name="stars" value="5"/>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                    </form>


                                    <div className="input-group mb-3 flex">
                                        <span className="input-group-text">Nom / Prénom</span>
                                        <input id="author" type="text" className="form-control"
                                               placeholder="Nom / Prénom"
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
                                        onClick={() => submitNewReview()}
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

export default ModalToAddReview;
