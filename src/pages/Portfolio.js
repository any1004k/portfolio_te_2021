import React from "react";

class Portfolio extends React.Component {
  render() {
    const { params } = this.props.match;
    console.log(params);
    return (
      <div>
        <h1>포트폴리오: {params.v1}</h1>
      </div>
    );
  }
}

export default Portfolio;
