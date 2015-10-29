require('./header.scss');

var Header = React.createClass({
  render: function() {
    return (
      <div className="reHeader">
        <div className="header-container">
          <a id="logo" href="http://www.wytiny.me"><img src="http://7xjgb0.com1.z0.glb.clouddn.com/elebaoleme.png" /></a>
          <nav className="main-nav">
            <a id="top" href="#" className="focus">首页</a>
            <a id="brand" href="#">品牌商家</a>
            <a id="order" href="#">我的订单</a>
          </nav>
          <nav className="sub-nav">
            <a id="score-store" className="a-light" href="#"><i className="fa fa-shopping-cart">&nbsp;</i>积分商城</a>
            <a id="service-center" className="a-light" href="#"><i className="fa fa-shopping-cart">&nbsp;</i>服务中心</a>
            <a id="mobile-app" className="a-light" href="#"><i className="fa fa-mobile">&nbsp;</i>手机应用</a>
          </nav>
          <a id="login-signup" href="#"><i className="fa fa-user">&nbsp;</i>登陆 / 注册</a>
        </div>
      </div>
    );
  }
});

module.exports = Header;
