(function(){"use strict";var a=function(){function a(a,b){function c(){this.constructor=a}c.prototype=b.prototype,a.prototype=new c}function b(a,b,c,d,e,f){this.message=a,this.expected=b,this.found=c,this.offset=d,this.line=e,this.column=f,this.name="SyntaxError"}function c(a){function c(b){function c(b,c,d){var e,f;for(e=c;d>e;e++)f=a.charAt(e),"\n"===f?(b.seenCR||b.line++,b.column=1,b.seenCR=!1):"\r"===f||"\u2028"===f||"\u2029"===f?(b.line++,b.column=1,b.seenCR=!0):(b.column++,b.seenCR=!1)}return Pb!==b&&(Pb>b&&(Pb=0,Qb={line:1,column:1,seenCR:!1}),c(Qb,Pb,b),Pb=b),Qb}function d(a){Rb>Nb||(Nb>Rb&&(Rb=Nb,Sb=[]),Sb.push(a))}function e(d,e,f){function g(a){var b=1;for(a.sort(function(a,b){return a.description<b.description?-1:a.description>b.description?1:0});b<a.length;)a[b-1]===a[b]?a.splice(b,1):b++}function h(a,b){function c(a){function b(a){return a.charCodeAt(0).toString(16).toUpperCase()}return a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(a){return"\\x0"+b(a)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(a){return"\\x"+b(a)}).replace(/[\u0180-\u0FFF]/g,function(a){return"\\u0"+b(a)}).replace(/[\u1080-\uFFFF]/g,function(a){return"\\u"+b(a)})}var d,e,f,g=new Array(a.length);for(f=0;f<a.length;f++)g[f]=a[f].description;return d=a.length>1?g.slice(0,-1).join(", ")+" or "+g[a.length-1]:g[0],e=b?'"'+c(b)+'"':"end of input","Expected "+d+" but "+e+" found."}var i=c(f),j=f<a.length?a.charAt(f):null;return null!==e&&g(e),new b(null!==d?d:h(e,j),e,j,f,i.line,i.column)}function f(){var a;return a=g()}function g(){var a,b,c;if(a=Nb,b=[],c=h(),c!==C)for(;c!==C;)b.push(c),c=h();else b=F;return b!==C&&(Ob=a,b=G(b)),a=b}function h(){var a;return a=j(),a===C&&(a=l()),a}function i(){var b,c,d,e,f,g;if(b=Nb,c=[],d=Nb,e=u(),e!==C?(f=z(),f!==C?(g=u(),g!==C?(e=[e,f,g],d=e):(Nb=d,d=F)):(Nb=d,d=F)):(Nb=d,d=F),d!==C)for(;d!==C;)c.push(d),d=Nb,e=u(),e!==C?(f=z(),f!==C?(g=u(),g!==C?(e=[e,f,g],d=e):(Nb=d,d=F)):(Nb=d,d=F)):(Nb=d,d=F);else c=F;return c!==C&&(Ob=b,c=H(c)),b=c,b===C&&(b=Nb,c=t(),c!==C&&(c=a.substring(b,Nb)),b=c),b}function j(){var a,b;return a=Nb,b=i(),b!==C&&(Ob=a,b=I(b)),a=b}function k(){var b,c,e;if(b=x(),b===C){if(b=Nb,c=[],J.test(a.charAt(Nb))?(e=a.charAt(Nb),Nb++):(e=C,0===Tb&&d(K)),e!==C)for(;e!==C;)c.push(e),J.test(a.charAt(Nb))?(e=a.charAt(Nb),Nb++):(e=C,0===Tb&&d(K));else c=F;c!==C&&(c=a.substring(b,Nb)),b=c}return b}function l(){var b,c,e,f,g,h,i,j,l;return b=Nb,123===a.charCodeAt(Nb)?(c=L,Nb++):(c=C,0===Tb&&d(M)),c!==C?(e=u(),e!==C?(f=k(),f!==C?(g=u(),g!==C?(h=Nb,44===a.charCodeAt(Nb)?(i=O,Nb++):(i=C,0===Tb&&d(P)),i!==C?(j=u(),j!==C?(l=m(),l!==C?(i=[i,j,l],h=i):(Nb=h,h=F)):(Nb=h,h=F)):(Nb=h,h=F),h===C&&(h=N),h!==C?(i=u(),i!==C?(125===a.charCodeAt(Nb)?(j=Q,Nb++):(j=C,0===Tb&&d(R)),j!==C?(Ob=b,c=S(f,h),b=c):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F),b}function m(){var a;return a=n(),a===C&&(a=o(),a===C&&(a=p())),a}function n(){var b,c,e,f,g,h,i;return b=Nb,a.substr(Nb,6)===T?(c=T,Nb+=6):(c=C,0===Tb&&d(U)),c===C&&(a.substr(Nb,4)===V?(c=V,Nb+=4):(c=C,0===Tb&&d(W)),c===C&&(a.substr(Nb,4)===X?(c=X,Nb+=4):(c=C,0===Tb&&d(Y)))),c!==C?(e=u(),e!==C?(f=Nb,44===a.charCodeAt(Nb)?(g=O,Nb++):(g=C,0===Tb&&d(P)),g!==C?(h=u(),h!==C?(i=z(),i!==C?(g=[g,h,i],f=g):(Nb=f,f=F)):(Nb=f,f=F)):(Nb=f,f=F),f===C&&(f=N),f!==C?(Ob=b,c=Z(c,f),b=c):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F),b}function o(){var b,c,e,f,g,h,i,j,k;if(b=Nb,a.substr(Nb,6)===$?(c=$,Nb+=6):(c=C,0===Tb&&d(_)),c!==C)if(e=u(),e!==C)if(44===a.charCodeAt(Nb)?(f=O,Nb++):(f=C,0===Tb&&d(P)),f!==C)if(g=u(),g!==C)if(h=s(),h===C&&(h=N),h!==C)if(i=u(),i!==C){if(j=[],k=r(),k!==C)for(;k!==C;)j.push(k),k=r();else j=F;j!==C?(Ob=b,c=ab(h,j),b=c):(Nb=b,b=F)}else Nb=b,b=F;else Nb=b,b=F;else Nb=b,b=F;else Nb=b,b=F;else Nb=b,b=F;else Nb=b,b=F;return b}function p(){var b,c,e,f,g,h,i;if(b=Nb,a.substr(Nb,6)===bb?(c=bb,Nb+=6):(c=C,0===Tb&&d(cb)),c!==C)if(e=u(),e!==C)if(44===a.charCodeAt(Nb)?(f=O,Nb++):(f=C,0===Tb&&d(P)),f!==C)if(g=u(),g!==C){if(h=[],i=r(),i!==C)for(;i!==C;)h.push(i),i=r();else h=F;h!==C?(Ob=b,c=db(h),b=c):(Nb=b,b=F)}else Nb=b,b=F;else Nb=b,b=F;else Nb=b,b=F;else Nb=b,b=F;return b}function q(){var b,c,e;return b=Nb,61===a.charCodeAt(Nb)?(c=eb,Nb++):(c=C,0===Tb&&d(fb)),c!==C?(e=x(),e!==C?(Ob=b,c=gb(e),b=c):(Nb=b,b=F)):(Nb=b,b=F),b===C&&(b=z()),b}function r(){var b,c,e,f,h,i,j,k,l;return b=Nb,c=u(),c!==C?(e=q(),e!==C?(f=u(),f!==C?(123===a.charCodeAt(Nb)?(h=L,Nb++):(h=C,0===Tb&&d(M)),h!==C?(i=u(),i!==C?(j=g(),j!==C?(k=u(),k!==C?(125===a.charCodeAt(Nb)?(l=Q,Nb++):(l=C,0===Tb&&d(R)),l!==C?(Ob=b,c=hb(e,j),b=c):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F),b}function s(){var b,c,e,f;return b=Nb,a.substr(Nb,7)===ib?(c=ib,Nb+=7):(c=C,0===Tb&&d(jb)),c!==C?(e=u(),e!==C?(f=x(),f!==C?(Ob=b,c=kb(f),b=c):(Nb=b,b=F)):(Nb=b,b=F)):(Nb=b,b=F),b}function t(){var b,c;if(Tb++,b=[],mb.test(a.charAt(Nb))?(c=a.charAt(Nb),Nb++):(c=C,0===Tb&&d(nb)),c!==C)for(;c!==C;)b.push(c),mb.test(a.charAt(Nb))?(c=a.charAt(Nb),Nb++):(c=C,0===Tb&&d(nb));else b=F;return Tb--,b===C&&(c=C,0===Tb&&d(lb)),b}function u(){var b,c,e;for(Tb++,b=Nb,c=[],e=t();e!==C;)c.push(e),e=t();return c!==C&&(c=a.substring(b,Nb)),b=c,Tb--,b===C&&(c=C,0===Tb&&d(ob)),b}function v(){var b;return pb.test(a.charAt(Nb))?(b=a.charAt(Nb),Nb++):(b=C,0===Tb&&d(qb)),b}function w(){var b;return rb.test(a.charAt(Nb))?(b=a.charAt(Nb),Nb++):(b=C,0===Tb&&d(sb)),b}function x(){var b,c,e,f,g,h;if(b=Nb,48===a.charCodeAt(Nb)?(c=tb,Nb++):(c=C,0===Tb&&d(ub)),c===C){if(c=Nb,e=Nb,vb.test(a.charAt(Nb))?(f=a.charAt(Nb),Nb++):(f=C,0===Tb&&d(wb)),f!==C){for(g=[],h=v();h!==C;)g.push(h),h=v();g!==C?(f=[f,g],e=f):(Nb=e,e=F)}else Nb=e,e=F;e!==C&&(e=a.substring(c,Nb)),c=e}return c!==C&&(Ob=b,c=xb(c)),b=c}function y(){var b,c,e,f,g,h,i,j;return yb.test(a.charAt(Nb))?(b=a.charAt(Nb),Nb++):(b=C,0===Tb&&d(zb)),b===C&&(b=Nb,a.substr(Nb,2)===Ab?(c=Ab,Nb+=2):(c=C,0===Tb&&d(Bb)),c!==C&&(Ob=b,c=Cb()),b=c,b===C&&(b=Nb,a.substr(Nb,2)===Db?(c=Db,Nb+=2):(c=C,0===Tb&&d(Eb)),c!==C&&(Ob=b,c=Fb()),b=c,b===C&&(b=Nb,a.substr(Nb,2)===Gb?(c=Gb,Nb+=2):(c=C,0===Tb&&d(Hb)),c!==C&&(Ob=b,c=Ib()),b=c,b===C&&(b=Nb,a.substr(Nb,2)===Jb?(c=Jb,Nb+=2):(c=C,0===Tb&&d(Kb)),c!==C?(e=Nb,f=Nb,g=w(),g!==C?(h=w(),h!==C?(i=w(),i!==C?(j=w(),j!==C?(g=[g,h,i,j],f=g):(Nb=f,f=F)):(Nb=f,f=F)):(Nb=f,f=F)):(Nb=f,f=F),f!==C&&(f=a.substring(e,Nb)),e=f,e!==C?(Ob=b,c=Lb(e),b=c):(Nb=b,b=F)):(Nb=b,b=F))))),b}function z(){var a,b,c;if(a=Nb,b=[],c=y(),c!==C)for(;c!==C;)b.push(c),c=y();else b=F;return b!==C&&(Ob=a,b=Mb(b)),a=b}var A,B=arguments.length>1?arguments[1]:{},C={},D={start:f},E=f,F=C,G=function(a){return{type:"messageFormatPattern",elements:a}},H=function(a){var b,c,d,e,f,g="";for(b=0,d=a.length;d>b;b+=1)for(e=a[b],c=0,f=e.length;f>c;c+=1)g+=e[c];return g},I=function(a){return{type:"messageTextElement",value:a}},J=/^[^ \t\n\r,.+={}#]/,K={type:"class",value:"[^ \\t\\n\\r,.+={}#]",description:"[^ \\t\\n\\r,.+={}#]"},L="{",M={type:"literal",value:"{",description:'"{"'},N=null,O=",",P={type:"literal",value:",",description:'","'},Q="}",R={type:"literal",value:"}",description:'"}"'},S=function(a,b){return{type:"argumentElement",id:a,format:b&&b[2]}},T="number",U={type:"literal",value:"number",description:'"number"'},V="date",W={type:"literal",value:"date",description:'"date"'},X="time",Y={type:"literal",value:"time",description:'"time"'},Z=function(a,b){return{type:a+"Format",style:b&&b[2]}},$="plural",_={type:"literal",value:"plural",description:'"plural"'},ab=function(a,b){return{type:"pluralFormat",offset:a||0,options:b}},bb="select",cb={type:"literal",value:"select",description:'"select"'},db=function(a){return{type:"selectFormat",options:a}},eb="=",fb={type:"literal",value:"=",description:'"="'},gb=function(a){return a},hb=function(a,b){return{type:"optionalFormatPattern",selector:a,value:b}},ib="offset:",jb={type:"literal",value:"offset:",description:'"offset:"'},kb=function(a){return a},lb={type:"other",description:"whitespace"},mb=/^[ \t\n\r]/,nb={type:"class",value:"[ \\t\\n\\r]",description:"[ \\t\\n\\r]"},ob={type:"other",description:"optionalWhitespace"},pb=/^[0-9]/,qb={type:"class",value:"[0-9]",description:"[0-9]"},rb=/^[0-9a-f]/i,sb={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},tb="0",ub={type:"literal",value:"0",description:'"0"'},vb=/^[1-9]/,wb={type:"class",value:"[1-9]",description:"[1-9]"},xb=function(a){return parseInt(a,10)},yb=/^[^{}\\\0-\x1F \t\n\r]/,zb={type:"class",value:"[^{}\\\\\\0-\\x1F \\t\\n\\r]",description:"[^{}\\\\\\0-\\x1F \\t\\n\\r]"},Ab="\\#",Bb={type:"literal",value:"\\#",description:'"\\\\#"'},Cb=function(){return"\\#"},Db="\\{",Eb={type:"literal",value:"\\{",description:'"\\\\{"'},Fb=function(){return"{"},Gb="\\}",Hb={type:"literal",value:"\\}",description:'"\\\\}"'},Ib=function(){return"}"},Jb="\\u",Kb={type:"literal",value:"\\u",description:'"\\\\u"'},Lb=function(a){return String.fromCharCode(parseInt(a,16))},Mb=function(a){return a.join("")},Nb=0,Ob=0,Pb=0,Qb={line:1,column:1,seenCR:!1},Rb=0,Sb=[],Tb=0;if("startRule"in B){if(!(B.startRule in D))throw new Error("Can't start parsing from rule \""+B.startRule+'".');E=D[B.startRule]}if(A=E(),A!==C&&Nb===a.length)return A;throw A!==C&&Nb<a.length&&d({type:"end",description:"end of input"}),e(null,Sb,Rb)}return a(b,Error),{SyntaxError:b,parse:c}}();"function"==typeof define&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:"undefined"!=typeof this&&(this.IntlMessageFormatParser=a)}).call(this);