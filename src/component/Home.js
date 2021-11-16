import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";

class Home extends Component {
  hapusPengunjung = (id) => {
    this.setState({
      data: [
        ...this.state.data.filter((item) => {
          return item.id !== id;
        }),
      ],
    });
  };

  tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };
    this.setState({
      data: [...this.state.data, newData],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <ListPassenger hapusPengunjung={this.hapusPengunjung} />
        <PassengerInput tambahPengunjung={this.tambahPengunjung} />
      </div>
    );
  }
}

export default Home;
