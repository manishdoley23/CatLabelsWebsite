// import { Component } from "react";
import "./card.styles.css";

const Card = ({ doggy }) => {

	const { name, email, id } = doggy;

	return (
		<div className='card-container' key={id}>
			<img
				alt={`cat ${name}`}
				src={`https://robohash.org/${id}?set=set4&size=180x180`}
			/>
			<h2>{`${name}`}</h2>
			<p>{email}</p>
		</div>
	);
}

// class Card extends Component {
// 	render() {

// 		const { name, email, id } = this.props.doggy;

// 		return (
// 			<div className='card-container' key={id}>
// 				<img
// 					alt={`cat ${name}`}
// 					src={`https://robohash.org/${id}?set=set4&size=180x180`}
// 				/>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		);
// 	}
// }

export default Card;
