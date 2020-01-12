import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    currentSushi: [],
    sushiIndex: 0,
    money: 100,
    eatenPlates: []
  };

  fetchSushi = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        return this.setState({
          currentSushi: data.slice(
            this.state.sushiIndex,
            this.state.sushiIndex + 4
          )
        });
      });
  };

  componentDidMount() {
    this.fetchSushi();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sushiIndex !== prevState.sushiIndex) {
      this.fetchSushi();
    }
  }

  sushiEaten = sushi => {
    return this.setState(prevState =>
      prevState.money - sushi.price >= 0
        ? {
            currentSushi: prevState.currentSushi.map(sashimi => {
              if (sashimi.id === sushi.id) {
                sashimi.isEaten = true;
                return sashimi;
              } else {
                return sashimi;
              }
            }),
            money: prevState.money - sushi.price,
            eatenPlates: [...prevState.eatenPlates, sushi]
          }
        : { currentSushi: prevState.currentSushi, money: prevState.money, eatenPlates: prevState.eatenPlates }
    );
  };

  moreSushi = () => {
    this.setState(prevState => ({
      sushiIndex: prevState.sushiIndex + 4
    }));
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          currentSushi={this.state.currentSushi}
          onSushiEaten={this.sushiEaten}
          onMoreSushi={this.moreSushi}
        />
        <Table money={this.state.money} plates={this.state.eatenPlates}/>
      </div>
    );
  }
}

export default App;
