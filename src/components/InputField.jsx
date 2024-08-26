import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
  }
  handleTemparetur = (e) => {
    this.props.changeTemparetur(e.target.value, this.props.name);
  };
  render() {
    const { value, scale } = this.props;
    return (
      <>
        <fieldset>
          <legend>{scale}</legend>
          <input type="number" value={value} onChange={this.handleTemparetur} />
        </fieldset>
      </>
    );
  }
}
