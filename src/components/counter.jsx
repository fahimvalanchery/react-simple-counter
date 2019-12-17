import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    // tags: ["tag1", "tag2", "tag3"]
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     console.log("Increment", this);
  //   }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  render() {
    return (
      <div>
        {/* {this.renderTags()} */}
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>{" "}
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classess = "badge m-2 badge-";
    classess += this.state.count === 0 ? "warning" : "primary";
    return classess;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
