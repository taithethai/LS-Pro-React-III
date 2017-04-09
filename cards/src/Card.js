import React, {Component} from 'react';

export default class Card extends Component {

	render() {
		return(
			<div className="card">
				<p className="left">{this.props.user}</p>
				<img src={this.props.photo} alt={this.props.phrase} />
				<p className="left">{this.props.likes} likes</p>
				<p className="left">{this.props.user}:{this.props.phrase} </p>
			</div>
			);
	}
}