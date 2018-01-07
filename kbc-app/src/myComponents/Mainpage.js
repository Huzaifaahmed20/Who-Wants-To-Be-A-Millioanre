import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import leftimg from '../images/leftimg.png'
import '../App.css';

class Mainpage extends Component {
    render() {
        // var bg = {
        //     backgroundImage : 'url('+leftimg+')'
        // }
        return (
            <div>
                <div className="uk-box-shadow-hover-xlarge uk-position-center uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s uk-card uk-card-default uk-card-body">
                    <div className="uk-light">
                        <a className="uk-logo">
                            <img className="uk-align-center" src={leftimg} alt="logo" />
                        </a>
                    </div>
                    <h1 className="uk-text-center">Welcome</h1>
                    <h2 className="uk-text-center">So, You want to be a Millionare, Right ?</h2><br />
                    <Link to="/Signuporlogin" className="uk-button uk-button-primary uk-position-bottom-center uk-button-large forText">So Let's Get Started</Link>

                </div>
            </div>


        )
    }
}
export default Mainpage;