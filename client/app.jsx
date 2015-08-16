var App = React.createClass({
    getDefaultProps() {
      return {
        txt:'this is a default prop',
        cat:0,
      };
    },

    propTypes: {
        txt: React.PropTypes.string,
        cat: React.PropTypes.number.isRequired,
    },
    render() {
        var txt = this.props.txt;
        return (
            <h1>{txt}</h1>
        );
    }
});

Meteor.startup(function () {
    React.render(<App cat={5} />, document.body);
});