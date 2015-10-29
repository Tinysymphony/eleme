require('./selector.scss');
var Container = require('../container/container.js');

//json
var selectItems = [
  {name: "全部商家", id: 0},
  {name: "品牌商家", id: 1},
  {name: "快餐类", id: 20, sub: [
    {name: "全部快餐类", id: 200},
    {name: "盖浇饭", id: 201},
    {name: "中式炒菜", id: 202},
    {name: "品牌快餐", id: 203},
    {name: "米粉面馆", id: 204},
    {name: "汉堡", id: 205},
    {name: "麻辣烫", id: 206},
    {name: "饺子馄饨", id: 207}
  ]},
  {name: "正餐类", id: 30, sub: [
    {name: "全部正餐类", id: 300},
    {name: "川湘菜", id: 301},
    {name: "日韩料理", id: 302},
    {name: "西餐", id: 303}
  ]},
  {name: "小吃零食", id: 40},
  {name: "甜品饮料", id: 50}
];

var checkboxItems = [
  {name: "新开商家", id: 0},
  {name: "免配送费", id: 1},
  {name: "饿配送", id: 2},
  {name: "可开发票", id: 3},
  {name: "在线支付", id: 4}
];

var singleSortItems = [
  {name: "默认排序", id: 0},
  {name: "销量高", id: 1},
  {name: "评价好", id: 2}
];

var multiSortItems = [
  {
    prefix: "",
    data: [
      {name: "其他排序", id: 0},
      {name: "距离最近", id: 1},
      {name: "配送金额", id: 2},
      {name: "起送金额", id: 3}
    ],
    postfix: ""
  },
  {
    prefix: "起送价格: ",
    data: [
      {name: "起送价格: 不限", id: 0},
      {name: "不限", id: 1},
      {name: "15元", id: 2},
      {name: "20元", id: 3},
      {name: "30元", id: 4},
      {name: "40元", id: 5}
    ],
    postfix: "以下"
  }
];

var TypeSelector = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  getInitialState: function(){
    return {subDisplay: 0};
  },
  clickItem: function(e){
    if(e.target.nodeName.toLowerCase()!="a"){
      return;
    }
    var target = $(e.target);
    var index = parseInt(target.attr("id"));
    var callback = this.props.callback;
    target.siblings().removeClass("selected sub-selected");
    if(index >= 10 && index < 100 && selectItems[index / 10].sub){
      this.setState({subDisplay: index / 10});
      target.addClass("sub-selected");
      callback({mainType: index / 10, subType: index * 10});
    } else if (index > 100){
      target.addClass("selected");
      callback({subType: index});
    } else {
      this.setState({subDisplay: 0});
      target.addClass("selected");
      callback({mainType: index, subType: 0});
    }
  },
  refocus: function(){
    $(".sub-selector").children().removeClass("selected");
    $(".sub-selector").children().eq(0).addClass("selected");
  },
  componentDidMount: function(){
    $("#0-type").addClass("selected");
  },
  render: function(){
    var self = this;
    var mainItems = selectItems.map(function(item){
      return <a id={item.id+"-type"}>{item.name}</a>;
    });
    var subItems;
    if(this.state.subDisplay){
      subItems = selectItems[this.state.subDisplay].sub.map(function(item, index){
        if(index == 0)
          return <a id={item.id+"-type"} className="selected">{item.name}</a>;
        else
          return <a id={item.id+"-type"}>{item.name}</a>;
      });
      this.refocus();
    } else {
      subItems = null;
    }
    return (
      <div className="type-selector" onClick={this.clickItem}>
        <div className="type-label">商家分类:</div>
        <div className="type-container">{mainItems}</div>
        <div className="sub-selector">{subItems}</div>
      </div>
    );
  }
});

