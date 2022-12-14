import React from "react";
import axios from 'axios';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      userInput: "",
      userOutput: "",
    };
    this.sendData=this.sendData.bind(this);
  }
  async updateInputValue(evt) {
    const val = evt.target.value;
    await this.setState({
      userInput: val,
    });
  }
  async sendData() {
    const data={
      "data": this.state.userInput
    }
    axios.post(`https://lit-dusk-61946.herokuapp.com/incomingData`, data)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({
        userOutput: res.data
      })
    })
  }
  render() {
    return (
      <section id="MainBody">
        {" "}
        <div className="container">
          <div className="sub-container">
            <div className="about-text">
              <h2>About Us</h2>
              <h3>
                This website is a Spelling Correction tool that can help you
                correct any spelling mistakes. Be it a document draft, an
                email to your boss, or just a small school assignment, we've got
                you covered.
              </h3>
            </div>
            <div className="input-box">
              <input
                id="input-box"
                type="text"
                name="userInput"
                placeholder="Enter your text"
                defaultValue={this.state.userInput}
                onChange={(evt) => this.updateInputValue(evt)}
              />
            </div>
          </div>
          <div className="sub-container">
            <div className="about-text">
              <h3>
                Spellings can be a cumbersone issue, right? <br />
                Click on this button to correct any spelling mistakes.
              </h3>
              <button onClick={this.sendData}>
                Submit
              </button>
            </div>
            <div className="input-box">
              <input
                id="input-box"
                type="text"
                name="userOutput"
                placeholder="Your output is"
                defaultValue={this.state.userOutput}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default MainBody;
