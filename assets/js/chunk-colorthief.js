"use strict";(globalThis.webpackChunkweb_stories_wp=globalThis.webpackChunkweb_stories_wp||[]).push([[7498],{86078:(t,r,n)=>{if(n.r(r),n.d(r,{default:()=>a}),!o)var o={map:function(t,r){var n={};return r?t.map((function(t,o){return n.index=o,r.call(n,t)})):t.slice()},naturalOrder:function(t,r){return t<r?-1:t>r?1:0},sum:function(t,r){var n={};return t.reduce(r?function(t,o,e){return n.index=e,t+r.call(n,o)}:function(t,r){return t+r},0)},max:function(t,r){return Math.max.apply(null,r?o.map(t,r):t)}};var e=function(){function t(t,r,n){return(t<<10)+(r<<5)+n}function r(t){var r=[],n=!1;function o(){r.sort(t),n=!0}return{push:function(t){r.push(t),n=!1},peek:function(t){return n||o(),void 0===t&&(t=r.length-1),r[t]},pop:function(){return n||o(),r.pop()},size:function(){return r.length},map:function(t){return r.map(t)},debug:function(){return n||o(),r}}}function n(t,r,n,o,e,u,i){var a=this;a.r1=t,a.r2=r,a.g1=n,a.g2=o,a.b1=e,a.b2=u,a.histo=i}function e(){this.vboxes=new r((function(t,r){return o.naturalOrder(t.vbox.count()*t.vbox.volume(),r.vbox.count()*r.vbox.volume())}))}function u(r,n){if(n.count()){var e=n.r2-n.r1+1,u=n.g2-n.g1+1,i=o.max([e,u,n.b2-n.b1+1]);if(1==n.count())return[n.copy()];var a,c,s,f,h=0,l=[],v=[];if(i==e)for(a=n.r1;a<=n.r2;a++){for(f=0,c=n.g1;c<=n.g2;c++)for(s=n.b1;s<=n.b2;s++)f+=r[t(a,c,s)]||0;l[a]=h+=f}else if(i==u)for(a=n.g1;a<=n.g2;a++){for(f=0,c=n.r1;c<=n.r2;c++)for(s=n.b1;s<=n.b2;s++)f+=r[t(c,a,s)]||0;l[a]=h+=f}else for(a=n.b1;a<=n.b2;a++){for(f=0,c=n.r1;c<=n.r2;c++)for(s=n.g1;s<=n.g2;s++)f+=r[t(c,s,a)]||0;l[a]=h+=f}return l.forEach((function(t,r){v[r]=h-t})),function(t){var r,o,e,u,i,c=t+"1",s=t+"2",f=0;for(a=n[c];a<=n[s];a++)if(l[a]>h/2){for(e=n.copy(),u=n.copy(),i=(r=a-n[c])<=(o=n[s]-a)?Math.min(n[s]-1,~~(a+o/2)):Math.max(n[c],~~(a-1-r/2));!l[i];)i++;for(f=v[i];!f&&l[i-1];)f=v[--i];return e[s]=i,u[c]=e[s]+1,[e,u]}}(i==e?"r":i==u?"g":"b")}}return n.prototype={volume:function(t){var r=this;return r._volume&&!t||(r._volume=(r.r2-r.r1+1)*(r.g2-r.g1+1)*(r.b2-r.b1+1)),r._volume},count:function(r){var n=this,o=n.histo;if(!n._count_set||r){var e,u,i,a=0;for(e=n.r1;e<=n.r2;e++)for(u=n.g1;u<=n.g2;u++)for(i=n.b1;i<=n.b2;i++)a+=o[t(e,u,i)]||0;n._count=a,n._count_set=!0}return n._count},copy:function(){var t=this;return new n(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(r){var n=this,o=n.histo;if(!n._avg||r){var e,u,i,a,c=0,s=0,f=0,h=0;for(u=n.r1;u<=n.r2;u++)for(i=n.g1;i<=n.g2;i++)for(a=n.b1;a<=n.b2;a++)c+=e=o[t(u,i,a)]||0,s+=e*(u+.5)*8,f+=e*(i+.5)*8,h+=e*(a+.5)*8;n._avg=c?[~~(s/c),~~(f/c),~~(h/c)]:[~~(8*(n.r1+n.r2+1)/2),~~(8*(n.g1+n.g2+1)/2),~~(8*(n.b1+n.b2+1)/2)]}return n._avg},contains:function(t){var r=this,n=t[0]>>3;return gval=t[1]>>3,bval=t[2]>>3,n>=r.r1&&n<=r.r2&&gval>=r.g1&&gval<=r.g2&&bval>=r.b1&&bval<=r.b2}},e.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var r=this.vboxes,n=0;n<r.size();n++)if(r.peek(n).vbox.contains(t))return r.peek(n).color;return this.nearest(t)},nearest:function(t){for(var r,n,o,e=this.vboxes,u=0;u<e.size();u++)((n=Math.sqrt(Math.pow(t[0]-e.peek(u).color[0],2)+Math.pow(t[1]-e.peek(u).color[1],2)+Math.pow(t[2]-e.peek(u).color[2],2)))<r||void 0===r)&&(r=n,o=e.peek(u).color);return o},forcebw:function(){var t=this.vboxes;t.sort((function(t,r){return o.naturalOrder(o.sum(t.color),o.sum(r.color))}));var r=t[0].color;r[0]<5&&r[1]<5&&r[2]<5&&(t[0].color=[0,0,0]);var n=t.length-1,e=t[n].color;e[0]>251&&e[1]>251&&e[2]>251&&(t[n].color=[255,255,255])}},{quantize:function(i,a){if(!i.length||a<2||a>256)return!1;var c=function(r){var n,o=new Array(32768);return r.forEach((function(r){n=t(r[0]>>3,r[1]>>3,r[2]>>3),o[n]=(o[n]||0)+1})),o}(i);c.forEach((function(){}));var s=function(t,r){var o,e,u,i=1e6,a=0,c=1e6,s=0,f=1e6,h=0;return t.forEach((function(t){(o=t[0]>>3)<i?i=o:o>a&&(a=o),(e=t[1]>>3)<c?c=e:e>s&&(s=e),(u=t[2]>>3)<f?f=u:u>h&&(h=u)})),new n(i,a,c,s,f,h,r)}(i,c),f=new r((function(t,r){return o.naturalOrder(t.count(),r.count())}));function h(t,r){for(var n,o=t.size(),e=0;e<1e3;){if(o>=r)return;if(e++>1e3)return;if((n=t.pop()).count()){var i=u(c,n),a=i[0],s=i[1];if(!a)return;t.push(a),s&&(t.push(s),o++)}else t.push(n),e++}}f.push(s),h(f,.75*a);for(var l=new r((function(t,r){return o.naturalOrder(t.count()*t.volume(),r.count()*r.volume())}));f.size();)l.push(f.pop());h(l,a);for(var v=new e;l.size();)v.push(l.pop());return v}}}().quantize,u=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=t.naturalWidth,this.height=this.canvas.height=t.naturalHeight,this.context.drawImage(t,0,0,this.width,this.height)};u.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var a=function(){};a.prototype.getColor=function(t,r){return void 0===r&&(r=10),this.getPalette(t,5,r)[0]},a.prototype.getPalette=function(t,r,n){var o=function(t){var r=t.colorCount,n=t.quality;if(void 0!==r&&Number.isInteger(r)){if(1===r)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");r=Math.max(r,2),r=Math.min(r,20)}else r=10;return(void 0===n||!Number.isInteger(n)||n<1)&&(n=10),{colorCount:r,quality:n}}({colorCount:r,quality:n}),i=new u(t),a=function(t,r,n){for(var o,e,u,i,a,c=t,s=[],f=0;f<r;f+=n)e=c[0+(o=4*f)],u=c[o+1],i=c[o+2],(void 0===(a=c[o+3])||a>=125)&&(e>250&&u>250&&i>250||s.push([e,u,i]));return s}(i.getImageData().data,i.width*i.height,o.quality),c=e(a,o.colorCount);return c?c.palette():null},a.prototype.getColorFromUrl=function(t,r,n){var o=this,e=document.createElement("img");e.addEventListener("load",(function(){var u=o.getPalette(e,5,n);r(u[0],t)})),e.src=t},a.prototype.getImageData=function(t,r){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var n=new Array(i),o=0;o<t.length;o++)n[o]=String.fromCharCode(t[o]);var e=n.join(""),u=window.btoa(e);r("data:image/png;base64,"+u)}},n.send()},a.prototype.getColorAsync=function(t,r,n){var o=this;this.getImageData(t,(function(t){var e=document.createElement("img");e.addEventListener("load",(function(){var t=o.getPalette(e,5,n);r(t[0],this)})),e.src=t}))}}}]);