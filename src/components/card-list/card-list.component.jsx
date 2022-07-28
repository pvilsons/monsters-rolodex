import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);

    console.log("render from CardList");

    // deconstruction
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
