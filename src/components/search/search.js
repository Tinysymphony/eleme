require('./search.scss');

var Search = React.createClass({
  handleFocus: function(e){
    $(e.target).animate({width: "350px"});
  },
  handleBlur: function(e){
    $(e.target).animate({width: "200px"});
  },
  render: function(){
    return (
      <div className="search-container">
        <p><span className="current-location">当期位置：</span>{this.props.location}</p><a>[切换地址]</a>
        <input onFocus={this.handleFocus} onBlur={this.handleBlur} className="input-search" type="text" placeholder="搜索商家，美食_(:з」∠)_"/>
        <i className="fa fa-search"></i>
      </div>
    )
  }
});

module.exports = Search;
