(window.webpackJsonplcotodo=window.webpackJsonplcotodo||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/ap.6d0a642c.png"},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(3),o=n.n(c),l=(n(15),n(1)),r=n(4),s=n(5),u=n(8),m=n(6),d=n(9),h=n(7),p=n.n(h),b=(n(16),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={newItem:"",list:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"addItem",value:function(e){if(""!==e){var t={id:Date.now(),value:e,isDone:!1},n=Object(l.a)(this.state.list);n.push(t),this.setState({list:n,newItem:""})}}},{key:"deleteItem",value:function(e){var t=Object(l.a)(this.state.list).filter(function(t){return t.id!==e});this.setState({list:t})}},{key:"updateInput",value:function(e){this.setState({newItem:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("img",{src:p.a,width:"100",height:"100",className:"logo"}),i.a.createElement("h1",{className:"app-title"},"AP TODO App"),i.a.createElement("div",{className:"container"},"Add an Item :)",i.a.createElement("br",null),i.a.createElement("input",{type:"text",className:"input-text",placeholder:"Write a Todo",required:!0,value:this.state.newItem,onChange:function(t){return e.updateInput(t.target.value)}}),i.a.createElement("button",{className:"add-btn",onClick:function(){return e.addItem(e.state.newItem)},disabled:!this.state.newItem.length},"Add TODO"),i.a.createElement("div",{className:"list"},i.a.createElement("ul",null,this.state.list.map(function(t){return i.a.createElement("li",{key:t.id},i.a.createElement("input",{type:"checkbox",name:"idDone",checked:t.isDone,onChange:function(){}}),t.value,i.a.createElement("button",{className:"btn",onClick:function(){return e.deleteItem(t.id)}},"Delete"))}),i.a.createElement("li",null,i.a.createElement("input",{type:"checkbox",name:"",id:""}),"Record Youtube Videos",i.a.createElement("button",{className:"btn"},"Delete"))))))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.e4a1a1d6.chunk.js.map