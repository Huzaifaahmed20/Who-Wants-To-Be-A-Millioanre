import React, { Component } from 'react';
// import firebase, { auth, provider } from 'firebase';
// import 'firebase/database';
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            email: "",
            pass: ""
        }
    }
    Signup() {
        console.log('message', this.state)
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Sign Up</h1>
                <div className="form-group row">
                    <div className="col-xs-12">
                        <label htmlFor="usr">Fullname:</label>
                        <input onChange={event=>this.setState({fullName:event.target.value})} type="text" className="form-control input-lg forBorder" id="usr" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xs-12">
                        <label htmlFor="email">@Email:</label>
                        <input onChange={event=>this.setState({email:event.target.value})} type="email" className="form-control input-lg forBorder" id="email" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xs-12">
                        <label htmlFor="pwd">*Password:</label>
                        <input onChange={event=>this.setState({pass:event.target.value})} type="password" className="form-control input-lg forBorder" id="pwd" />
                    </div>
                </div>


                <button onClick={this.Signup.bind(this)} type="submit" className="btn btn-primary btn-lg pull-right">Sign Up</button>

            </div>

        )
    }
}
export default Signup; 