import React, { Component } from 'react';
import '../App.css'
import firebase from 'firebase'
import SignUpOrLogin from './SignUpOrLogin';

class Dashboard extends Component {
    constructor(props) {
        super(props)

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
    render() {
        var GoogleUserFromStorage = localStorage.getItem("GoogleUser")
        var GoogleUser = JSON.parse(GoogleUserFromStorage)
        var FBUserFromStorage = localStorage.getItem("FBUser")
        var FBUser = JSON.parse(FBUserFromStorage)
        var NormalUserFromStorage = localStorage.getItem("user")
        var NormalUser = JSON.parse(NormalUserFromStorage)

        return (
            <div>

                {FBUserFromStorage ? (
                    <h1>FBUer</h1>
                    // <h1>{FBUser.displayName}</h1>
                    // <button onClick={this.facebookSignout.bind(this)} >FB Sign Out</button>
                    // <img className="uk-border-circle" width="40" height="40" src={FBUser.photoURL} />
                ) : (
                        GoogleUserFromStorage ? (
                            <h1>Google User</h1>
                        ) : (
                                NormalUserFromStorage ? (
                                    <h1>Normal User</h1>
                                ) : (
                                        alert("Must Sign In Or Register"),
                                        window.location.replace("SignUpOrLogin")
                                    )
                            )
                    )}
            </div>

        )
    }
}
export default Dashboard;