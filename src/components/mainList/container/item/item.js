require('./item.scss');

var picsArray = [
  {id: "", src=""},
  {id: "", src=""},
  {id: "", src=""},
  {id: "", src=""},
  {id: "", src=""}
];

var ItemImage = React.createClass({
  render: function(){
    return (
      <div className="item-img">
        <div className="item-img-container">
          <img className="img-src" src="http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicrin.jpg" />
          <span>30 min</span>
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

var PriceDelivery = React.createClass({
  render: function(){
    var delivery = (this.props.delivery)? "配送费" + this.props.delivery + "元" : "免费配送";
    return <p>{this.props.price}元起送&nbsp;/&nbsp;{delivery}</p>
  }
});

var StorePics = React.createClass({
  var pics = this.props.pics.map(function(item){
    return <img src={item.src}/>
  });
  render: function(){
    return <p>{pics}</p>
  }
});

var ItemInfo = React.createClass({
  render: function(){
    var title = "internet server IDEA basic length is not";
    return (
      <div className="item-info">
        <div className="item-info-container">
          <h3>{title}</h3>
          <StarsSales score={3.5} sales={1024}/>
          <PriceDelivery price={20} delivery={3}/>
          // <StorePics pics={}/>
        </div>
      </div>
    );
  }
});

var Item = React.createClass({
  render: function(){
    return (
      <div className="item">
        <ItemImage />
        <ItemInfo />
      </div>
    );
  }
});

module.exports = Item;
