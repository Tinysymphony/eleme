require('./container.scss');
var Item = require('./item/item.js');

var items = [{
  title: "锟斤拷",
  src: "http://7xjgb0.com1.z0.glb.clouddn.com/eleQQ20151029-2@2x.png",
  score: 4,
  sales: 123,
  delivery: 0,
  price: 5,
  describe: [{
    index: 0,
    text: "WTF Man!sassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
  }, {
    index: 3,
    text: "WTF Man!"
  }, {
    index: 4,
    text: "WTF Man!"
  }, {
    index: 5,
    text: "WTF Man!"
  }]
}, {
  title: "烫烫烫烫烫烫烫烫烫烫烫烫",
  src: "http://7xjgb0.com1.z0.glb.clouddn.com/eleQQ20151029-3@2x.png",
  score: 4.5,
  sales: 3300,
  delivery: 1,
  price: 2,
  describe: [{
    index: 2,
    text: "WTF Man!"
  }, {
    index: 5,
    text: "WTF Man!"
  }]
}, {
  title: "IE便当",
  src: "http://7xjgb0.com1.z0.glb.clouddn.com/eleQQ20151029-4@2x.png",
  score: 0.5,
  sales: 89,
  delivery: 2,
  price: 3,
  describe: [{
    index: 0,
    text: "WTF Man!"
  }, {
    index: 1,
    text: "WTF Man!"
  }, {
    index: 4,
    text: "WTF Man!"
  }, {
    index: 6,
    text: "WTF Man!"
  }]
}, {
  title: "すき家「牛丼」",
  src: "http://7xjgb0.com1.z0.glb.clouddn.com/eleQQ20151029-5@2x.png",
  score: 4,
  sales: 410,
  delivery: 4,
  price: 5,
  describe: [{
    index: 4,
    text: "WTF Man!"
  }, {
    index: 5,
    text: "WTF Man!"
  }, {
    index: 6,
    text: "WTF Man!"
  }]
}, {
  title: "ニンテンドーDS",
  src: "http://7xjgb0.com1.z0.glb.clouddn.com/eleQQ20151029-8@2x.png",
  score: 4.5,
  sales: 300,
  delivery: 0,
  price: 5,
  describe: [{
    index: 0,
    text: "WTF Man!"
  }, {
    index: 3,
    text: "WTF Man!"
  }, {
    index: 4,
    text: "WTF Man!"
  }, {
    index: 5,
    text: "WTF Man!"
  }]
}, {
  title: "只想兼容现代浏览器",
  src: "http://7xjgb0.com1.z0.glb.clouddn.com/eleQQ20151029-6@2x.png",
  score: 2.5,
  sales: 1300,
  delivery: 0,
  price: 5,
  describe: [{
    index: 2,
    text: "WTF Man!"
  },{
    index: 5,
    text: "WTF Man!"
  }, {
    index: 6,
    text: "WTF Man!"
  }]
}, {
  title: "单向数据流_(:з」∠)_",
  src: "http://7xjgb0.com1.z0.glb.clouddn.com/eleQQ20151029-0@2x.png",
  score: 4.5,
  sales: 3300,
  delivery: 20,
  price: 5,
  describe: [{
    index: 0,
    text: "WTF Man!"
  }, {
    index: 3,
    text: "WTF Man!"
  }, {
    index: 4,
    text: "WTF Man!"
  }, {
    index: 5,
    text: "WTF Man!"
  }, {
    index: 6,
    text: "WTF Man!"
  }, {
    index: 1,
    text: "WTF Man!"
  }]
}, {
  title: "并卵・w・",
  src: "http://7xjgb0.com1.z0.glb.clouddn.com/eleQQ20151029-7@2x.png",
  score: 1.5,
  sales: 3300,
  delivery: 20,
  price: 5,
  describe: [{
    index: 0,
    text: "WTF Man!"
  }, {
    index: 3,
    text: "WTF Man!"
  }, {
    index: 4,
    text: "WTF Man!"
  }, {
    index: 5,
    text: "WTF Man!"
  }, {
    index: 6,
    text: "WTF Man!"
  }]
}, {
  title: "Angular差生",
  src: "http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicrin.jpg",
  score: 3,
  sales: 3300,
  delivery: 20,
  price: 5,
  describe: [{
    index: 0,
    text: "WTF Man!"
  }, {
    index: 3,
    text: "WTF Man!"
  }, {
    index: 4,
    text: "WTF Man!"
  }, {
    index: 5,
    text: "WTF Man!"
  }, {
    index: 6,
    text: "WTF Man!"
  }]
}];

function bulk(arr, times){
  if(times == 1)
    return arr;
  return arr.concat(bulk(arr, --times));
}

var bulklist = bulk(items, 6);

var Container = React.createClass({
  render: function(){
    var selector = this.props.selector;
    var itemList = bulklist.map(function(item, index){
      return <Item tag={index} data={item}/>
    });
    return (
      <div className="grid-container">{itemList}</div>
    );
  }
});

module.exports = Container;
