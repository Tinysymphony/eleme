require('./adBar.scss');

var AdBar = React.createClass({
  render: function(){
    return (
      <div className="centerBar">
        <a>ご注文は翔鶴ですか</a>
      </div>
    );
  }
});

module.exports = AdBar;