var MultiSort = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  getInitialState: function(){
    return {index: 0};
  },
  changeState: function(e){
    if(e.target.nodeName.toLowerCase()!="a")
      return;
    var tag = this.props.tag;
    var target = $(e.target);
    var sorted = "sorted" + tag;
    var index = parseInt(target.attr("id"));
    $("." + sorted).each(function(){
      if($(this).hasClass("multi-top")) return;
      $(this).removeClass(sorted);
    });
    this.setState({index: index});
    if(tag == 1){
      this.props.callback({rankSort: index + 3});
    } else if(tag == 2) {
      this.props.callback({priceSort: index});
    }
    $(".multi-top" + tag).addClass(sorted);
    target.addClass(sorted);
  },
  render: function(){
    var tag = this.props.tag;
    var list = this.props.items;
    var current;
    if(this.state.index){
      var item = list.data[this.state.index];
      current = <span className={"multi-top" + tag +" sorted"+tag}>{list.prefix + item.name}&nbsp;</span>;
    } else {
      current = <span>{list.data[this.state.index].name}&nbsp;</span>;
    }
    var listItems = list.data.map(function(item, index){
      if(!index) return;
      var postfix = (index == 1 && tag == 2)? '' : list.postfix;
      return <a className="multi-drop-down" id={item.id+"-multi-item"}>{item.name + postfix}</a>;
    });
    return (
      <div className="multi-sort">
        <a className="sort-item multi-item">
          {current}
          <i className="fa fa-angle-down"></i>
          <i className="fa fa-angle-up"></i>
        </a>
        <div className="multi-list" onClick={this.changeState}>{listItems}</div>
      </div>
    );
  }
});

var SortSelector = React.createClass({
  componentDidMount: function(){
    $("#0-sort").addClass("sorted1");
  },
  changeState: function(e){
    if(e.target.nodeName.toLowerCase()!="a")
      return;
    var target = $(e.target);
    var index = parseInt(target.attr("id"));
    $(".sorted1").each(function(){
      $(this).removeClass("sorted1");
    });
    target.addClass("sorted1");
    this.props.callback({rankSort: index});
  },
  render: function(){
    var singleItems = singleSortItems.map(function(item){
      return <a className="sort-item single-item" id={item.id+"-sort"}>{item.name}</a>;
    });
    var singleTag = 1;
    var multiTag = 2;
    return (
      <div className="sort-selector">
        <div className="single-sort" onClick={this.changeState}>{singleItems}</div>
        <MultiSort items={multiSortItems[singleTag - 1]} callback={this.props.callback} tag={singleTag}/>
        <MultiSort items={multiSortItems[multiTag - 1]} callback={this.props.callback} tag={multiTag}/>
      </div>
    );
  }
});

var RadioSelector = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  getInitialState: function(){
    return {count: 0};
  },
  handleClick: function(e){
    var target = $(e.target);
    var num = parseInt(target.attr("id"));
    var tmp = this.state.count;
    if(target.is(":checked")){
      tmp += Math.pow(10, num);
    } else {
      tmp -= Math.pow(10, num);
    }
    this.props.callback({code: tmp});
    this.setState({count: tmp});
  },
  render: function(){
    var self = this;
    var checkbox = checkboxItems.map(function(item){
      return <label><input type="checkbox" id={item.id+"-checkbox"} className="radio-item" onChange={self.handleClick}/>{item.name}</label>;
    });
    return (
      <div className="radio-selector">
        <div className="slash"></div>
        <div className="radios">{checkbox}</div>
      </div>
    );
  }
});

var Selector = React.createClass({
  getInitialState: function(){
    return {
      mainType: 0,
      subType: 0,
      rankSort: 0,
      priceSort: 0,
      code: 0
    };
  },
  changeState: function(o){
    this.setState(o);
  },
  componentDidMount: function(){
    var tag = $("#active-tag");
    var active = $("#active-selector");
    var list = $(".multi-list");
    var className = "acitve-mode-fix";
    $(window).bind("scroll", function(){
      if($("body").scrollTop() > tag.offset().top){
        active.addClass(className);
        list.each(function(){
          $(this).css({"width": $(this).parent().width()});
        });
      } else {
        active.removeClass(className);
      }
    });
  },
  componentWillUnmount: function(){
    $(window).unbind("scroll");
  },
  render: function(){
    console.log(this.state);
    if(this.props.page == 1){
      return (
        <div className="foodSelector">
          <div className="selectors">
            <TypeSelector callback={this.changeState}/>
            <div id="active-tag"></div>
            <div id="active-selector">
              <div id="active-selector-container">
                <SortSelector callback={this.changeState}/>
                <RadioSelector callback={this.changeState}/>
              </div>
            </div>
          </div>
          <Container selector={this.state}/>
        </div>
      );
    } else {
      return (
        <div className="recent-store"></div>
      );
    }
  }
});

module.exports = Selector;
