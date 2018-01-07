import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import leftimg from '../images/leftimg.png'
class Login extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">LOGIN</h1>

                <div className="form-group row">
                    <div className="col-xs-12">
                        <label htmlFor="usr">@Email:</label>
                        <input type="text" className="form-control input-lg forBorder" id="usr" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xs-12">
                        <label htmlFor="pwd">*Password:</label>
                        <input type="password" className="form-control input-lg forBorder" id="pwd" />
                    </div>
                </div>


                <button type="submit" className="btn btn-primary btn-lg pull-right">Submit</button>
                <div className="row">
                    <div className="col-xs-12">
                        <h4 className="text-center">Dont Have an Account ?</h4>

                        <Link to="/Signup" className="btn btn-primary center-block" >Create One</Link>
                    </div>
                </div>
            </div>

        )
    }
}
export default Login;