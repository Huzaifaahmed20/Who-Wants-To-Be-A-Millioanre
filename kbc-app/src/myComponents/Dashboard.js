import React, { Component } from 'react';
import '../App.css'
import firebase from 'firebase'

class Dashboard extends Component {
    constructor(props) {
        super(props)

    }

    googleSignOut() {
        firebase.auth().signOut().then(() => {
            console.log('Signout successful!')
            localStorage.clear();
            window.location.replace("/SignUpOrLogin")
        }).catch((error) => {
            console.log('Signout failed')
        });
    }
    facebookSignout() {
        firebase.auth().signOut()

            .then(() => {
                console.log('Signout successful!')
                localStorage.clear();
                window.location.replace("/SignUpOrLogin")

            }, (error) => {
                console.log('Signout failed')
            });
    }
    normalUserSignOut() {
        localStorage.clear();
        window.location.replace("/SignUpOrLogin")
    }
    render() {
        let GoogleUserFromStorage = localStorage.getItem("GoogleUser")
        let GoogleUser = JSON.parse(GoogleUserFromStorage)
        let FBUserFromStorage = localStorage.getItem("FBUser")
        let FBUser = JSON.parse(FBUserFromStorage)
        let NormalUserFromStorage = localStorage.getItem("user")
        let NormalUser = JSON.parse(NormalUserFromStorage)

        return (
            <div>

                {FBUserFromStorage ? (
                    <div>
                        <img className="uk-border-circle uk-position-medium uk-position-top-right" width="50" height="50" src={FBUser.photoURL} uk-toggle="target: .toggle-animation-queued; animation:uk-animation-scale-up uk-transform-origin-top-right, uk-animation-scale-up uk-transform-origin-top-right; queued: true; duration: 300" />
                        <div className="uk-position-large uk-margin-large-top uk-margin-large-right uk-position-top-right toggle-animation-queued uk-card toogleCardColor uk-width-medium uk-card-body" hidden uk-grid="true">
                            <h3 className="uk-text-center">{FBUser.displayName}</h3>
                            <button className="forCenter uk-button forfbDashColor" onClick={this.facebookSignout.bind(this)} uk-icon="icon: facebook">Sign Out </button>
                        </div>
                    </div>
                ) : (
                        GoogleUserFromStorage ? (
                            <div>
                                <img className="uk-border-circle uk-position-medium uk-position-top-right" width="50" height="50" src={GoogleUser.photoURL} uk-toggle="target: .toggle-animation-queued; animation:uk-animation-scale-up uk-transform-origin-top-right, uk-animation-scale-up uk-transform-origin-top-right; queued: true; duration: 300" />
                                <div className="uk-position-large uk-margin-xlarge-top uk-margin-large-right uk-position-top-right toggle-animation-queued uk-card toogleCardColor uk-width-medium uk-card-body" hidden uk-grid="true">
                                    <h3 className="uk-text-center">{GoogleUser.displayName}</h3>
                                    <button className="forCenter uk-button forGoogleDashColor" onClick={this.googleSignOut.bind(this)} uk-icon="icon: google-plus">Sign Out </button>
                                </div>
                            </div>

                        ) : (
                                NormalUserFromStorage ? (
                                    <div>
                                        <h1>{NormalUser.fullName}</h1>
                                        <h1>{NormalUser.email}</h1>
                                        <button onClick={this.normalUserSignOut.bind(this)} >Sign Out</button>
                                    </div>
                                ) : (
                                        alert("Must Sign In Or Register")
                                    )
                            )
                    )}
            </div>

        )
    }
}
export default Dashboard;