import Card from "./components/Card";
import { Component } from "react";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  render() {
    return (
      <>
        <div className="container mx-auto flex items-center justify-center h-screen">
          <Card />
        </div>
      </>
    );
  }
}

export default App;
