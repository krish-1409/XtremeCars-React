import React from "react";
import SampleComponent from "../../component/SampleComponent";
import "./index.css";

const FirstTab = (props: any) => {
  return (
    <div className="first-tab-container">
      <SampleComponent name="Tab 1" color="#F0F8FF" />
    </div>
  );
};

export default FirstTab;
