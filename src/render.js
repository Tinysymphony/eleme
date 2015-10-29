//include modules
var Header = require('./components/header/header.js');
var AdBar = require('./components/adBar/adBar.js');
var Mainlist = require('./components/mainList/mainlist.js');
var Footer = require('./components/footer/footer.js');
var RightBar = require('./components/rightBar/rightBar.js');
var Search = require('./components/search/search.js');
//get data

//render doms
ReactDOM.render(<Header />, document.getElementById("header"));

ReactDOM.render(<Search location={"浙江大学玉泉校区(北门)"}/>, document.getElementById("afterHeader"));

ReactDOM.render(<AdBar />, document.getElementById("scrollBar"));

ReactDOM.render(<Mainlist />, document.getElementById("main"));

ReactDOM.render(<Footer />, document.getElementById("footer"));

ReactDOM.render(<RightBar />, document.getElementById("rightBar"));
