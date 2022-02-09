import React from "react";
import SampleComponent from "../../component/SampleComponent";
import "./index.css";

class SecondTab extends React.Component {
  render() {
    return (
      <div className="first-tab-container">
        <SampleComponent name="Tab 2" color="#A9A9A9" />
      </div>
    );
  }
}

export default SecondTab;
