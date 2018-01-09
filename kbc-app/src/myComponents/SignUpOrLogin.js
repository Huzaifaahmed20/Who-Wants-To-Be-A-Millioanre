import React, { Component } from 'react';
import '../App.css'
import swal from 'sweetalert'
import firebase from 'firebase'
import 'firebase/database'
class SignUpOrLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            email: "",
            cellNo: "",
            pass: "",
            cnfrmPass: "",
            loginEmail: "",
            loginPass: "",
            user: null, //For Google User
            error: {
                message: ""
            }
        }
    }
    Signup() {
        let db = firebase.database().ref("/")
        if (this.state.fullName === "") {
            // alert("Enter Your Name")
            swal("Error", "Please Enter Your Name", "warning", { button: false });

        }
        else if (this.state.email === "") {
            // alert("Enter Your Email")
            swal("Error", "Please Enter Email Address", "warning", { button: false });
        }
        else if (this.state.pass === "") {
            // alert("Enter Your Password")
            swal("Error", "Please Enter Password", "warning", { button: false });
        }
        else if (this.state.cnfrmPass === '') {
            swal("Error", "Please Confirm Password", "warning", { button: false });
        }
        else if (this.state.pass !== this.state.cnfrmPass) {
            // alert("Password Not Matched")
            swal("Error", "Password Not Matched", "warning", { button: false });
        }
        else {
            // console.log('message', this.state)
            let RegisteredUser = {
                fullName: this.state.fullName,
                cellNo: this.state.cellNo,
                email: this.state.email,
                pass: this.state.pass,
                cnfrmPass: this.state.cnfrmPass
            }
            firebase.auth().createUserWithEmailAndPassword(RegisteredUser.email, RegisteredUser.pass)
                .then(res => {
                    RegisteredUser.userID = res.uid
                    // console.log('success',success)
                    db.child('user/' + res.uid).set(RegisteredUser).then(() => {
                        alert("Signed Up Successfull")
                    })

                })
                .catch(error => {
                    console.log('error', error);
                    this.setState({ error })
                })

        }
    }
    Signin() {
        let db = firebase.database().ref("/")
        var user = {
            loginEmail: this.state.loginEmail,
            loginPass: this.state.loginPass,
        };
        firebase.auth().signInWithEmailAndPassword(user.loginEmail, user.loginPass).then((success) => {
            db.child("user/" + success.uid).once("value", (snap) => {
                // console.log(snap.val());
                localStorage.setItem("user", JSON.stringify(snap.val()));

                swal({
                    title: "Good Job",
                    text: "Log In Successfull",
                    icon: "success",
                })
                window.location = "/Dashboard"





            })

        })
    }
    googleSignIn() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            localStorage.setItem('GoogleUser', JSON.stringify(user));

            window.location = "/Dashboard";
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
                swal({
                    title: "OOPPS!!",
                    text: error.message,
                    icon: "error",
                })
          
        });
    }
    fbSignIn() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                // var token = result.credential.accessToken;
                var user = result.user;
                localStorage.setItem('FBUser', JSON.stringify(user));
                window.location = "/Dashboard";
            }).catch(function (error) {
                console.log(error.code);
                console.log(error.message);
                swal({
                    title: "OOPPS!!",
                    text: error.message,
                    icon: "error",
                })
            });
    }

    render() {
        return (
            //todo: phone no or confirm pass ko sahi kro input
            //todo: poora page theek kro baki sb set h

            <div>
                <div className="uk-section uk-section-secondary uk-preserve-color">
                    <div className="uk-container">

                        <div className="uk-panel uk-light uk-margin-medium">
                            <h1 className="uk-text-center">WHO WANTS TO BE A MILLIONARE ?</h1>
                        </div>

                        <div className="uk-grid-match uk-child-width-expand@m" uk-grid="true">
                            <div>
                                <h3 className="uk-text-center forMainheading">Register Yourself</h3>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <h1 className="uk-text-center">Sign Up</h1>


                                    <div className="uk-margin">
                                        <input onChange={event => this.setState({ fullName: event.target.value })} className="uk-input forBorder" type="text" placeholder="Full Name" />
                                    </div>
                                    <div className="uk-margin">
                                        <input onChange={event => this.setState({ cellNo: event.target.value })} type="text" className="uk-input forBorder" placeholder="Cell No (Optional)" />
                                    </div>
                                    <div className="uk-margin">
                                        <input onChange={event => this.setState({ email: event.target.value })} type="email" className="uk-input forBorder" placeholder="Email" />

                                    </div>
                                    <div className="uk-margin">
                                        <input onChange={event => this.setState({ pass: event.target.value })} type="password" className="uk-input forBorder" placeholder="Password" />
                                    </div>
                                    <div className="uk-margin">
                                        <input onChange={event => this.setState({ cnfrmPass: event.target.value })} type="password" className="uk-input forBorder" placeholder="Confirm Password" />
                                    </div>
                                    <div className="uk-margin">
                                        <button onClick={this.Signup.bind(this)} type="submit" className="uk-button uk-button-primary uk-width-1-1 uk-button-large">Sign Up</button>
                                    </div>
                                    <div className="uk-alert-danger">{this.state.error.message}</div>
                                </div>





                            </div>
                            <div>
                                <h3 className="uk-text-center forMainheading">Or Sign In with an existing Account.</h3>

                                <div className="uk-card uk-card-default uk-card-body">
                                    <h1 className="uk-text-center">Sign In</h1>
                                    <div className="uk-margin">
                                        <input onChange={event => this.setState({ loginEmail: event.target.value })} type="email" className="uk-input forBorder" placeholder="Email" />
                                    </div>
                                    <div className="uk-margin">
                                        <input onChange={event => this.setState({ loginPass: event.target.value })} type="password" className="uk-input forBorder" placeholder="Password" />
                                    </div>
                                    <div className="uk-margin">
                                        <button onClick={this.Signin.bind(this)} type="submit" className="uk-button uk-button-secondary uk-width-1-1 uk-button-large">Sign In</button>
                                    </div>
                                    <h3 className="uk-text-center">Or Sign In With Google or Facebook .</h3>
                                    <div className="uk-margin">

                                        <button onClick={this.googleSignIn.bind(this)} className="uk-icon-button forgoogleColor uk-margin-xlarge-left" uk-icon="icon: google-plus"></button>
                                        <button onClick={this.fbSignIn.bind(this)} className="uk-icon-button forfbColor uk-margin-xlarge-left" uk-icon="icon: facebook"></button>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default SignUpOrLogin