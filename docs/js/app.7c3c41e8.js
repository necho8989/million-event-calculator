(function(e){function t(t){for(var n,c,i=t[0],l=t[1],u=t[2],d=0,b=[];d<i.length;d++)c=i[d],a[c]&&b.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("744f"),r("6c7b"),r("7514"),r("20d6"),r("1c4c"),r("6762"),r("cadf"),r("e804"),r("55dd"),r("d04f"),r("c8ce"),r("217b"),r("7f7f"),r("f400"),r("7f25"),r("536b"),r("d9ab"),r("f9ab"),r("32d7"),r("25c9"),r("9f3c"),r("042e"),r("c7c6"),r("f4ff"),r("049f"),r("7872"),r("a69f"),r("0b21"),r("6c1a"),r("c7c62"),r("84b4"),r("c5f6"),r("2e37"),r("fca0"),r("7cdf"),r("ee1d"),r("b1b1"),r("87f3"),r("9278"),r("5df2"),r("04ff"),r("f751"),r("4504"),r("fee7"),r("ffc1"),r("0d6d"),r("9986"),r("8e6e"),r("25db"),r("e4f7"),r("b9a1"),r("64d5"),r("9aea"),r("db97"),r("66c8"),r("57f0"),r("165b"),r("456d"),r("cf6a"),r("fd24"),r("8615"),r("551c"),r("097d"),r("df1b"),r("2397"),r("88ca"),r("ba16"),r("d185"),r("ebde"),r("2d34"),r("f6b3"),r("2251"),r("c698"),r("a19f"),r("9253"),r("9275"),r("3b2b"),r("3846"),r("4917"),r("a481"),r("28a5"),r("386d"),r("6b54"),r("4f7f"),r("8a81"),r("ac4d"),r("8449"),r("9c86"),r("fa83"),r("48c0"),r("a032"),r("aef6"),r("d263"),r("6c37"),r("9ec8"),r("5695"),r("2fdb"),r("d0b0"),r("5df3"),r("b54a"),r("f576"),r("ed50"),r("788d"),r("14b9"),r("f386"),r("f559"),r("1448"),r("673e"),r("242a"),r("c66f"),r("b05c"),r("34ef"),r("6aa2"),r("15ac"),r("af56"),r("b6e4"),r("9c29"),r("63d9"),r("4dda"),r("10ad"),r("c02b"),r("4795"),r("130f"),r("ac6a"),r("96cf"),r("0cdd");var n=r("2b0e"),a=r("9f7b");r("ab8b"),r("2dd8");n["default"].use(a["a"]);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{type:"dark",variant:"info"}},[r("b-navbar-brand",[e._v("PSTイベ計算機")])],1),r("Calculator")],1)},c=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"calculator"}},[r("b-container",[r("b-row",[r("b-col"),r("b-col",{attrs:{cols:"10"}},[r("b-card",{attrs:{header:"前提条件"}},[r("b-card-text",[e._v("前半は通常楽曲のみ、後半はイベ楽曲のみを消化する想定です")]),r("b-card-text",[e._v("通常楽曲はお仕事でチケ300貯め⇒通常楽曲MM1回プレイというフローのみの想定です")]),r("b-card-text",[e._v("イベ楽曲は後半戦のMMのみで走る想定です")]),r("b-card-text",[e._v("1楽曲プレイにかかる想定時間は一律3分で計算しています")]),r("b-card-text",[e._v("通常楽曲で獲得するイベントPtは除外しているため、必要な石数やかかる時間は結果よりも少なくなります")]),r("b-card-text",[e._v("1時間で作ったので、細かい条件とか考えてません。あくまで目標値としての使用をおすすめします")])],1),r("b-form",[r("b-form-group",{attrs:{id:"group-eventPointGoal",label:"目標ポイント","label-for":"input-eventPointGoal"}},[r("b-form-input",{attrs:{id:"input-eventPointGoal",type:"number"},model:{value:e.eventPointGoal,callback:function(t){e.eventPointGoal=t},expression:"eventPointGoal"}})],1),r("b-form-group",{attrs:{id:"group-maxStamina",label:"MAXスタミナ","label-for":"input-maxStamina"}},[r("b-form-input",{attrs:{id:"input-maxStamina",type:"number"},model:{value:e.maxStamina,callback:function(t){e.maxStamina=t},expression:"maxStamina"}})],1)],1),r("b-card",{staticClass:"mb-2",attrs:{header:"計算結果"}},[r("b-card-text",[r("b-container",[r("b-row",[r("b-col",[e._v("必要イベアイテム数：")]),r("b-col",{attrs:{cols:"6"}},[e._v(e._s(e.requiredEventItem))])],1),r("b-row",[r("b-col",[e._v("通常楽曲1回プレイに必要な石：")]),r("b-col",{attrs:{cols:"6"}},[e._v(e._s(e.requiredJwelPerNormalSong))])],1),r("b-row",[r("b-col",[e._v("通常楽曲必要プレイ数：")]),r("b-col",{attrs:{cols:"6"}},[e._v(e._s(e.requiredPlayingCountNormalSong))])],1),r("b-row",[r("b-col",[e._v("イベント楽曲必要プレイ数(Boost)：")]),r("b-col",{attrs:{cols:"6"}},[e._v(e._s(e.requiredPlayingCountEventSong))])],1),r("b-row",[r("b-col",[e._v("必要な石数：")]),r("b-col",{attrs:{cols:"6"}},[e._v(e._s(e.requiredJwel))])],1),r("b-row",[r("b-col",[e._v("かかる時間(通常)(hour)：")]),r("b-col",{attrs:{cols:"6"}},[e._v(e._s(e.requiredTimeToPlayNormalSong)+"時間")])],1),r("b-row",[r("b-col",[e._v("かかる時間(イベ)(hour)：")]),r("b-col",{attrs:{cols:"6"}},[e._v(e._s(e.requiredTimeToPlayEventSong)+"時間")])],1)],1)],1)],1)],1),r("b-col")],1)],1)],1)},l=[],u={data:function(){return{eventPointGoal:0,maxStamina:0,eventItemPerNormalSong:595,eventPointPerEventItem:2.983}},computed:{requiredEventItem:function(){return Math.ceil(this.eventPointGoal/this.eventPointPerEventItem)},requiredJwelPerNormalSong:function(){return Math.ceil(300/this.maxStamina*50)},requiredPlayingCountNormalSong:function(){return Math.ceil(this.requiredEventItem/this.eventItemPerNormalSong)},requiredPlayingCountEventSong:function(){return Math.ceil(this.requiredEventItem/720)},requiredJwel:function(){return Math.ceil(this.requiredJwelPerNormalSong*this.requiredPlayingCountNormalSong)},requiredTimeToPlayNormalSong:function(){return Math.ceil(3*this.requiredPlayingCountNormalSong/60*10)/10},requiredTimeToPlayEventSong:function(){return Math.ceil(3*this.requiredPlayingCountEventSong/60*10)/10}}},f=u,d=(r("9041"),r("2877")),b=Object(d["a"])(f,i,l,!1,null,null,null),s=b.exports,v={name:"app",components:{Calculator:s}},m=v,p=(r("034f"),Object(d["a"])(m,o,c,!1,null,null,null)),g=p.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(g)}}).$mount("#app")},"64a9":function(e,t,r){},"6ae3":function(e,t,r){},9041:function(e,t,r){"use strict";var n=r("6ae3"),a=r.n(n);a.a}});
//# sourceMappingURL=app.7c3c41e8.js.map