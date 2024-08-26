import React from "react";
import InputField from "./components/InputField";
class App extends React.Component {
  state = {
    celsius: "",
    fahrenhite: "",
    kelvin: "",
    CelsiusScale: "celsius",
    KalvinSclae: "kelvin",
    FahrenhiteScale: "fahrenhite",
  };

  handleTemparetur = (val, name) => {
    let value = parseFloat(val);
    if (name == "c") {
      this.setState({
        celsius: value,
        fahrenhite: (value * 9) / 5 + 32,
        kelvin: value + 273.15,
      });
    } else if (name == "f") {
      this.setState({
        fahrenhite: value,
        celsius: ((value - 32) * 5) / 9,
        kelvin: ((value - 32) * 5) / 9 + 273.15,
      });
    } else if (name == "k") {
      this.setState({
        kelvin: value,
        celsius: value - 273.15,
        fahrenhite: ((value - 273.15) * 9) / 5 + 32,
      });
    }
  };

  render() {
    const {
      celsius,
      CelsiusScale,
      fahrenhite,
      FahrenhiteScale,
      kelvin,
      KalvinSclae,
    } = this.state;
    return (
      <div className="container">
        <InputField
          value={celsius}
          scale={CelsiusScale}
          changeTemparetur={this.handleTemparetur}
          name="c"
        />
        <InputField
          value={fahrenhite}
          scale={FahrenhiteScale}
          changeTemparetur={this.handleTemparetur}
          name="f"
        />
        <InputField
          value={kelvin}
          scale={KalvinSclae}
          changeTemparetur={this.handleTemparetur}
          name="k"
        />
      </div>
    );
  }
}
export default App;
