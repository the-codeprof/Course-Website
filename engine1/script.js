// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a}});function ws_shift(k,i,c){var d=jQuery;var h=d(this);var b=c.find("li");var f=c.find(".ws_list");var e={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};var g=d("<div>").addClass("ws_effect ws_shift").css(e).appendTo(c);var a=d("<div>").css(e).css({display:"none",zIndex:4}).appendTo(g);var j=d("<div>").css(e).css({display:"none",zIndex:3}).appendTo(g);this.go=function(l,p,n){var m=c.width();var o=c.height();a.append(d(i.get(l)).clone());j.append(d(i.get(p)).clone());if(k.responsive<3){a.find("img").css("width","100%");j.find("img").css("width","100%")}f.stop(true,true).hide().css({left:-l+"00%"});var q={left:[{left:-m},{left:0}],right:[{left:m},{left:0}],down:[{top:o},{top:0}],up:[{top:-o},{top:0}]}[k.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];if(k.support.transform){if(q[0].left){q[0]={translate:[q[0].left,0,0]}}else{q[0]={translate:[0,q[0].top,0]}}q[1]={translate:[0,0,0]}}a.show();j.show();wowAnimate(a,q[0],q[1],k.duration,"easeInOutCubic",function(){f.show();a.hide().html("");j.hide().html("");h.trigger("effectEnd")});wowAnimate(j,{scale:1,translate:[0,0,0]},{scale:0.5,translate:[0,0,0]},k.duration,"easeInOutCubic")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a}});function ws_cube_over(m,k,b){var e=jQuery,j=e(this),a=/WOW Slider/g.test(navigator.userAgent),g=e(".ws_list",b),c=m.perspective||/MSIE|Trident/g.test(navigator.userAgent)?1000:2000,d={position:"absolute",backgroundSize:"cover",left:0,top:0,width:"100%",height:"100%",backfaceVisibility:"hidden"};var l=/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent);var i=e("<div>").css(d).css({transformStyle:"preserve-3d",perspective:(l&&!a?"none":c),zIndex:8});e("<div>").addClass("ws_effect ws_cube_over").css(d).append(i).appendTo(b);if(!m.support.transform&&m.fallback){return new m.fallback(m,k,b)}var h;this.go=function(y,u){var q=e(k[u]);q={width:q.width(),height:q.height(),marginTop:parseFloat(q.css("marginTop")),marginLeft:parseFloat(q.css("marginLeft"))};function p(C,G,F,H){C.parent().css("perspective",c);var D=C.width(),E=C.height();wowAnimate(C,{scale:1,translate:[0,0,(l&&!a)?F:0]},{scale:0.85,translate:[0,0,(l&&!a)?F:0]},m.duration*0.4,"easeInOutBack",function(){wowAnimate(C,{scale:0.85,translate:[0,0,(l&&!a)?F:0]},{scale:1,translate:[0,0,(l&&!a)?F:0]},m.duration*0.4,m.duration-m.duration*0.8,"easeInOutBack",H)});wowAnimate(G.front.item,{rotateY:0,rotateX:0},{rotateY:G.front.rotateY,rotateX:G.front.rotateX},m.duration,"easeInOutBack");wowAnimate(G.back.item,{rotateY:G.back.rotateY,rotateX:G.back.rotateX},{rotateY:0,rotateX:0},m.duration,"easeInOutBack");wowAnimate(G.side.item,{rotateY:G.side.rotateY,rotateX:G.side.rotateX},{rotateY:-G.side.rotateY,rotateX:-G.side.rotateX},m.duration,"easeInOutBack")}if(m.support.transform&&m.support.perspective){if(h){h.stop()}var A=b.width(),v=b.height();var t={left:[A/2,0,0,180,0,-180],right:[A/2,0,0,-180,0,180],down:[v/2,-v/2,180,0,-180,0],up:[v/2,v/2,-180,0,180,0]}[m.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];var B=e("<img>").css(q),s=e("<img>").css(q).attr("src",k.get(y).src);var n=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+t[0]+"px"}).css(d).append(B).appendTo(i);var o=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+t[0]+"px"}).css(d).append(s).appendTo(i);var z=e('<div class="ws_cube_side">').css({transformOrigin:"50% 50% -"+t[0]+"px",background:m.staticColor?"":f(s[0],{exclude:["0,0,0","255,255,255"]})}).css(d).appendTo(i);B.on("load",function(){g.hide()});B.attr("src",k.get(u).src).load();i.parent().show();h=new p(i,{front:{item:n,rotateY:t[5],rotateX:t[4]},back:{item:o,rotateY:t[3],rotateX:t[2]},side:{item:z,rotateY:t[3]/2,rotateX:t[2]/2}},-t[0],function(){j.trigger("effectEnd");i.empty().parent().hide();h=0})}else{i.css({position:"absolute",display:"none",zIndex:2,width:"100%",height:"100%"});i.stop(1,1);var r=(!!((y-u+1)%k.length)^m.revers?"left":"right");var n=e("<div>").css({position:"absolute",left:"0%",right:"auto",top:0,width:"100%",height:"100%"}).css(r,0).append(e(k[u]).clone().css({width:100*q.width/b.width()+"%",height:100*q.height/b.height()+"%",marginLeft:100*q.marginLeft/b.width()+"%"})).appendTo(i);var x=e("<div>").css({position:"absolute",left:"100%",right:"auto",top:0,width:"0%",height:"100%"}).append(e(k[y]).clone().css({width:100*q.width/b.width()+"%",height:100*q.height/b.height()+"%",marginLeft:100*q.marginLeft/b.width()+"%"})).appendTo(i);i.css({left:"auto",right:"auto",top:0}).css(r,0).show();i.show();g.hide();x.animate({width:"100%",left:0},m.duration,"easeInOutExpo",function(){e(this).remove()});n.animate({width:0},m.duration,"easeInOutExpo",function(){j.trigger("effectEnd");i.empty().hide()})}};function f(x,o){o=o||{};var z=1,r=o.exclude||[],w;var t=document.createElement("canvas"),q=t.getContext("2d"),p=t.width=x.naturalWidth,D=t.height=x.naturalHeight;q.drawImage(x,0,0,x.naturalWidth,x.naturalHeight);try{w=q.getImageData(o.x?o.x:0,o.y?o.y:0,o.w?o.w:x.width,o.h?o.h:x.height)["data"]}catch(y){console.log("error:unable to access image data: "+y);return"#ccc"}var s=(o.w?o.w:x.width*o.h?o.h:x.height)||w.length,u={},B="",A=[],n={dominant:{name:"",count:0}};var v=0;while(v<s){A[0]=w[v];A[1]=w[v+1];A[2]=w[v+2];B=A.join(",");if(B in u){u[B]=u[B]+1}else{u[B]=1}if(r.indexOf(["rgb(",B,")"].join(""))===-1){var C=u[B];if(C>n.dominant.count){n.dominant.name=B;n.dominant.count=C}}v+=z*4}return["rgb(",n.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_bubbles(b,l,n){var e=jQuery;var f=e(this);var i=b.noCanvas||!document.createElement("canvas").getContext;var k=b.width,p=b.height;var g=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_bubbles").appendTo(n);if(!i){var a=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(g);var o=a.get(0).getContext("2d")}var j={easeOutBack:function(u,v,h,z,y,w){if(w==undefined){w=1.70158}return z*((v=v/y-1)*v*((w+1)*v+w)+1)+h},easeOutBackCubic:function(u,v,h,A,z,w){var y=(v/=z)*v;return h+A*(-1.5*y*v*y+2*y*y+4*y*v+-9*y+5.5*v)},easeOutCubic:function(u,v,h,y,w){return y*((v=v/w-1)*v*v+1)+h},easeOutExpo:function(u,v,h,y,w){return(v==w)?h+y:y*(-Math.pow(2,-10*v/w)+1)+h}};var s=[["#bbbbbb",0.5,0.5],["#b3b3b3",0.2,0.2],["#b6b6b6",0.5,0.2],["#b9b9b9",0.8,0.2],["#cccccc",0.2,0.8],["#c3c3c3",0.5,0.8],["#c6c6c6",0.8,0.8]];var c=[[[0.5,0.5,0.7,0.15],[0.5,0.5,0.6,0.3],[0.5,0.5,0.5,0.45],[0.5,0.5,0.4,0.6],[0.5,0.5,0.3,0.75],[0.5,0.5,0.2,0.9],[0.5,0.5,0.1,1]],[[0.5,0.5,0.7,1],[0.5,0.5,0.6,0.9],[0.5,0.5,0.5,0.75],[0.5,0.5,0.4,0.6],[0.5,0.5,0.3,0.45],[0.5,0.5,0.2,0.3],[0.5,0.5,0.1,0.15]]];var m=[[[0.5,0.5,0,1],[0.5,0.5,0,0.9],[0.5,0.5,0,0.75],[0.5,0.5,0,0.6],[0.5,0.5,0,0.45],[0.5,0.5,0,0.3],[0.5,0.5,0,0.15]],[[0.5,0.5,0,0.15],[0.5,0.5,0,0.3],[0.5,0.5,0,0.45],[0.5,0.5,0,0.6],[0.5,0.5,0,0.75],[0.5,0.5,0,0.9],[0.5,0.5,0,1]],[[0.5,7.5,0.7,0.75],[0.5,7.5,0.6,0.15],[0.5,7.5,0.5,1],[0.5,7.5,0.4,0.3],[0.5,7.5,0.3,0.45],[0.5,7.5,0.2,0.6],[0.5,7.5,0.1,0.9]],[[0.5,7.5,0.7,1],[0.5,7.5,0.6,0.9],[0.5,7.5,0.5,0.75],[0.5,7.5,0.4,0.6],[0.5,7.5,0.3,0.45],[0.5,7.5,0.2,0.3],[0.5,7.5,0.1,0.15]]];function d(u){if(Object.prototype.toString.call(u)==="[object Array]"){return u[Math.floor(Math.random()*(u.length))]}else{var h;var t=0;for(var v in u){if(Math.random()<1/++t){h=v}}return/linear|swing/g.test(h)?d(u):h}}function q(B,A,v,z,t){B.clearRect(0,0,k,p);for(var u=0,y=v.length;u<y;u++){var h=Math.max(0,Math.min(1,A-v[u][3]*(1-A)));if(t&&j[t]){h=j[t](1,h,0,1,1,1)}var w=k;if(k/p<=1.8&&k/p>0.7){w*=2}else{if(k/p<=0.7){w=p*2}}var x=v[u][2]*h*w;if(z){x=(v[u][2]+(z[u][2]-v[u][2])*h)*w}x=Math.max(0,x);B.beginPath();B.arc((v[u][0]+((z?z[u][0]:0.5)-v[u][0])*h)*k,(v[u][1]+((z?z[u][1]:0.5)-v[u][1])*h)*p,x,0,2*Math.PI,false);B.fillStyle=s[u][0];B.fill()}}this.go=function(B,w){if(i){n.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(B?-B+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},b.duration,"easeInOutExpo",function(){f.trigger("effectEnd")})}else{k=n.width();p=n.height();a.attr({width:k,height:p});var z=l.get(w);for(var x=0,A=s.length;x<A;x++){var u=Math.abs(s[x][1]),h=Math.abs(s[x][2]);s[x][0]=r(z,{x:u*k,y:h*p,w:2,h:2})||s[x][0]}var t=d(c);var v=d(m);var y=d(j);wowAnimate(function(C){q(o,C,t,0,y)},0,1,b.duration/2,function(){n.find(".ws_list").css({left:(B?-B+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});y=d(j);wowAnimate(function(C){q(o,1-C,v,t,y)},0,1,b.duration/2,function(){o.clearRect(0,0,k,p);f.trigger("effectEnd")})})}};function r(C,t){t=t||{};var E=1,w=t.exclude||[],B;var y=document.createElement("canvas"),v=y.getContext("2d"),u=y.width=C.naturalWidth,I=y.height=C.naturalHeight;v.drawImage(C,0,0,C.naturalWidth,C.naturalHeight);try{B=v.getImageData(t.x?t.x:0,t.y?t.y:0,t.w?t.w:C.width,t.h?t.h:C.height)["data"]}catch(D){return false}var x=(t.w?t.w:C.width*t.h?t.h:C.height)||B.length,z={},G="",F=[],h={dominant:{name:"",count:0}};var A=0;while(A<x){F[0]=B[A];F[1]=B[A+1];F[2]=B[A+2];G=F.join(",");if(G in z){z[G]=z[G]+1}else{z[G]=1}if(w.indexOf(["rgb(",G,")"].join(""))===-1){var H=z[G];if(H>h.dominant.count){h.dominant.name=G;h.dominant.count=H}}A+=E*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_glass_parallax(d,l,m){var f=jQuery;var i=f(this);var j=d.parallax||0.25;var k=f("<div>").css({position:"absolute",display:"none",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_glass_parallax").appendTo(m);var h=!d.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(h){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(q){h=0}}function t(e){return Math.round(e*1000)/1000}var u=f("<div>").css({position:"absolute",left:0,top:0,overflow:"hidden",width:"100%",height:"100%",transform:"translate3d(0,0,0)",zIndex:1}).appendTo(k);var s=u.clone().appendTo(k);var r=u.clone().css({width:"20%"}).appendTo(k);var c;var p=u.clone().appendTo(k).css({zIndex:0});this.go=function(C,A,x){var e=f(l.get(A));e={position:"absolute",width:e.width(),height:e.height(),marginTop:e.css("marginTop"),marginLeft:e.css("marginLeft")};x=x?1:-1;var E=f(l.get(A)).clone().css(e).appendTo(u);var z=f(l.get(C)).clone().css(e).appendTo(s);var v=f(l.get(C)).clone().css(e).appendTo(r);if(x==-1){r.css({left:"auto",right:0});v.css({left:"auto",right:0})}else{r.css({left:0,right:"auto"});v.css({left:0,right:"auto"})}var D=(m.width()||d.width)*1.3;var B=m.height()||d.height;var y;if(h){if(!c){c=f("<canvas>").css({position:"absolute",left:0,top:0}).attr({width:e.width,height:e.height}).appendTo(p)}c.css(e).attr({width:e.width,height:e.height});y=o(f(l.get(C)),e,10,c.get(0))}if(!h||!y){h=0}wowAnimate(function(G){G=f.easing.swing(G);var L=t(x*G*D),F=t(x*(-D+G*D-(1-G)*D*0.2)),J=t(x*(-D*1.4+G*(D*1.4+D/1.3))),w=t(-x*D*j*G),H=t(x*D*j*(1-G)),I=t(-x*D*(j+0.2)*G),K=t(x*(-D*0.2+G*D*0.4));if(d.support.transform){u.css("transform","translate3d("+L+"px,0,0)");E.css("transform","translate3d("+w+"px,0,0)");s.css("transform","translate3d("+F+"px,0,0)");z.css("transform","translate3d("+H+"px,0,0)");r.css("transform","translate3d("+J+"px,0,0)");v.css("transform","scale(1.6) translate3d("+I+"px,0,0)");p.css("transform","translate3d("+K+"px,0,0)")}else{u.css("left",L);E.css("margin-left",w);s.css("left",F);z.css("margin-left",H);r.css("left",J);v.css("margin-left",I);p.css("left",K)}},0,1,d.duration,function(){k.hide();E.remove();z.remove();v.remove();i.trigger("effectEnd")})};function o(C,A,B,v){var F=(parseInt(C.parent().css("z-index"))||0)+1;if(h){var I=v.getContext("2d");I.drawImage(C.get(0),0,0,A.width,A.height);if(!a(I,0,0,v.width,v.height,B)){return 0}return f(v)}var J=f("<div></div>").css({position:"absolute","z-index":F,left:0,top:0}).css(A).appendTo(v);var H=(Math.sqrt(5)+1)/2;var w=1-H/2;for(var z=0;w*z<B;z++){var D=Math.PI*H*z;var e=(w*z+1);var G=e*Math.cos(D);var E=e*Math.sin(D);f(document.createElement("img")).attr("src",C.attr("src")).css({opacity:1/(z/1.8+1),position:"absolute","z-index":F,left:Math.round(G)+"px",top:Math.round(E)+"px",width:"100%",height:"100%"}).appendTo(J)}return J}var g=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var n=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function a(am,U,S,v,w,ad){if(isNaN(ad)||ad<1){return}ad|=0;var ah;try{ah=am.getImageData(U,S,v,w)}catch(al){console.log("error:unable to access image data: "+al);return false}var C=ah.data;var ab,aa,aj,ag,J,M,G,A,B,R,H,T,P,X,ac,K,F,L,N,W;var ak=ad+ad+1;var Y=v<<2;var I=v-1;var af=w-1;var E=ad+1;var ae=E*(E+1)/2;var V=new b();var Q=V;for(aj=1;aj<ak;aj++){Q=Q.next=new b();if(aj==E){var D=Q}}Q.next=V;var ai=null;var Z=null;G=M=0;var O=g[ad];var z=n[ad];for(aa=0;aa<w;aa++){X=ac=K=A=B=R=0;H=E*(F=C[M]);T=E*(L=C[M+1]);P=E*(N=C[M+2]);A+=ae*F;B+=ae*L;R+=ae*N;Q=V;for(aj=0;aj<E;aj++){Q.r=F;Q.g=L;Q.b=N;Q=Q.next}for(aj=1;aj<E;aj++){ag=M+((I<aj?I:aj)<<2);A+=(Q.r=(F=C[ag]))*(W=E-aj);B+=(Q.g=(L=C[ag+1]))*W;R+=(Q.b=(N=C[ag+2]))*W;X+=F;ac+=L;K+=N;Q=Q.next}ai=V;Z=D;for(ab=0;ab<v;ab++){C[M]=(A*O)>>z;C[M+1]=(B*O)>>z;C[M+2]=(R*O)>>z;A-=H;B-=T;R-=P;H-=ai.r;T-=ai.g;P-=ai.b;ag=(G+((ag=ab+ad+1)<I?ag:I))<<2;X+=(ai.r=C[ag]);ac+=(ai.g=C[ag+1]);K+=(ai.b=C[ag+2]);A+=X;B+=ac;R+=K;ai=ai.next;H+=(F=Z.r);T+=(L=Z.g);P+=(N=Z.b);X-=F;ac-=L;K-=N;Z=Z.next;M+=4}G+=v}for(ab=0;ab<v;ab++){ac=K=X=B=R=A=0;M=ab<<2;H=E*(F=C[M]);T=E*(L=C[M+1]);P=E*(N=C[M+2]);A+=ae*F;B+=ae*L;R+=ae*N;Q=V;for(aj=0;aj<E;aj++){Q.r=F;Q.g=L;Q.b=N;Q=Q.next}J=v;for(aj=1;aj<=ad;aj++){M=(J+ab)<<2;A+=(Q.r=(F=C[M]))*(W=E-aj);B+=(Q.g=(L=C[M+1]))*W;R+=(Q.b=(N=C[M+2]))*W;X+=F;ac+=L;K+=N;Q=Q.next;if(aj<af){J+=v}}M=ab;ai=V;Z=D;for(aa=0;aa<w;aa++){ag=M<<2;C[ag]=(A*O)>>z;C[ag+1]=(B*O)>>z;C[ag+2]=(R*O)>>z;A-=H;B-=T;R-=P;H-=ai.r;T-=ai.g;P-=ai.b;ag=(ab+(((ag=aa+E)<af?ag:af)*v))<<2;A+=(X+=(ai.r=C[ag]));B+=(ac+=(ai.g=C[ag+1]));R+=(K+=(ai.b=C[ag+2]));ai=ai.next;H+=(F=Z.r);T+=(L=Z.g);P+=(N=Z.b);X-=F;ac-=L;K-=N;Z=Z.next;M+=v}}am.putImageData(ah,U,S);return true}function b(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"shift,cube_over,bubbles,glass_parallax",prev:"",next:"",duration:20*100,delay:20*100,width:740,height:360,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:false,loop:false,bullets:0,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});