(function(g){var window=this;'use strict';var nkb=function(a,b){g.X.call(this,{G:"button",Ma:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{G:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{G:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{G:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{G:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.I=a;this.Ta("click",this.onClick,this);this.updateValue("title",g.qT(a,"Agrandir","i"));this.update({"data-title-no-tooltip":"Agrandir"});g.tb(this,g.kT(b.Hc(),this.element))},okb=function(a){g.X.call(this,{G:"div",
S:"ytp-miniplayer-ui"});this.Ag=!1;this.player=a;this.T(a,"minimized",this.Bh);this.T(a,"onStateChange",this.HQ)},pkb=function(a){g.VT.call(this,a);
this.u=new g.LK(this);this.j=new okb(this.player);this.j.hide();g.XS(this.player,this.j.element,4);a.eg()&&(this.load(),g.Pq(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(nkb,g.X);nkb.prototype.onClick=function(){this.I.Qa("onExpandMiniplayer")};g.w(okb,g.X);g.k=okb.prototype;
g.k.BN=function(){this.tooltip=new g.uW(this.player,this);g.H(this,this.tooltip);g.XS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Xc=new g.DU(this.player);g.H(this,this.Xc);this.zk=new g.X({G:"div",S:"ytp-miniplayer-scrim"});g.H(this,this.zk);this.zk.Ja(this.element);this.T(this.zk.element,"click",this.gI);var a=new g.X({G:"button",Ma:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Fermer"},X:[g.fR()]});g.H(this,a);a.Ja(this.zk.element);this.T(a.element,"click",this.Dp);
a=new nkb(this.player,this);g.H(this,a);a.Ja(this.zk.element);this.wv=new g.X({G:"div",S:"ytp-miniplayer-controls"});g.H(this,this.wv);this.wv.Ja(this.zk.element);this.T(this.wv.element,"click",this.gI);var b=new g.X({G:"div",S:"ytp-miniplayer-button-container"});g.H(this,b);b.Ja(this.wv.element);a=new g.X({G:"div",S:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ja(this.wv.element);var c=new g.X({G:"div",S:"ytp-miniplayer-button-container"});g.H(this,c);c.Ja(this.wv.element);this.pY=new g.HV(this.player,
this,!1);g.H(this,this.pY);this.pY.Ja(b.element);b=new g.GV(this.player,this);g.H(this,b);b.Ja(a.element);this.nextButton=new g.HV(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ja(c.element);this.Oj=new g.nW(this.player,this);g.H(this,this.Oj);this.Oj.Ja(this.zk.element);this.Pc=new g.MV(this.player,this);g.H(this,this.Pc);g.XS(this.player,this.Pc.element,4);this.PH=new g.X({G:"div",S:"ytp-miniplayer-buttons"});g.H(this,this.PH);g.XS(this.player,this.PH.element,4);a=new g.X({G:"button",
Ma:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Fermer"},X:[g.fR()]});g.H(this,a);a.Ja(this.PH.element);this.T(a.element,"click",this.Dp);a=new g.X({G:"button",Ma:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Fermer"},X:[g.PEa()]});g.H(this,a);a.Ja(this.PH.element);this.T(a.element,"click",this.m8);this.T(this.player,"presentingplayerstatechange",this.Md);this.T(this.player,"appresize",this.Kb);this.T(this.player,"fullscreentoggled",this.Kb);this.Kb()};
g.k.show=function(){this.Bf=new g.Bq(this.uw,null,this);this.Bf.start();this.Ag||(this.BN(),this.Ag=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Pc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Bf&&(this.Bf.dispose(),this.Bf=void 0);g.X.prototype.hide.call(this);this.player.eg()||(this.Ag&&this.Pc.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.Bf&&(this.Bf.dispose(),this.Bf=void 0);g.X.prototype.xa.call(this)};
g.k.Dp=function(){this.player.stopVideo();this.player.Qa("onCloseMiniplayer")};
g.k.m8=function(){this.player.playVideo()};
g.k.gI=function(a){if(a.target===this.zk.element||a.target===this.wv.element)g.gQ(this.player.Nb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Bh=function(){g.Pq(this.player.getRootNode(),"ytp-player-minimized",this.player.eg())};
g.k.cf=function(){this.Pc.Bc();this.Oj.Bc()};
g.k.uw=function(){this.cf();this.Bf&&this.Bf.start()};
g.k.Md=function(a){g.BP(a.state,32)&&this.tooltip.hide()};
g.k.Kb=function(){g.YV(this.Pc,0,this.player.qb().getPlayerSize().width,!1);g.NV(this.Pc)};
g.k.HQ=function(a){this.player.eg()&&(0===a?this.hide():this.show())};
g.k.Hc=function(){return this.tooltip};
g.k.Mg=function(){return!1};
g.k.lh=function(){return!1};
g.k.tm=function(){return!1};
g.k.fJ=function(){};
g.k.mq=function(){};
g.k.Ry=function(){};
g.k.jn=function(){return null};
g.k.GG=function(){return null};
g.k.RM=function(){return new g.ye(0,0)};
g.k.Uk=function(){return new g.Kn(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Cw=function(a,b,c,d,e){var f=0,h=d=0,l=g.mo(a);if(b){c=g.Kq(b,"ytp-prev-button")||g.Kq(b,"ytp-next-button");var m=g.Kq(b,"ytp-play-button"),n=g.Kq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Wn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Kq(b,"ytp-miniplayer-button-top-left"),f=g.Wn(b,this.element),b=g.mo(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.qb().getPlayerSize().width;e=f+(e||0);l=g.qe(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Pp=function(){};
g.k.gm=function(){return!1};
g.k.JE=function(){};
g.k.sA=function(){};
g.k.Kr=function(){};
g.k.Jr=function(){};
g.k.py=function(){};
g.k.Ps=function(){};
g.k.tE=function(){};g.w(pkb,g.VT);g.k=pkb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Pq(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.VT.prototype.create.call(this);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.vl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.UT("miniplayer",pkb);})(_yt_player);
