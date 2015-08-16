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
                <input type="text" onChange={this.update}/>
                <h1>{this.state.txt}</h1>
            </div>
        );
    }
});

Meteor.startup(function () {
    React.render(<App/>, document.body);
});