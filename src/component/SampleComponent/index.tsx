import React from "react";
import "./index.css";

interface IProps {
  name: string;
  color: string;
}

const SampleComponent = (props: IProps) => {
  return (
    <div className="sample-component" style={{ backgroundColor: props.color }}>
      <div className="component-text">{`Hi, You are currently in ${props.name}`}</div>
    </div>
  );
};

export default SampleComponent;
