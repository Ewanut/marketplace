import React, {Component} from 'react';

class Home extends Component{

	constructor(props) 
	    { 
	        super(props); 
	        this.state = { panier:0}; 
	    } 

	    onClick = () => {
	    	this.setState({panier: this.panier+1});
	    	console.log(this.state);
	    }

	render(){
		return (
		    <div className="card">
		      <h2>{this.props.title}</h2>
		      <div className="shop">
		      <div className="shop-card">
				  <div className="title">
				    <p>Audi R8 v10 plus</p>
				  </div>
				  <div className="desc">
				    <p>Supercar</p>
				  </div>
				  <div className="image1">
				    <img src="https://static.choisir.com/image/upload/w_392/automobile/photos/versions/audi/r8/2017/audi-r8-coupe-2p-2017-lowaggressive-blanc-ibis.jpg"></img>
				  </div>
				  <div className="cta">
				    <div className="price">$130000</div>
				    <button className="btn" onClick={this.onClick}>Add to cart</button>
				  </div>
			  </div>
				<div className="shop-card">
				  <div className="title">
				    <p>Ducati Streetfighter V4</p>
				  </div>
				  <div className="desc">
				    <p>Superbike</p>
				  </div>
				  <div className="image2">
				    <img src="https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/13361611-0-86624591.jpg"></img>
				  </div>
				  <div className="cta">
				    <div className="price">$30000</div>
				    <button className="btn">Add to cart</button>
				  </div>
				</div>
				<div className="shop-card">
					  <div className="title">
					    <p>Honda Dax ST50</p>
					  </div>
					  <div className="desc">
					    <p>Oh my god</p>
					  </div>
					  <div className="image3">
					    <img src="https://www.mcmracing.com/158584-large_default/honda-dax.jpg"></img>
					  </div>
					  <div className="cta">
					    <div className="price">$130000000</div>
					    <button className="btn">Add to cart</button>
					  </div>
					</div>
				</div>
			</div>

		  );
	}
}

export default Home;