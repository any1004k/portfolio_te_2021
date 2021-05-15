import React from "react";

class AboutMe extends React.Component {
  render() {
    const { params } = this.props.match;
    console.log(params);
    return (
      <div>
        <h1>김태은을 소개하겠습니다. 전달받은 값 : {params.v1}</h1>
      </div>
    );
  }
}

export default AboutMe;
