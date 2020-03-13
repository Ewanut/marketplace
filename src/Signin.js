import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withAutorization} from './Autorization';

class Signin extends Component{

	handleSubmit = (event) =>{
		event.preventDefault();
	}

	render(){
		console.log("props signin",this.props);
		return (
		    <div className="card">
		      <h2>{this.props.title}</h2>
		      <div className="login-page">
		        <div className="form">
		          <form className="login-form" onSubmit={this.handleSubmit}>
		            <input type="text" placeholder="username"/>
		            <input type="password" placeholder="password"/>
		            <button className="button" onClick={this.props.toLogin}>login</button>
		            <p className="message">Not registered? <Link to="/signup">Sign Up</Link></p>
		          </form>
		        </div>
		      </div>
		    </div>
		  );
	}
}

export default withAutorization(Signin);