import React, { Component } from 'react';
import '../App.css'
import firebase from 'firebase'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    
 facebookSignout() {
    firebase.auth().signOut()
    
    .then(()=> {
       console.log('Signout successful!')
       localStorage.clear();
    window.location.replace("/SignUpOrLogin")

    }, (error) =>{
       console.log('Signout failed')
    });
 }
    render() {
        var GoogleUserFromStorage = localStorage.getItem("GoogleUser")
        var GoogleUser = JSON.parse(GoogleUserFromStorage)
        var FBUserFromStorage = localStorage.getItem("FBUser")
        var FBUser = JSON.parse(FBUserFromStorage)
        
        return (
            <div>
                <h1>{FBUser.displayName}</h1>
                <img className="uk-border-circle" width="40" height="40" src={FBUser.photoURL} />
                <button onClick={this.facebookSignout.bind(this)} >FB Sign Out</button>
            </div>
        )
    }
}
export default Dashboard;