webpackJsonp([5],{"8s9e":function(t,a,e){var r=e("aDdM");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("70b9d790",r,!0,{})},N5DN:function(t,a,e){"use strict";function r(t){e("8s9e")}var l=e("OAk9"),n=(e("oAV5"),{props:{battleData:{type:Object}},data:function(){return{app:null,canClose:!1}},mounted:function(){this.drawBattle()},methods:{seeMyInfo:function(t,a){},closeBattle:function(){this.canClose&&this.$emit("gameover")},MergeArray:function(t,a){for(var e=new Array,r=0;r<t.length;r++)e.push(t[r]);for(var r=0;r<a.length;r++){for(var l=!0,n=0;n<t.length;n++)if(a[r]==t[n]){l=!1;break}l&&e.push(a[r])}return e},drawBattle:function(){function t(t){var a=new l.Text(v.battleData.MyName,{fontSize:36,fill:16777215,align:"center"}),e=new l.Sprite(t.myAvatar.texture),r="平局";1===v.battleData.win?r="胜利":0===v.battleData.win&&(r="战败");var n=new l.Text(r,{fontSize:48,fill:16777215,align:"center"}),i=v.battleData.score+v.battleData.getScore;i<0&&(i=0);var s=new l.Text("我的竞技点："+i+"（"+(v.battleData.getScore>=0?"+"+v.battleData.getScore:v.battleData.getScore)+"）",{fontSize:36,fill:16777215,align:"center"}),o=new l.Text("获得经验值："+v.battleData.getExp,{fontSize:36,fill:16777215,align:"center"}),d=new l.Text("点击画面可立即关闭战斗窗口！",{fontSize:22,fill:16777215,align:"center"}),c=new l.Text(v.battleData.battleOverChance?"您已超过今天的最大胜利次数，将不会获得竞技点与经验值。":"",{fontSize:22,fill:16777215,align:"center"});s.anchor.set(.5),o.anchor.set(.5),a.anchor.set(.5),e.anchor.set(.5),n.anchor.set(.5),c.anchor.set(.5),d.anchor.set(.5),e.position.set(360,425),a.position.set(360,516),s.position.set(360,582),o.position.set(360,648),n.position.set(360,300),c.position.set(360,766),d.position.set(360,726),S.addChild(s),S.addChild(o),S.addChild(a),S.addChild(e),S.addChild(n),S.addChild(c),S.addChild(d)}function a(t){N.bg=x.battle_bg,N.myNickname=new l.Text(v.battleData.MyName,{fontSize:24,fill:16777215,align:"left"}),N.myAvatarSprite=new l.Sprite(t.myAvatar.texture),N.mySAN=new l.Text("SAN:"+v.battleData.MyADSHP[3],{fontSize:36,fill:16777215,align:"left"}),N.myBgSanB=new l.Graphics,N.myBgSanB.beginFill(8979974),N.myBgSanB.drawRect(136,1233,564,27),N.myBgSanB.endFill(),N.myBgSanA=new l.Graphics,N.myBgSanA.beginFill(16703808),N.myBgSanA.drawRect(136,1233,564,27),N.myBgSanA.endFill(),N.emAvatarSprite=new l.Sprite(t.emAvatar.texture),N.emNickname=new l.Text(v.battleData.EmName,{fontSize:24,fill:16777215,align:"left"}),N.emSAN=new l.Text("SAN:"+v.battleData.EmADSHP[3],{fontSize:36,fill:16777215,align:"left"}),N.emBgSanB=new l.Graphics,N.emBgSanB.beginFill(8979974),N.emBgSanB.drawRect(136,94,564,27),N.emBgSanB.endFill(),N.emBgSanA=new l.Graphics,N.emBgSanA.beginFill(16703808),N.emBgSanA.drawRect(136,94,564,27),N.emBgSanA.endFill(),N.myAvatarSprite.position.set(20,1160),N.myNickname.position.set(136,1160),N.mySAN.position.set(136,1188),N.emAvatarSprite.position.set(20,20),N.emNickname.position.set(136,20),N.emSAN.position.set(136,48),w.addChild(N.bg),N.battleMyInfo.addChild(N.myAvatarSprite),N.battleMyInfo.addChild(N.myNickname),N.battleMyInfo.addChild(N.mySAN),N.battleMyInfo.addChild(N.myBgSanB),N.battleMyInfo.addChild(N.myBgSanA),N.battleEmInfo.addChild(N.emAvatarSprite),N.battleEmInfo.addChild(N.emNickname),N.battleEmInfo.addChild(N.emSAN),N.battleEmInfo.addChild(N.emBgSanB),N.battleEmInfo.addChild(N.emBgSanA);for(var a=0;a<v.battleData.MyBattleCard.length;a++)x.mycard[v.battleData.MyBattleCard[a]].width=300,x.mycard[v.battleData.MyBattleCard[a]].height=422,x.mycard[v.battleData.MyBattleCard[a]].anchor.set(.5),x.mycard[v.battleData.MyBattleCard[a]].position.set(-180,922);for(var e=0;e<v.battleData.EmBattleCard.length;e++)x.emcard[v.battleData.EmBattleCard[e]].width=300,x.emcard[v.battleData.EmBattleCard[e]].height=422,x.emcard[v.battleData.EmBattleCard[e]].anchor.set(.5),x.emcard[v.battleData.EmBattleCard[e]].position.set(900,360);w.addChild(x.mycard[v.battleData.MyBattleCard[0]]),w.addChild(x.emcard[v.battleData.EmBattleCard[0]]),w.addChild(N.battleMyInfo),w.addChild(N.battleEmInfo),w.addChild(x.emHPText),w.addChild(x.myHPText)}function e(){$.gameOver?++_>30&&(g=!0,_=0):$.turnEndFlag<=1?$.cardEnter?d():o():$.turnEndFlag>1&&!$.gameOver&&($.turn++,$.turn>19&&($.gameOver=!0,e()),$.turnEndFlag=0,$.turnStep.attacked=!1,$.cardEnter=!0)}function r(t,a,e,r){var l=t[a]+r;if(r<0){if(l<=e)return l=e,t[a]=l,!0;t[a]=l}else{if(l>=e)return l=e,t[a]=l,!0;t[a]=l}return!1}function n(t,a,e,r,n,i,s){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:.4;x.animation[s][t]=new l.AnimatedSprite(D[t].animations[t]),x.animation[s][t].width=r,x.animation[s][t].height=n,x.animation[s][t].x=a,x.animation[s][t].y=e,x.animation[s][t].anchor.set(.5),x.animation[s][t].animationSpeed=o,x.animation[s][t].loop=!1,x.animation[s][t].onComplete=function(){var a=t;x.animation[s][a].alpha=0,x.animation[s][a].destroy()},w.addChild(x.animation[s][t]),x.animation[s][t].zIndex=i,x.animation[s][t].alpha=1,x.animation[s][t].play()}function i(){var t=k[$.turn],a=B[$.turn];if(1==$.battleUser){n("0",360,360,320,320,100,"em");var e=v.battleData.MyBattleData[$.turn][0],r=v.battleData.MyBattleData[$.turn][2],l=v.battleData.MyBattleData[$.turn][4],i=v.battleData.MyBattleData[$.turn][9],s=v.battleData.MyBattleData[$.turn][10];if(r||l){var o=l-r,d=16731212;if(o>0&&(d=1353588),0!==o){var c="";o>0&&(c="+"),x.myHPText.style={fontSize:36,fill:d,align:"right"},x.myHPText.text=c+o,x.myHPText.alpha=1}}x.emHPText.style={fontSize:36,fill:16731212,align:"right"},x.emHPText.text="-"+e,x.emHPText.alpha=1,i&&(1===t?n("4",360,360,320,320,100,"em",.65):7===t&&n("4",360,360,320,320,100,"em",.65)),s&&(3===a?n("2",360,360,320,320,99,"em"):7===a?n("2",360,360,320,320,99,"em"):6===a&&n("5",360,360,320,320,99,"em",.65)),r>0&&n("3",70,1210,140,140,99,"my",.3),l>0&&n("6",70,1210,140,140,100,"my",.3)}else{n("0",360,931,320,320,100,"my");var m=v.battleData.EmBattleData[$.turn][0],h=v.battleData.EmBattleData[$.turn][2],u=v.battleData.EmBattleData[$.turn][4],p=v.battleData.EmBattleData[$.turn][9],g=v.battleData.EmBattleData[$.turn][10];if(h||u){var _=u-h,b=16731212;if(_>0&&(b=1353588),0!==_){var f="";_>0&&(f="+"),x.emHPText.style={fontSize:36,fill:b,align:"right"},x.emHPText.text=f+_,x.emHPText.alpha=1}}x.myHPText.style={fontSize:36,fill:16731212,align:"right"},x.myHPText.text="-"+m,x.myHPText.alpha=1,p&&(1===a?n("4",360,931,320,320,100,"my",.65,.3):7===a&&n("4",360,931,320,320,100,"my",.65)),g&&(3===t?n("2",360,931,320,320,99,"my"):7===t?n("2",360,931,320,320,99,"my"):6===t&&n("5",360,931,320,320,99,"my",.65)),h>0&&n("3",70,70,140,140,99,"em",.3),u>0&&n("6",70,70,140,140,100,"em")}}function s(){i(),1==$.battleUser?(N.mySAN.text="SAN:"+v.battleData.MyBattleData[$.turn][1],N.emSAN.text="SAN:"+v.battleData.MyBattleData[$.turn][3],z=v.battleData.MyBattleData[$.turn][1]/v.battleData.MyADSHP[3]*564,z>564&&(z=564),H=v.battleData.MyBattleData[$.turn][3]/v.battleData.EmADSHP[3]*564,H>564&&(H=564),N.myBgSanA.clear(),N.myBgSanA.beginFill(16703808),N.myBgSanA.drawRect(136,1233,z,27),N.myBgSanA.endFill(),N.emBgSanA.clear(),N.emBgSanA.beginFill(16703808),N.emBgSanA.drawRect(136,94,H,27),N.emBgSanA.endFill()):(N.mySAN.text="SAN:"+v.battleData.EmBattleData[$.turn][3],N.emSAN.text="SAN:"+v.battleData.EmBattleData[$.turn][1],z=v.battleData.EmBattleData[$.turn][3]/v.battleData.MyADSHP[3]*564,z>564&&(z=564),H=v.battleData.EmBattleData[$.turn][1]/v.battleData.EmADSHP[3]*564,H>564&&(H=564),N.myBgSanA.clear(),N.myBgSanA.beginFill(16703808),N.myBgSanA.drawRect(136,1233,z,27),N.myBgSanA.endFill(),N.emBgSanA.clear(),N.emBgSanA.beginFill(16703808),N.emBgSanA.drawRect(136,94,H,27),N.emBgSanA.endFill())}function o(){var t=x.mycard[v.battleData.MyBattleCard[$.turn]],a=x.emcard[v.battleData.EmBattleCard[$.turn]];if(1==$.battleUser)if(null===$.indexCache&&($.indexCache=t.zIndex,t.zIndex=99),$.turnStep.attacked){var e=r(t,"y",922,50);if(e){if(t.zIndex=$.indexCache,$.indexCache=null,0==z||0==H)return $.gameOver=!0,!1;$.turnEndFlag++,1==$.battleUser?$.battleUser=0:$.battleUser=1,$.turnStep.attacked=!1}}else{var l=r(t,"y",360,-50);l&&($.turnStep.attacked=l,s())}else if(null===$.indexCache&&($.indexCache=a.zIndex,a.zIndex=99),$.turnStep.attacked){var n=r(a,"y",360,-50);if(n&&!$.gameOver){if(a.zIndex=$.indexCache,$.indexCache=null,0==z||0==H)return $.gameOver=!0,!1;$.turnEndFlag++,1==$.battleUser?$.battleUser=0:$.battleUser=1,$.turnStep.attacked=!1}}else{var i=r(a,"y",922,50);i&&($.turnStep.attacked=i,s())}}function d(){var t=x.mycard[v.battleData.MyBattleCard[$.turn]],a=x.emcard[v.battleData.EmBattleCard[$.turn]];t.zIndex=$.turn,a.zIndex=$.turn,360!=t.x?(t.x+=20,a.x-=20):++_>30&&(_=0,$.turn>=2&&(x.mycard[v.battleData.MyBattleCard[$.turn-2]].destroy(),x.emcard[v.battleData.EmBattleCard[$.turn-2]].destroy()),($.turn<v.battleData.MyBattleCard.length-1||$.turn<v.battleData.EmBattleCard.length-1)&&(w.addChild(x.mycard[v.battleData.MyBattleCard[$.turn+1]]),w.addChild(x.emcard[v.battleData.EmBattleCard[$.turn+1]])),$.cardEnter=!1)}function c(t,a){t.visible&&!a.visible?(t.alpha-=.05,t.alpha<=0&&(a.visible=!0)):a.visible&&(a.alpha<1?a.alpha+=.05:(t.visible=!1,t.destroy(),g=!1))}function m(t){var a=new l.Text("VS",{fontFamily:"Arial",fontSize:56,fill:16777215,align:"center"}),e=new l.Sprite(t.myAvatar.texture),r=new l.Text(v.battleData.MyName,{fontFamily:"Arial",fontSize:26,fill:16777215,align:"center"}),n=new l.Sprite(t.emAvatar.texture),i=new l.Text(v.battleData.EmName,{fontFamily:"Arial",fontSize:26,fill:16777215,align:"center"});e.anchor.set(.5),r.anchor.set(.5),r.position.set(0,80),j.addChild(e),j.addChild(r),j.alpha=0,j.position.set(0,810),C.addChild(j),a.anchor.set(.5),a.position.set(360,640),C.addChild(a),n.anchor.set(.5),i.anchor.set(.5),i.position.set(0,80),O.addChild(n),O.addChild(i),O.alpha=0,O.position.set(720,440),C.addChild(O)}function h(){if(_>=30&&(g=!0,_=0),j.alpha<1&&(j.alpha+=.1,O.alpha+=.1),360===O.position.x||360===j.position.x)return _+=1,!1;O.position.x-=10,j.position.x+=10}var u=this,p=!1,v=this,g=!1,_=0,b=new l.Loader,f=new l.Application({width:720,height:1280,backgroundColor:0,resolution:window.devicePixelRatio||1});this.app=f,document.getElementById("battleView").appendChild(f.view);var y=new l.Container,C=new l.Container,w=new l.Container;w.sortableChildren=!0;var S=new l.Container;f.stage.addChild(y),f.stage.addChild(C),f.stage.addChild(w),f.stage.addChild(S),C.visible=!1,w.visible=!1,S.visible=!1,C.alpha=0,w.alpha=0,S.alpha=0;var x={},D={},I=new l.Text("少女祈祷中...",{fontFamily:"Arial",fontSize:36,fill:16777215,align:"center"});I.anchor.set(.5),I.position.set(360,640),y.addChild(I);for(var k=[],B=[],T=0;T<this.battleData.MyBattleCard.length;T++){var A=this.battleData.cardOtherData[this.battleData.MyBattleCard[T]].rightType;k.push(A)}for(var M=0;M<this.battleData.EmBattleCard.length;M++){var F=this.battleData.cardOtherData[this.battleData.EmBattleCard[M]].rightType;B.push(F)}for(var P=this.MergeArray(this.battleData.MyBattleCard,this.battleData.EmBattleCard),E=0;E<P.length;E++)b.add(P[E],"/card/"+this.battleData.cardOtherData[P[E]].packageId+"/"+P[E]+".jpg");b.add("myAvatar","/api/gravatar.png?md5="+this.battleData.MyMD5),this.battleData.EmMD5?b.add("emAvatar","/api/gravatar.png?md5="+this.battleData.EmMD5):b.add("emAvatar","/static/robotTx/"+Number(this.battleData.EmName.replace(/[^0-9]/gi,""))+".jpg"),b.add("battle_bg","/static/img/battle_bg.jpg"),b.add("/static/otherImg/animation/0.json"),b.add("/static/otherImg/animation/2.json"),b.add("/static/otherImg/animation/3.json"),b.add("/static/otherImg/animation/4.json"),b.add("/static/otherImg/animation/5.json"),b.add("/static/otherImg/animation/6.json"),b.load(function(e,r){var n=u.battleData.MyBattleCard,i=u.battleData.EmBattleCard;x.animation={},x.animation.em={},x.animation.my={},x.myHPText=new l.Text("0",{fontSize:36,fill:16777215,align:"right"}),x.emHPText=new l.Text("0",{fontSize:36,fill:16777215,align:"right"}),x.emHPText.anchor.set(1,0),x.myHPText.anchor.set(1,0),x.emHPText.alpha=0,x.myHPText.alpha=0,x.emHPText.position.set(700,48),x.myHPText.position.set(700,1188),x.mycard={},x.emcard={},D[0]=e.resources["/static/otherImg/animation/0.json"].spritesheet,D[2]=e.resources["/static/otherImg/animation/2.json"].spritesheet,D[3]=e.resources["/static/otherImg/animation/3.json"].spritesheet,D[4]=e.resources["/static/otherImg/animation/4.json"].spritesheet,D[5]=e.resources["/static/otherImg/animation/5.json"].spritesheet,D[6]=e.resources["/static/otherImg/animation/6.json"].spritesheet;for(var s=0;s<n.length;s++)x.mycard[n[s]]=new l.Sprite(r[n[s]].texture);for(var o=0;o<i.length;o++)x.emcard[i[o]]=new l.Sprite(r[i[o]].texture);x.battle_bg=new l.Sprite(r.battle_bg.texture),a(r),m(r),t(r),g=!0});var N={bg:null,myAvatarSprite:null,myNickname:null,mySAN:null,myBgSanB:null,myBgSanA:null,emAvatarSprite:null,emNickname:null,emSAN:null,emBgSanB:null,emBgSanA:null,battleMyInfo:new l.Container,battleEmInfo:new l.Container},$={turn:0,battleUser:v.battleData.speed,turnEndFlag:0,cardEnter:!0,gameOver:!1,turnStep:{attacked:!1},indexCache:null},z=1,H=1,j=new l.Container,O=new l.Container;f.ticker.add(function(t){y.visible?I.alpha>=1?(I.alpha-=.01*t,p=!1):I.alpha<=.5?(I.alpha+=.01*t,p=!0):p?I.alpha+=.01*t:I.alpha-=.01*t:C.visible?h():w.visible?e():S.visible&&(u.canClose=!0,++_>180&&(u.canClose=!1,u.$emit("gameover"),_=0)),g&&(y.visible?c(y,C):C.visible?c(C,w):w.visible&&c(w,S))})}},beforeDestroy:function(){this.app.destroy(!0)}}),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wm_battle_body",attrs:{id:"battleView"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.canClose,expression:"canClose"}],staticClass:"wm_battle_box",on:{click:function(a){return t.closeBattle()}}})])},s=[],o={render:i,staticRenderFns:s},d=o,c=e("VU/8"),m=r,h=c(n,d,!1,m,null,null);a.a=h.exports},NaF5:function(t,a,e){var r=e("g9Y6");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("ec5a8768",r,!0,{})},TmV0:function(t,a,e){e("fZOM"),t.exports=e("FeBl").Object.values},aDdM:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n.wm_battle_body {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9998;\n  background: #000;\n}\n.wm_battle_body canvas {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n  margin: 0 auto;\n}\n.wm_battle_box {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 2;\n}\n",""])},fZOM:function(t,a,e){var r=e("kM2E"),l=e("mbce")(!1);r(r.S,"Object",{values:function(t){return l(t)}})},g9Y6:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n.wm_levle_card_table[data-v-5ed5b349] {\n  width: 100%;\n}\n.wm_levle_card_table td[data-v-5ed5b349] {\n  width: 50%;\n  padding: 0px;\n}\n.wm_level_card_ico_img[data-v-5ed5b349] {\n  height: 100%;\n  width: auto;\n}\n.wm_level_card_ico_img_body[data-v-5ed5b349] {\n  height: 24px;\n  width: 24px;\n  display: inline-block;\n  text-align: center;\n}\n.wm_level_card_img_body[data-v-5ed5b349] {\n  padding-bottom: calc(100% * 1.4);\n  position: relative;\n  z-index: 1;\n}\n.wm_level_card_img_body .wm_level_card_img[data-v-5ed5b349] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.wm_battle_cry_body[data-v-5ed5b349] {\n  padding: 10px 0;\n}\n.wm_level_card_item_img[data-v-5ed5b349] {\n  width: 24px;\n  height: 24px;\n}\n.wm_upgradecard_bt_btn_body[data-v-5ed5b349] {\n  padding: 15px 0;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.95);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  z-index: 999;\n}\n.wm_upcard_get_item[data-v-5ed5b349] {\n  display: inline-block;\n  white-space: nowrap;\n  margin: 5px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  padding: 4px 7px;\n}\n.wm_upcard_tooltips[data-v-5ed5b349] {\n  line-height: 140%;\n  max-width: 90vw;\n}\n",""])},gRE1:function(t,a,e){t.exports={default:e("TmV0"),__esModule:!0}},mvHQ:function(t,a,e){t.exports={default:e("qkKv"),__esModule:!0}},qkKv:function(t,a,e){var r=e("FeBl"),l=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return l.stringify.apply(l,arguments)}},wogS:function(t,a,e){"use strict";function r(t){e("NaF5")}Object.defineProperty(a,"__esModule",{value:!0});var l=e("gRE1"),n=e.n(l),i=e("mvHQ"),s=e.n(i),o=e("//Fk"),d=e.n(o),c=e("bOdI"),m=e.n(c),h=e("Wby1"),u=e("r4Fr"),p=e("BUx0"),v=e("N5DN"),g=e("adbS"),_=e("nCu/"),b=e.n(_),f=e("oAV5"),y=(e("NC6I"),{data:function(){var t;return t={cardCount:{},tootipsDisabled:!1,cardData:null,cardInfoShow:!1,itemDialog:!1,token:sessionStorage.getItem("token")?sessionStorage.getItem("token"):localStorage.getItem("token"),battleData:null,battleSence:!1,myBattleTimes:"--",battleOverTimes:"--",itemData_:b.a,userCardCache:null,cardPage:Number(this.$route.query.page)||1,cardTotle:0,userCard:[],pageChangeing:!1,searchForm:{star:this.$route.query.star||"0",cry:this.$route.query.cry||"0",rightType:this.$route.query.rightType||"0",leftType:this.$route.query.leftType||"0",battle:this.$route.query.battle||"2",sort:this.$route.query.sort||"0"},myBattleCard:[],myCardCount:{},myCardLevel:{}},m()(t,"itemData_",b.a),m()(t,"myItem",{}),m()(t,"seledCardPackage",this.$route.query.packageId||"-1"),m()(t,"cardPackage",[{name:"加载中...",packageId:"-1"}]),m()(t,"battleMode","false"!==this.$route.query.battleMode),t},components:{menuView:h.a,userTop:p.a,battle:v.a,cardInfoDialog:g.a},filters:{setChenggolv:function(t){var a=t[0],e=t[1],r=100,l=5;return a<5?r:(3===e?l=2:1===e&&(l=4),r=100-(a+1-5)*l,r<1&&(r=1),r)},setItemShould:function(t){return 1==t?45:2==t?60:3==t?30:4==t?60:5==t?150:void 0}},mounted:function(){this.$emit("l2dMassage","这里可以升级自己的卡牌，所需材料可以在挖矿中获得，卡牌可以通过抽卡、猜卡、结缘或者市场购买获得。如果卡牌不足可以通过卡牌碎片来替代卡牌，卡牌碎片可以通过分解卡牌获得。"),this.getCardPackage(),this.searchCardCount()},methods:{searchCardCount:function(){var t=this;u.a.searchCardCount({token:this.token}).then(function(a){1===a.data.code&&(t.cardCount=a.data.cardCount)})},itemShould:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=0;a>19&&(e=a-19);var r=0;if(1==t){r=45+9*e}else if(2==t){r=60+12*e}else if(3==t){r=30+6*e}else if(4==t){r=60+12*e}else if(5==t){r=345+69*e}return Math.round(r)},updateUserinfo:function(){this.$refs.userTop.getUserInfo()},updateMyCard:function(){var t=this,a=new d.a(function(a,e){t.getMycard(a,e)});d.a.all([a]).then(function(a){t.initData(t.cardPage)})},cardInfoDiaShow:function(t){this.cardInfoShow=t},apiInit:function(){var t=this,a=new d.a(function(a,e){t.getMyBattleCard(a,e)}),e=new d.a(function(a,e){t.getMycard(a,e)}),r=new d.a(function(a,e){t.searchuseritem(a,e)});d.a.all([a,e,r]).then(function(a){t.initData(t.cardPage)})},getCardPackage:function(){var t=this;u.a.searchcardpackage({sortType:"default"}).then(function(a){0==a.data.code?t.$message.error(a.data.msg):1==a.data.code&&(t.cardPackage=a.data.data,t.cardPackage=Object(f.g)(t.cardPackage,a.data.sortData,"default"),t.cardPackage.length>0&&"-1"===t.seledCardPackage&&(t.seledCardPackage=t.cardPackage[0].packageId),t.apiInit())})},chipChange:function(t){this.$forceUpdate()},goMarket:function(t){var a=this;this.cardData={cardId:t.cardId,packageId:t.packageId,name:t.name,title:t.title,star:t.star,cry:t.cry,leftType:t.leftType,rightType:t.rightType,have:t.count,level:t.level},this.cardInfoShow=!0,this.tootipsDisabled=!0,setTimeout(function(){a.tootipsDisabled=!1},20)},goChangeLevel:function(t){var a=(t.level,this.myItem[200]);if(a>0){var e=s()({page:this.cardPage,star:this.searchForm.star,cry:this.searchForm.cry,rightType:this.searchForm.rightType,leftType:this.searchForm.leftType,battle:this.searchForm.battle,sort:this.searchForm.sort,packageId:this.seledCardPackage,battleMode:String(this.battleMode)});this.$router.push({path:"/cardlevelchange",query:{from:t.cardId,item:a,packageId:t.packageId,leftType:t.leftType,star:t.star,fromLevel:t.level,upgradeData:btoa(e)}})}else this.$message("您的等级转换道具不足！")},setCardShould:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=0,r=0,l=0;switch(a>19&&(r=a-19),t){case 1:case 2:l=4,e=l+(l-1)*r;break;case 3:l=16,e=l+(l-1)*r;break;case 4:l=6,e=l+(l-1)*r;break;case 5:l=4,e=l+(l-1)*r;break;case 6:l=2,e=l+(l-1)*r}return Math.round(e)},openItemBag:function(){var t=n()(this.myItem);t=t.filter(function(t){return t>0}),t.length<=0?this.$message("您的仓库空空如也，快去挖矿吧！"):this.itemDialog=!0},upgradecard:function(t,a,e){var r=this;this.$confirm("升级将消耗卡牌和道具，是否继续?","提示",{confirmButtonText:"升级",cancelButtonText:"取消",lockScroll:!1,type:"warning"}).then(function(){var l={token:r.token,cardId:t,usePieces:e};u.a.upgradecard(l).then(function(t){0==t.data.code?r.$message.error(t.data.msg):1==t.data.code&&(t.data.isSuccess?r.$message({message:"卡牌成功升级到"+(t.data.myCardLevel+1)+"级！",type:"success"}):(r.$message({dangerouslyUseHTMLString:!0,message:'升级失败，您获得了<span class="cOrange">'+t.data.getStar+"</span>颗星星！"}),r.$refs.userTop.getUserInfo()),r.userCard[a].count=t.data.cardNum,r.userCard[a].level=t.data.myCardLevel,r.myItem[t.data.itemId]=t.data.itemNum,e&&(r.myItem[t.data.pieceId]=t.data.myPieces),r.$forceUpdate())})}).catch(function(){})},searchChanged:function(){this.cardPage=1,this.cardPageChange(1)},PrefixInteger_:function(t,a){return Object(f.a)(t,a)},initData:function(t){for(var a=0;a<this.userCardCache.length;a++){this.userCardCache[a].usechip=!1,this.userCardCache[a].battle=!1,this.userCardCache[a].count=this.myCardCount[this.userCardCache[a].cardId];for(var e=0;e<this.myBattleCard.length;e++)this.userCardCache[a].cardId===this.myBattleCard[e]&&(this.userCardCache[a].battle=!0);var r=this.myCardLevel[this.userCardCache[a].cardId];this.userCardCache[a].level=0,r&&(this.userCardCache[a].level=r)}t?this.cardPageChange(this.cardPage):this.cardPageChange(1)},cardPageChange:function(t){function a(t){var a=o.searchForm.star;return"0"===a||t==a}function e(t){var a=o.searchForm.cry;return"0"===a||t==a}function r(t){var a=o.searchForm.rightType;return"0"===a||t==a}function l(t){var a=o.searchForm.leftType;return"0"===a||t==a}function n(t){var a=o.searchForm.battle;return"2"===a||("0"===a?t:!t)}function i(t,a){var e=o.searchForm.sort;return o.battleMode?(o.myCardLevel[t.cardId]||0)<(o.myCardLevel[a.cardId]||0)?1:(o.myCardLevel[t.cardId]||0)>(o.myCardLevel[a.cardId]||0)?-1:a.cardId-t.cardId:"0"===e?t.star<a.star?1:t.star>a.star?-1:(o.myCardLevel[t.cardId]||0)<(o.myCardLevel[a.cardId]||0)?1:(o.myCardLevel[t.cardId]||0)>(o.myCardLevel[a.cardId]||0)?-1:a.cardId-t.cardId:"1"===e?(o.myCardLevel[t.cardId]||0)<(o.myCardLevel[a.cardId]||0)?1:(o.myCardLevel[t.cardId]||0)>(o.myCardLevel[a.cardId]||0)?-1:a.cardId-t.cardId:"2"===e?(o.myCardLevel[t.cardId]||0)-(o.myCardLevel[a.cardId]||0):"3"===e?t.star<a.star?1:t.star>a.star?-1:a.cardId-t.cardId:"4"===e?t.star-a.star:void 0}var s=this;this.pageChangeing=!0,this.userCard=[];var o=this,d=[];d=this.battleMode?this.userCardCache:this.userCardCache.filter(function(t){return a(t.star)&&e(t.cry)&&r(t.rightType)&&l(t.leftType)&&n(t.battle)}),d=d.sort(i);var c=d.slice(20*(t-1),20*t);this.cardTotle=d.length,setTimeout(function(){s.userCard=c,s.pageChangeing=!1},300),this.routerReplace()},routerReplace:function(){this.$router.replace({name:"upgradecard",query:{page:this.cardPage,star:this.searchForm.star,cry:this.searchForm.cry,rightType:this.searchForm.rightType,leftType:this.searchForm.leftType,battle:this.searchForm.battle,sort:this.searchForm.sort,packageId:this.seledCardPackage,battleMode:String(this.battleMode)}})},searchuseritem:function(t,a){var e=this,r={token:this.token};u.a.searchuseritem(r).then(function(r){0==r.data.code?(a({msg:"error"}),e.$message.error(r.data.msg)):1==r.data.code&&(r.data.data&&(e.myItem=r.data.data),t("ok"))})},getMyBattleCard:function(t,a){var e=this;if(this.battleMode)return t("ok"),!1;var r={token:this.token,type:"search"};u.a.battlecard(r).then(function(r){0==r.data.code?(a({msg:"error"}),e.$message.error(r.data.msg)):1==r.data.code&&(e.myBattleCard=r.data.cardId,t("ok"))})},getMycard:function(t,a){var e=this;u.a.searchcardbytoken({token:this.token,packageId:this.seledCardPackage,battleOnly:this.battleMode}).then(function(r){if(0==r.data.code)a({msg:"error"}),e.$message.error(r.data.msg);else if(1==r.data.code){t("ok");var l=r.data;e.myCardLevel=r.data.cardLevelData||{},e.myCardCount=r.data.cardCount||{},e.userCardCache=r.data.card||[],r.data.cardIndexCount<=0&&e.$message({message:l.nickName+"还没有获得过卡牌呢！",type:"warning"})}})},goRouter:function(t){this.$router.push({path:t})}}}),C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"common_body"},[e("userTop",{ref:"userTop"}),t._v(" "),e("h5",{staticClass:"common_title type_shop"},[t._v("升级对战卡牌")]),t._v(" "),e("h6",{staticClass:"common_title_tips type_dec"},[e("el-checkbox",{on:{change:t.apiInit},model:{value:t.battleMode,callback:function(a){t.battleMode=a},expression:"battleMode"}},[t._v("仅显示对战卡牌")])],1),t._v(" "),t.battleMode?t._e():e("div",{staticClass:"wm_cardlist_select_search_body type_upgradcard"},[e("el-form",{attrs:{inline:!0,model:t.searchForm}},[e("el-form-item",{attrs:{label:"选择卡包"}},[e("el-select",{staticClass:"wm_cardlist_select type_120",attrs:{placeholder:"选择卡包"},on:{change:t.apiInit},model:{value:t.seledCardPackage,callback:function(a){t.seledCardPackage=a},expression:"seledCardPackage"}},t._l(t.cardPackage,function(a){return e("el-option",{key:a.packageId,attrs:{label:a.name,value:a.packageId}},[e("span",[t._v(t._s(a.name)+"("+t._s(t.cardCount[a.packageId]||0)+"/"+t._s(a.oneStar+a.twoStar+a.threeStar+a.fourStar+a.fiveStar+a.sixStar)+")")])])}),1)],1),t._v(" "),e("el-form-item",{attrs:{label:"星星等级"}},[e("el-select",{staticClass:"wm_cardlist_select type_120",attrs:{placeholder:"筛选星级"},on:{change:t.searchChanged},model:{value:t.searchForm.star,callback:function(a){t.$set(t.searchForm,"star",a)},expression:"searchForm.star"}},[e("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),e("el-option",{attrs:{label:"1星",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"2星",value:"2"}}),t._v(" "),e("el-option",{attrs:{label:"3星",value:"3"}}),t._v(" "),e("el-option",{attrs:{label:"4星",value:"4"}}),t._v(" "),e("el-option",{attrs:{label:"5星",value:"5"}}),t._v(" "),e("el-option",{attrs:{label:"6星",value:"6"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"水晶属性"}},[e("el-select",{staticClass:"wm_cardlist_select type_120",attrs:{placeholder:"筛选水晶属性"},on:{change:t.searchChanged},model:{value:t.searchForm.cry,callback:function(a){t.$set(t.searchForm,"cry",a)},expression:"searchForm.cry"}},[e("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),e("el-option",{attrs:{label:"红火",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"蓝水",value:"2"}}),t._v(" "),e("el-option",{attrs:{label:"绿风",value:"3"}}),t._v(" "),e("el-option",{attrs:{label:"光",value:"4"}}),t._v(" "),e("el-option",{attrs:{label:"暗",value:"5"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"被动属性"}},[e("el-select",{staticClass:"wm_cardlist_select type_120",attrs:{placeholder:"筛选被动属性"},on:{change:t.searchChanged},model:{value:t.searchForm.leftType,callback:function(a){t.$set(t.searchForm,"leftType",a)},expression:"searchForm.leftType"}},[e("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),e("el-option",{attrs:{label:"全能",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"兵攻",value:"2"}}),t._v(" "),e("el-option",{attrs:{label:"盾防",value:"3"}}),t._v(" "),e("el-option",{attrs:{label:"速度",value:"4"}}),t._v(" "),e("el-option",{attrs:{label:"爱心",value:"5"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"主动技能"}},[e("el-select",{staticClass:"wm_cardlist_select type_120",attrs:{placeholder:"筛选主动技能"},on:{change:t.searchChanged},model:{value:t.searchForm.rightType,callback:function(a){t.$set(t.searchForm,"rightType",a)},expression:"searchForm.rightType"}},[e("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),e("el-option",{attrs:{label:"物",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"魔",value:"2"}}),t._v(" "),e("el-option",{attrs:{label:"防",value:"3"}}),t._v(" "),e("el-option",{attrs:{label:"治",value:"4"}}),t._v(" "),e("el-option",{attrs:{label:"妨",value:"5"}}),t._v(" "),e("el-option",{attrs:{label:"支",value:"6"}}),t._v(" "),e("el-option",{attrs:{label:"特",value:"7"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"是否参战"}},[e("el-select",{staticClass:"wm_cardlist_select type_120",attrs:{placeholder:"筛选是否参战"},on:{change:t.searchChanged},model:{value:t.searchForm.battle,callback:function(a){t.$set(t.searchForm,"battle",a)},expression:"searchForm.battle"}},[e("el-option",{attrs:{label:"是",value:"0"}}),t._v(" "),e("el-option",{attrs:{label:"否",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"全部",value:"2"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"设置排序"}},[e("el-select",{staticClass:"wm_cardlist_select type_120",attrs:{placeholder:"设置排序"},on:{change:t.searchChanged},model:{value:t.searchForm.sort,callback:function(a){t.$set(t.searchForm,"sort",a)},expression:"searchForm.sort"}},[e("el-option",{attrs:{label:"默认",value:"0"}}),t._v(" "),e("el-option",{attrs:{label:"等级从高到低",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"等级从低到高",value:"2"}}),t._v(" "),e("el-option",{attrs:{label:"星级从高到低",value:"3"}}),t._v(" "),e("el-option",{attrs:{label:"星级从低到高",value:"4"}})],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"wm_battle_cry_body"},[e("transition",{attrs:{name:"el-fade-in-linear"}},[t.userCard.length<=0&&!t.pageChangeing?e("div",{staticClass:"wm_market_tips"},[t._v("您暂时没有可升级的卡牌！")]):t._e()]),t._v(" "),e("transition",{attrs:{name:"el-fade-in-linear"}},[t.userCard.length>0?e("el-row",{attrs:{gutter:20}},t._l(t.userCard,function(a,r){return e("el-col",{key:r,staticClass:"tc mb20",attrs:{sm:12}},[e("el-card",{staticClass:"box-card",attrs:{"body-style":{padding:"4%"}}},[e("table",{staticClass:"wm_levle_card_table"},[e("tbody",[e("td",[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击查看市场和卡牌信息！",placement:"top",enterable:!1,disabled:t.tootipsDisabled}},[e("div",{staticClass:"wm_level_card_img_body mb10 wm_set_pointer",on:{click:function(e){return t.goMarket(a)}}},[e("img",{staticClass:"w_10 wm_level_card_img",attrs:{src:t.$wikimoecard.url+a.packageId+"/"+a.cardId+".jpg"}})])])],1),t._v(" "),e("td",[e("h5",{staticClass:"mb5 f18"},[t._v("Lv."+t._s(a.level+1))]),t._v(" "),e("p",{staticClass:"cRed mb20"},[e("el-tooltip",{attrs:{placement:"top"}},[1==a.leftType?e("div",{staticClass:"tc",attrs:{slot:"content"},slot:"content"},[e("p",{staticClass:"mb5"},[t._v("每升一级攻击力+50、防御力+25")]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("当前攻击+"+t._s(50*a.level))]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("当前防御+"+t._s(25*a.level))]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("下一级攻击+"+t._s(50*a.level+50))]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("下一级防御+"+t._s(25*a.level+25))])]):2==a.leftType?e("div",{staticClass:"tc",attrs:{slot:"content"},slot:"content"},[e("p",{staticClass:"mb5"},[t._v("每升一级攻击力+100")]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("当前攻击+"+t._s(100*a.level))]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("下一级攻击+"+t._s(100*a.level+100))])]):3==a.leftType?e("div",{staticClass:"tc",attrs:{slot:"content"},slot:"content"},[e("p",{staticClass:"mb5"},[t._v("每升一级防御力+50")]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("当前防御+"+t._s(50*a.level))]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("下一级防御+"+t._s(50*a.level+50))])]):4==a.leftType?e("div",{staticClass:"tc",attrs:{slot:"content"},slot:"content"},[e("p",{staticClass:"mb5"},[t._v("每升一级速度+1")]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("当前速度+"+t._s(1*a.level))]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("下一级速度+"+t._s(1*a.level+1))])]):5==a.leftType?e("div",{staticClass:"tc",attrs:{slot:"content"},slot:"content"},[e("p",{staticClass:"mb5"},[t._v("每升一级SAN+1150")]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("当前SAN+"+t._s(1150*a.level))]),t._v(" "),e("p",{staticClass:"mb5"},[t._v("下一级SAN+"+t._s(1150*a.level+1150))])]):t._e(),t._v(" "),e("span",{staticClass:"wm_set_pointer"},[t._v("查看属性加成")])])],1),t._v(" "),e("p",{staticClass:"mb10 f18"},[t._v("升级需要")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!a.usechip,expression:"!item.usechip"}],staticClass:"mb20"},[e("p",{staticClass:"mb10"},[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{staticClass:"wm_upcard_tooltips",attrs:{slot:"content"},slot:"content"},[t._v("需要"+t._s(t.itemShould(a.leftType,a.level))+"个【"+t._s(t.itemData_[a.cry+""+a.leftType].name)+"】，可通过挖矿获得。")]),e("img",{staticClass:"wm_level_card_item_img wm_set_pointer",attrs:{src:"/static/otherImg/item/"+a.cry+a.leftType+".png"}})]),t._v("×"+t._s(t.itemShould(a.leftType,a.level))+"("+t._s(t.myItem[a.cry+""+a.leftType]||0)+")\n                    ")],1),t._v(" "),e("div",{staticClass:"mb10"},[e("div",{staticClass:"wm_level_card_ico_img_body"},[e("el-tooltip",{attrs:{placement:"top",disabled:t.tootipsDisabled}},[e("div",{staticClass:"wm_upcard_tooltips",attrs:{slot:"content"},slot:"content"},[t._v("需要"+t._s(t.setCardShould(a.star,a.level))+"张【"+t._s(a.name)+"】，除了默认获取途径外还可以从市场交易获得。")]),e("img",{staticClass:"wm_level_card_ico_img wm_set_pointer",attrs:{src:t.$wikimoecard.url+a.packageId+"/"+a.cardId+".jpg"},on:{click:function(e){return t.goMarket(a)}}})])],1),e("span",[t._v("×"+t._s(t.setCardShould(a.star,a.level))+"("+t._s(a.count)+")")])]),t._v(" "),e("div",{staticClass:"mb10"},[e("div",{staticClass:"wm_level_card_ico_img_body"},[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{staticClass:"wm_upcard_tooltips",attrs:{slot:"content"},slot:"content"},[t._v("您未使用碎片，升级将不会消耗【"+t._s(t.itemData_["1"+t.PrefixInteger_(a.star,2)].name)+"】，"),e("br"),t._v("如果您需要使用碎片来替代缺少的卡牌可以勾选【使用碎片】。"),e("br"),t._v("碎片可以从【卡牌分解】中获得。")]),e("img",{staticClass:"wm_level_card_ico_img wm_set_pointer",attrs:{src:"/static/otherImg/item/1"+t.PrefixInteger_(a.star,2)+".png"}})])],1),e("span",[t._v("×0("+t._s(t.myItem["1"+t.PrefixInteger_(a.star,2)]||0)+")")])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.usechip,expression:"item.usechip"}],staticClass:"mb20"},[e("p",{staticClass:"mb10"},[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{staticClass:"wm_upcard_tooltips",attrs:{slot:"content"},slot:"content"},[t._v("需要"+t._s(t.itemShould(a.leftType,a.level))+"个【"+t._s(t.itemData_[a.cry+""+a.leftType].name)+"】，可通过挖矿获得。")]),e("img",{staticClass:"wm_level_card_item_img wm_set_pointer",attrs:{src:"/static/otherImg/item/"+a.cry+a.leftType+".png"}})]),t._v("×"+t._s(t.itemShould(a.leftType,a.level))+"("+t._s(t.myItem[a.cry+""+a.leftType]||0)+")\n                    ")],1),t._v(" "),e("div",{staticClass:"mb10"},[e("div",{staticClass:"wm_level_card_ico_img_body"},[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{staticClass:"wm_upcard_tooltips",attrs:{slot:"content"},slot:"content"},[t._v("需要"+t._s(a.count>t.setCardShould(a.star,a.level)?t.setCardShould(a.star,a.level):a.count)+"张【"+t._s(a.name)+"】，可通过抽卡或者市场交易获得。")]),e("img",{staticClass:"wm_level_card_ico_img wm_set_pointer",attrs:{src:t.$wikimoecard.url+a.packageId+"/"+a.cardId+".jpg"}})])],1),e("span",[t._v("×"+t._s(a.count>t.setCardShould(a.star,a.level)?t.setCardShould(a.star,a.level):a.count)+"("+t._s(a.count)+")")])]),t._v(" "),e("div",{staticClass:"mb10"},[e("div",{staticClass:"wm_level_card_ico_img_body"},[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{staticClass:"wm_upcard_tooltips",attrs:{slot:"content"},slot:"content"},[t._v("需要"+t._s(a.count>t.setCardShould(a.star,a.level)?0:3*(t.setCardShould(a.star,a.level)-a.count))+"个【"+t._s(t.itemData_["1"+t.PrefixInteger_(a.star,2)].name)+"】，"),e("br"),t._v("碎片可以从【卡牌分解】中获得。")]),e("img",{staticClass:"wm_level_card_ico_img wm_set_pointer",attrs:{src:"/static/otherImg/item/1"+t.PrefixInteger_(a.star,2)+".png"}})])],1),e("span",[t._v("×"+t._s(a.count>t.setCardShould(a.star,a.level)?0:3*(t.setCardShould(a.star,a.level)-a.count))+"("+t._s(t.myItem["1"+t.PrefixInteger_(a.star,2)]||0)+")")])])]),t._v(" "),e("div",{staticClass:"mb20"},[e("el-checkbox",{on:{change:t.chipChange},model:{value:a.usechip,callback:function(e){t.$set(a,"usechip",e)},expression:"item.usechip"}},[t._v("使用碎片")])],1),t._v(" "),e("div",{staticClass:"mt20 pb10"},[e("el-dropdown",{attrs:{"split-button":"",type:"primary",size:"medium",trigger:"click"},on:{click:function(e){return t.upgradecard(a.cardId,r,a.usechip)},command:t.goChangeLevel}},[t._v("\n                      升级\n                      "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:a}},[t._v("转换等级")])],1)],1)],1)])])])])],1)}),1):t._e()],1),t._v(" "),e("div",{staticClass:"wm_market_content_page"},[e("el-pagination",{staticClass:"my_card_page",attrs:{small:"",layout:"prev, pager, next",total:t.cardTotle,"current-page":t.cardPage,"page-size":20},on:{"current-change":t.cardPageChange,"update:currentPage":function(a){t.cardPage=a},"update:current-page":function(a){t.cardPage=a}}})],1),t._v(" "),e("div",{staticClass:"mt20 tc wm_upgradecard_bt_btn_body"},[e("el-button",{on:{click:function(a){return t.goRouter("/battle")}}},[t._v("返回")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.goRouter("/battlecard")}}},[t._v("组卡")]),t._v(" "),e("el-button",{attrs:{type:"info"},on:{click:t.openItemBag}},[t._v("物品")])],1)],1),t._v(" "),e("menuView"),t._v(" "),e("el-dialog",{staticClass:"reg_code_dialog",attrs:{title:"我的物品",visible:t.itemDialog,width:"100%"},on:{"update:visible":function(a){t.itemDialog=a}}},[e("div",{staticClass:"tc"},t._l(t.myItem,function(a,r){return e("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.myItem[r]>0,expression:"myItem[index]>0"}],key:r,attrs:{enterable:!1,effect:"dark",content:t.itemData_[r].name,placement:"top"}},[e("div",{staticClass:"wm_upcard_get_item wm_set_pointer"},[e("img",{attrs:{src:"/static/otherImg/item/"+r+".png",width:"24px",height:"24px"}}),t._v("×"+t._s(t.myItem[r])+"\n        ")])])}),1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.itemDialog=!1}}},[t._v("关闭")])],1)]),t._v(" "),e("cardInfoDialog",{attrs:{cardInfoDigShow:t.cardInfoShow,cardData:t.cardData},on:{cardInfoShow:t.cardInfoDiaShow,buyNewCard:t.updateMyCard,updateUserinfo:t.updateUserinfo}})],1)},w=[],S={render:C,staticRenderFns:w},x=S,D=e("VU/8"),I=r,k=D(y,x,!1,I,"data-v-5ed5b349",null);a.default=k.exports}});