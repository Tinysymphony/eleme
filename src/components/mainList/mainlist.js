require('./mainlist.scss');
var Selector = require('./selector/selector.js');

var TopSelector = React.createClass({
  clickTop: function(e){
    var index = 1;
    var target = $(e.target).closest("a");
    if(!target.attr("id"))
      return;
    if(target.attr("id") != "li1")
      index = 2;
    target.siblings().removeClass("focus");
    target.addClass("focus");
    this.props.changeState(index);
  },
  render: function(){
    return (
      <nav className="top-selector" onClick={this.clickTop}>
        <a className="top-item focus" id="li1">外卖商家</a>
        <a className="top-item" id="li2">购买过的商家</a>
        <a className="top-item" href="http://www.dianping.com" target="view_window">附近的团购</a>
      </nav>
    );
  }
});

var Mainlist = React.createClass({
  getInitialState: function(){
    return {index: 1};
  },
  changeState: function(a){
    this.setState({index: a});
  },
  render: function(){
    return (
      <div className="mainlist">
        <TopSelector changeState={this.changeState}/>
        <Selector page={this.state.index}/>
      </div>
    );
  }
});

module.exports = Mainlist;
