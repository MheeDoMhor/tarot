var e=function(e){for(var t,a=new Array(e),d=0;d<a.length;d++)a[d]=(void 0===(t=void 0)&&(t={}),{x:t.x||0,y:t.y||0,side:t.side||0,rotation:t.rotation||0});return a}(54),t=document.createElement("div");t.classList.add("cards"),document.body.appendChild(t),function(e,t){void 0===t&&(t={});for(var a=t.x||0,d=t.y||0,n=t.xOffset||t.offset||0,r=t.yOffset||t.offset||0,o=0;o<e.length;o++){var s=e[o];s.x=a-n*o,s.y=d-r*o}}(e,{offset:.25}),e.forEach((function(e){var a=document.createElement("div"),d=document.createElement("div");a.classList.add("card"),d.classList.add("card-back"),a.style.transform="translate("+e.x+"px, "+e.y+"px)",t.appendChild(a),a.appendChild(d)}));
