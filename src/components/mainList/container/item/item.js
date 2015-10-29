require('./item.scss');

var logoArray = ["di", "fu", "jian", "pao", "piao", "shou", "zhuan"];

var ItemImage = React.createClass({
  render: function(){
    return (
      <div className="item-img">
        <div className="item-img-container">
          <img className="img-src" src={this.props.src} />
          <span>{this.props.time} min</span>
        </div>
      </div>
    );
  }
});

var StarsSales = React.createClass({
  render: function(){
    var score = this.props.score;
    var starList = [0, 0, 0, 0, 0];
    var classList = ["fa fa-star-o", "fa fa-star-half-o", "fa fa-star"];
    for(var i = 0; i < starList.length; i++, score-=1){
      if(score > 0 && score - 1 < 0){
        starList[i] = 1;
      } else if (score - 1 >= 0) {
        starList[i] = 2;
      } else
        break;
    }
    var stars = starList.map(function(item){
      return <i className={classList[item]}></i>;
    });
    return <p>{stars}&nbsp;<span>月售{this.props.sales}单</span></p>;
  }
});

var StorePics = React.createClass({
  render: function(){
    var pics = this.props.pics.map(function(item){
      return <img src={item.src}/>;
    });
    return <p>{pics}</p>;
  }
});

var PriceDelivery = React.createClass({
  render: function(){
    var delivery = (this.props.delivery)? "配送费" + this.props.delivery + "元" : "免费配送";
    return <p>{this.props.price}元起送&nbsp;/&nbsp;{delivery}</p>;
  }
});

var Logos = React.createClass({
  render: function(){
    var logos = this.props.describe.map(function(item){
      return <i className={"sprite " + "sprite-" + logoArray[item.index]}></i>;
    });
    return <p>{logos}</p>;
  }
});

var ItemInfo = React.createClass({
  render: function(){
    var data = this.props.data;
    return (
      <div className="item-info">
        <div className="item-info-container">
          <h3>{data.title}</h3>
          <StarsSales score={data.score} sales={data.sales}/>
          <PriceDelivery price={data.price} delivery={data.delivery}/>
          <Logos describe={data.describe}/>
        </div>
      </div>
    );
  }
});

var Hover = React.createClass({
  calDirection: function(tag){
    var MAX = 1250;
    if($(window).width() < MAX){
      if(tag % 3 == 0)
        return "hoverItem-right";
      return "hoverItem-left";
    } else {
      if(tag % 4 == 3)
        return "hoverItem-left";
      return "hoverItem-right";
    }
  },
  render: function(){
    var data = this.props.data;
    var direction = this.calDirection(this.props.tag);
    var triangle = /left/.test(direction) ? "triangle-left" : "triangle-right";
    var contents = data.describe.map(function(item){
      return (<div className="describe-section"><i className={"sprite " + "sprite-" + logoArray[item.index]}></i><p>{item.text}</p></div>);
    });
    return (
      <div className={direction}>
        <h3>{data.title}</h3>
        <hr/>
        {contents}
        <div className={triangle}></div>
        <div className={triangle+"-border"}></div>
      </div>
    );
  }
});

var Item = React.createClass({
  getInitialState: function(){
    return {hover: 0};
  },
  handleHover: function(){
    this.setState({hover: 1});
  },
  handleLeave: function(){
    this.setState({hover: 0});
  },
  render: function(){
    var hover = this.state.hover ? <Hover tag={this.props.tag} data={this.props.data}/> : null;
    var cname = "item " + "item-" + this.props.tag;
    return (
      <div className={cname}>
        <div className="item-content" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
          <ItemImage src={this.props.data.src} time={30}/>
          <ItemInfo data={this.props.data}/>
        </div>
        {hover}
      </div>
    );
  }
});

module.exports = Item;
