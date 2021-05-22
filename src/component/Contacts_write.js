import React, { Component } from "react";

class Contacts_write extends Component {
  render() {
    console.log(this.props.data);
    return (
      <>
        <div> 보이십니까</div>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={(e) => {
            this.props.onChange();
          }}
        >
          목록
        </button>
      </>
    );
  }
}

export default Contacts_write;
