require('./footer.scss');

var list = [
  ["用户帮助", "服务中心", "常见问题", "在线客服"],
  ["商务合作", "我要开店", "加盟指南", "市场合作"],
  ["关于我们", "饱了么介绍", "加入我们", "联系我们", "服务协议"]
]

var Footer =  React.createClass({
  render: function(){
    var makelist = function(i) {
      return i.map(function(item){
        return <li>{item}</li>;
      });
    };
    var lists = list.map(function(item){
      return <ul className="tinyList">{makelist(item)}</ul>
    });
    return (
      <div className="reFooter">
        <div className="list-container">
          {lists}
          <div className="footerSlash"></div>
          <div className="footerContact">
            <p>24小时客服热线：110</p>
            <p>意见反馈：zjutiny@gmail.com</p>
            <p>关注我们：<i className="fa fa-weixin"></i><i className="fa fa-weibo"></i><i className="fa fa-twitter"></i></p>
          </div>
          <div className="footerSlash"></div>
          <img src="http://static11.elemecdn.com/eleme/desktop/media/img/appqc.bce409.png" />
          <div className="downloading">
            <h3>下载手机版</h3>
            <p>扫一扫，手机订餐更方便</p>
          </div>
          <div className="copyright-container">Copyright (c) 2015 Copyright Holder All Rights Reserved.</div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
