import React from "react";
import Navbar from "../component/Navbar_C.js";

class Services extends React.Component {
  render() {
    const { params } = this.props.match;
    console.log(params);
    return (
      <div>
        <h1>서비스: {params.v1}</h1>
      </div>
    );
  }
}

export default Services;
