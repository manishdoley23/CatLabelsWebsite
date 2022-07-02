// import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ doggies }) => (
	<div className='card-list'>
		{doggies.map((doggy) => {
			return <Card doggy={doggy} />;
		})}
	</div>
);

// class CardList extends Component {
// 	render() {
// 		const { doggies } = this.props;
// 		return (
// 			<div className='card-list'>
// 				{doggies.map((doggy) => {
// 					return <Card doggy={doggy} />;
// 				})}
// 			</div>
// 		);
// 	}
// }

export default CardList;
