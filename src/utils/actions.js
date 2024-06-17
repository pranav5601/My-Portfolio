var DivSize = React.createClass({
  getInitialState() {
    return { state: 0 };
  },

  componentDidMount() {
    const height = document.getElementById("container").clientHeight;
    this.setState({ height });
  },

  render: function () {
    return (
      <div className="test">
        Size: <b>{this.state.height}px</b> but it should be 18px after the
        render
      </div>
    );
  },
});

ReactDOM.render(<DivSize />, document.getElementById("container"));
