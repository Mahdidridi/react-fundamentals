var App = React.createClass({
    getInitialState() {
      return {
        txt:'this stat txt ',
        id: 0
      };
    },
    update: function(e){
        this.setState({txt: e.target.value})
    },
    render() {
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
            </div>
        );
    }
});

var Widget = React.createClass({
  render() {
      return (
          <div>
              <input type="text" onChange={this.props.update}/>
              <h1>{this.props.txt}</h1>
          </div>
      );
  }
});


Meteor.startup(function () {
    React.render(<App/>, document.body);
});