import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withAutorization} from './Autorization';


class Navigation extends Component{
	render(){
		return (
		    <div>
		      <header className="App-header">
		          <nav className="App-nav">
			            <ul>
			              <li>
			                <Link to="/">Home</Link>
			              </li>
			              <li>
			                <Link to="/signin">Sign In</Link>
			              </li>
			              <li>
			                <Link to="/signup">Sign Up</Link>
			              </li>
			              <li>
			              	<Link to="/signin">{this.props.isLogged ? "Connecté" : "Se connecter"}</Link>
			              </li>
			            </ul>
				    </nav>
			    </header>
		 	</div>	
	  );
	}
}

export default withAutorization(Navigation);