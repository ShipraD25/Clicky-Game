(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":"1","image":"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{"id":"2","image":"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{"id":"3","image":"https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"},{"id":"4","image":"https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=3qHaqQ56"},{"id":"5","image":"https://i.ytimg.com/vi/KR9kjuuxRO0/maxresdefault.jpg"},{"id":"6","image":"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"},{"id":"7","image":"https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{"id":"8","image":"https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{"id":"9","image":"https://coleandmarmalade.com/wp-content/uploads/2020/01/Canva-Cute-American-cat-Kitten-scaled.jpg"},{"id":"10","image":"https://valevets.com/wp-content/uploads/2014/08/kitten1.jpg"},{"id":"11","image":"http://justsomething.co/wp-content/uploads/2019/11/meet-chata-the-adorable-munchkin-kitten-that-s-going-viral-on-instagram-for-his-hilarious-sleeping-habits-11.jpg"},{"id":"12","image":"https://images.radio.com/kjkkfm/styles/delta__775x515/s3/Lion_Cub_775x515.jpg"}]')},,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),i=a.n(c),r=(a(14),a(3)),o=a(4),l=a(7),m=a(5),u=a(8);a(15),a(16);var p=function(e){return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{src:e.image,alt:e.id,onClick:function(){return e.handleBtnClick(e.id)}})))};a(17);var g=function(e){return s.a.createElement("nav",{className:"navbar navbar-expand-lg"},s.a.createElement("ul",{className:"nav navbar-nav"},s.a.createElement("li",null,s.a.createElement("a",{className:"navbar-brand",href:"/"},"Clicky-Game")),s.a.createElement("li",{id:"message"},s.a.createElement("strong",null,e.message)),s.a.createElement("li",null,s.a.createElement("strong",null,"Score: ",e.score," | Top Score: ",e.topscore))))};a(18);var d=function(e){return s.a.createElement("nav",{className:"title"},s.a.createElement("h3",null,"Click on an image to earn points, but don't click it more than once"))};a(19);var h=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("span",null,s.a.createElement("strong",null,"Clicky-Game 2020")))};a(20);var f=function(e){return s.a.createElement("div",{className:"wrapper"},e.children)},k=a(6),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={Images:k,currentscore:0,topscore:0,clickedcard:[],message:"Click an image to begin!"},a.handleBtnClick=function(e){if(-1===a.state.clickedcard.indexOf(e)){var t=a.state.clickedcard;t.push(e),a.setState({currentscore:a.state.currentscore+1,topscore:a.state.currentscore+1>a.state.topscore?a.state.currentscore+1:a.state.topscore,clickedcard:t,Images:a.shuffle(a.state.Images),message:"You guessed correctly!"})}else a.setState({currentscore:0,clickedcard:[],Images:a.shuffle(a.state.Images),message:"You lost! "})},a.shuffle=function(e){return e.sort((function(){return Math.random()-.5}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log(this.state.Images)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(g,{score:this.state.currentscore,topscore:this.state.topscore,message:this.state.message}),s.a.createElement(d,null),s.a.createElement(f,null,s.a.createElement("div",{className:"game-container"},this.state.Images.map((function(t){return s.a.createElement(p,{key:t.id,id:t.id,image:t.image,handleBtnClick:e.handleBtnClick})})))),s.a.createElement(h,null))}}]),t}(n.Component);i.a.render(s.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7558a814.chunk.js.map