import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {withFirebase} from './Firebase';
// import {FirebaseProvider} from './Firebase';


class Signup extends Component{
	constructor(props) 
    { 
        super(props); 
        this.state = { email : "" , password : ""}; 
    } 

    onChange = (event) => {
    	
    	this.setState({[event.target.name]: event.target.value});
    	console.log(this.state);
    }

	render(){
		return (
		    <div className="card">
		      <h2>{this.props.title}</h2>
		      <div className="login-page">
		        <div className="form">
		          <form className="register-form">
		            <input type="text" placeholder="firstname"/>
		            <input type="text" placeholder="username"/>
		            <input type="password" placeholder="password" name="password" onChange={this.onChange}/>
		            <input type="text" placeholder="email address" name="email" onChange={this.onChange}/>
		            <button>create</button>
		            <p className="message">Already registered? <Link to="/signin">Sign In</Link></p>
		          </form>
		        </div>
		      </div>
		    </div>
		  );
	}
}

// export default withFirebase(Signup);
export default Signup;