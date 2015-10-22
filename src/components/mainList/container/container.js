require('./container.scss');
var Item = require('./item/item.js');

var Container = React.createClass({
  render: function(){
    var selector = this.props.selector;
    return (
      <div className="grid-container">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
});

module.exports = Container;
