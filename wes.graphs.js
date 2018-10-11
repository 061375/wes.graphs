var AreaChart=function(t){this.i=t.i,this.z=t.z,this.width=t.width,this.height=t.height,this.color=t.color,this.max=t.max,this.data=t.vals,this.updateint=t.updateint,this.updatecounter=0,this.animspeed=1,this.now=[];for(let t=0;t<this.data.length;t++)this.now[t]=this.height;if(void 0===t.getFunction)return console.log("Error: getFunction is a required parameter when in mode 0"),!1;this.getFunction=t.getFunction,void 0===t.getParams?this.getParams={}:this.getParams=t.getParams};AreaChart.prototype.loop=function(){this.updatecounter++,this.updatecounter>=this.updateint?(this.updatecounter=0,this.get(this.getFunction,this.getParams)):(this.makedata(this.data,!0),this.draw(this.drawdata))},AreaChart.prototype.push=function(t){this.data=t},AreaChart.prototype.get=function(t,i){"function"==typeof t&&t(i).then(t=>{this.data=t})},AreaChart.prototype.makedata=function(t,i){let e,h=0,s=(this.width-h)/(t.length-1);this.drawdata=[[h,this.height]];for(let a=0;a<t.length;a++)i?(this.now[a]+this.animspeed>this.height-t[a]/this.max&&(this.now[a]-=this.animspeed),this.now[a]-this.animspeed<this.height-t[a]/this.max&&(this.now[a]+=this.animspeed),e=[h,this.now[a]]):e=[h,this.height-t[a]/this.max],this.drawdata.push(e),h+=s;return this.drawdata.push([h-s,this.height]),this.drawdata},AreaChart.prototype.draw=function(t){$w.canvas.polygon(this.i,t,this.color,"fill",this.color,.1),$w.canvas.polygon(this.i,t,"#000","stroke","#000",1),$w.canvas.polygon(this.i,t,"#000","stroke","#000",1),$w.canvas.polygon(this.i,t,"#000","stroke","#000",1)};var barGraphHorizontal=function(t){if(this.i=t.i,this.text=t.text,this.max=t.max,this.values=t.values,this.val=t.val,this.width=t.width,this.height=t.height,this.z=t.z,this.color=t.color,this.bheight=this.height/this.values,this.x=0,this.y=this.bheight*this.z,this.bwidth=this.val/this.max,this.now=this.width,this.updateint=t.updateint,this.updatecounter=0,this.animspeed=1,this.mode=0,void 0!==t.mode&&(this.mode=t.mode),0==this.mode){if(void 0===t.getFunction)return console.log("Error: getFunction is a required parameter when in mode 0"),!1;this.getFunction=t.getFunction,void 0===t.getParams?this.getParams={}:this.getParams=t.getParams}};barGraphHorizontal.prototype.loop=function(){this.updatecounter++,this.updatecounter>=this.updateint?(this.updatecounter=0,this.get(this.getFunction,this.getParams)):(this.now+this.animspeed>this.bwidth&&(this.now-=this.animspeed),this.now-this.animspeed<this.bwidth&&(this.now+=this.animspeed),this.draw())},barGraphHorizontal.prototype.get=function(t,i){"function"==typeof t&&t(i).then(t=>{this.val=t.toFixed(2),this.bwidth=this.val,this.bwidth=this.val/this.max})},barGraphHorizontal.prototype.push=function(t){this.val=t.toFixed(2),this.bwidth=this.val,this.bwidth=this.val/this.max},barGraphHorizontal.prototype.draw=function(){$w.canvas.rectangle(this.i,this.x,this.y,this.now,this.x+this.bheight,this.color,"fill",this.color),$w.canvas.line(this.i,this.x,this.y+this.bheight,this.width,this.y+this.bheight,"#ccc"),$w.canvas.text(this.i,this.x+21,this.y+this.bheight/3*2+1,this.text+": "+this.val,"stroke","20px Arial","#000")};var barGraphVertical=function(t){if(this.i=t.i,this.text=t.text,this.max=t.max,this.values=t.values,this.val=t.val,this.width=t.width,this.height=t.height,this.z=t.z,this.color=t.color,this.bwidth=this.width/this.values,this.x=this.bwidth*this.z,this.y=0,this.bheight=this.val/this.max,this.now=this.height,this.updateint=t.updateint,this.updatecounter=0,this.animspeed=1,void 0===t.getFunction)return console.log("Error: getFunction is a required parameter when in mode 0"),!1;this.getFunction=t.getFunction,void 0===t.getParams?this.getParams={}:this.getParams=t.getParams};barGraphVertical.prototype.loop=function(){if(this.updatecounter++,this.updatecounter>=this.updateint)this.updatecounter=0,this.get(this.getFunction,this.getParams);else{let t=this.height-this.bheight+10;this.now+this.animspeed>t&&(this.now-=this.animspeed),this.now-this.animspeed<t&&(this.now+=this.animspeed),this.draw()}},barGraphVertical.prototype.get=function(t,i){"function"==typeof t&&t(i).then(t=>{this.val=t.toFixed(2),this.bheight=this.val,this.bheight=this.val/this.max})},barGraphVertical.prototype.draw=function(){let t=this.x,i=this.now,e=this.bwidth,h=this.height;$w.canvas.rectangle(this.i,t,i,e,h,this.color,"fill",this.color)};var Graphs=function(){var t,i,e=["#3366cc","#fdab3d","#db4437","#008000","#ffff00","#ffd700","#808000","#7e077e","#197f7e","#30ccd2","#eff0f1","#3dfdff","#ff158a","#e2445c","#1ec875","#dd4b39","#579bfc","#7a6eff","#ffa500","#154096"],h=function(t,i){let e=[];if(void 0!==$w.objects[i])for(let h in $w.objects[i])$w.objects[i].hasOwnProperty(h)&&$w.objects[i][h].i==t&&e.push(h);return e};return{init:function(e,h){t=e,i=h},horizBarGraph:function(s,a,o){let r=document.createElement("h2");r.innerHTML=a,r.setAttribute("id","graphtitle_0"),s.appendChild(r);let n,d=i-document.getElementById("graphtitle_0").scrollHeight-10,l=0;for(let t=0;t<o.data.length;t++)l<o.data[t].val&&(l=o.data[t].val);l/=t;for(let i=0;i<o.data.length;i++)0==i?n=$w.add_object_single(1,barGraphHorizontal,{text:o.data[i].text,val:o.data[i].val,max:l,width:t,height:d,color:e[i],values:o.data.length,updateint:o.updateint,getFunction:o.getFunction,getParams:o.getParams,mode:o.mode},s,t,d):$w.add_object_single(1,barGraphHorizontal,{text:o.data[i].text,val:o.data[i].val,max:l,width:t,height:d,color:e[i],values:o.data.length,updateint:o.updateint,getFunction:o.getFunction,getParams:o.getParams,mode:o.mode},n,t,d);return $w.loop(!0,n),h(n,"barGraphHorizontal")},verticalBarGraph:function(h,s,a){let o=document.createElement("h2");o.innerHTML=s,o.setAttribute("id","vgraphtitle_0"),h.appendChild(o);let r,n=i-document.getElementById("vgraphtitle_0").scrollHeight-10,d=0;for(let t=0;t<a.data.length;t++)d<a.data[t].val&&(d=a.data[t].val);d>n?d/=n:d=n;for(let i=0;i<a.data.length;i++)0==i?r=$w.add_object_single(1,barGraphVertical,{text:a.data[i].text,val:a.data[i].val,max:d,width:t,height:n,color:e[i],values:a.data.length,updateint:a.data.updateint,getFunction:a.getFunction,getParams:a.getParams},h,t,n):$w.add_object_single(1,barGraphVertical,{text:a.data[i].text,val:a.data[i].val,max:d,width:t,height:n,color:e[i],values:a.data.length,updateint:a.updateint,getFunction:a.getFunction,getParams:a.getParams},r,t,n);$w.loop(!0,r)},posLiveDataStream:function(e,s,a){let o=document.createElement("h2");o.innerHTML=s,o.setAttribute("id","lgraphtitle_0"),e.appendChild(o);let r=i-document.getElementById("lgraphtitle_0").scrollHeight-10,n=$w.add_object_single(1,positiveLiveDataStream,{getFunction:a.getFunction,getParams:a.getParams,updateint:a.updateint,width:t,height:r,linecolor:a.linecolor,textcolor:a.textcolor,xmin:a.xmin,data:a.data},e,t,r);return $w.loop(!0,n),h(n,"posLiveDataStream")},livDataStream:function(e,h,s){let a=document.createElement("h2");a.innerHTML=h,a.setAttribute("id","lgraphtitle_0"),e.appendChild(a);let o=i-document.getElementById("lgraphtitle_0").scrollHeight-10,r=$w.add_object_single(1,liveDataStream,{getFunction:s.getFunction,getParams:s.getParams,updateint:s.updateint,width:t,height:o,data:s.data},e,t,o);$w.loop(!0,r)},areaChart:function(h,s,a){let o=document.createElement("h2");o.innerHTML=s,o.setAttribute("id","acharttitle_0"),h.appendChild(o);let r,n=i-document.getElementById("acharttitle_0").scrollHeight-10,d=0;for(let t=0;t<a.data.length;t++)for(let i=0;i<a.data[t].vals.length;i++)d<a.data[t].vals[i]&&(d=a.data[t].vals[i]);d>n?d/=n:d=n;for(let i=0;i<a.data.length;i++)0==i?r=$w.add_object_single(1,AreaChart,{getFunction:a.getFunction,getParams:a.getParams,updateint:a.updateint,text:a.data[i].text,vals:a.data[i].vals,max:d,width:t,height:n,color:e[i]},h,t,n):$w.add_object_single(1,AreaChart,{getFunction:a.getFunction,getParams:a.getParams,updateint:a.updateint,text:a.data[i].text,vals:a.data[i].vals,max:d,width:t,height:n,color:e[i]},r,t,n);$w.loop(!0,r)},pieChart:function(s,a,o){let r=document.createElement("h2");r.innerHTML=a,r.setAttribute("id","pcharttitle_0"),s.appendChild(r);let n=i-document.getElementById("pcharttitle_0").scrollHeight-10,d=$w.add_object_single(1,PieChart,{width:t,height:n,data:o.data,colors:e},s,t,n);return $w.loop(!0,d),h(d,"PieChart")},pressureSpeedo:function(e,s,a){let o=document.createElement("h2");o.innerHTML=s,o.setAttribute("id","pspeedotitle_0"),e.appendChild(o);let r=i-document.getElementById("pspeedotitle_0").scrollHeight-10;$w.add_object(1,PressureSpeedoGauge,{width:t,height:r,divisor:a.divisor,shownumbers:a.shownumbers,maxp:a.maxp,warning:a.warning,danger:a.danger,ringgauge:a.ringgauge,glinesize:a.glinesize,gbackground:a.gbackground,glinecolor:a.glinecolor,size:a.size},e,t,r);let n=$w.add_object_single(1,PressureSpeedo,{getFunction:a.getFunction,getParams:a.getParams,updateint:a.updateint,width:t,height:r,rspeed:a.rspeed,maxp:a.maxp,measure:a.measure,data:0,mode:a.mode,size:a.size,mpos:a.mpos,mcolor:a.mcolor,msize:a.msize},e,t,r);return $w.loop(!0,n),h(n,"PressureSpeedo")},setPushData:function(t,i,e){switch(i){case"pressureSpeedo":i="PressureSpeedo";break;case"areaChart":i="AreaChart";break;case"livDataStream":i="liveDataStream";break;case"posLiveDataStream":i="positiveLiveDataStream";break;case"verticalBarGraph":i="barGraphVertical";break;case"horizBarGraph":i="barGraphHorizontal";break;case"pieChart":i="PieChart"}if(void 0!==$w.objects[i])for(let h in $w.objects[i])$w.objects[i].hasOwnProperty(h)&&$w.objects[i][h].z==t&&$w.objects[i][h].push(e)},getZvalues:h}}(),liveDataStream=function(t){if(this.i=t.i,this.height=t.height,this.width=t.width,this.updateint=t.updateint,this.updatecounter=0,this.updategraph=!1,this.maxdatalength=this.width-100,void 0===t.data)this.data=[];else{let i=JSON.stringify(t.data);this.data=JSON.parse(i)}if(void 0===t.getFunction)return console.log("Error: getFunction is a required parameter when in mode 0"),!1;this.getFunction=t.getFunction,void 0===t.getParams?this.getParams={}:this.getParams=t.getParams};liveDataStream.prototype.loop=function(){this.updatecounter++,this.updatecounter>=this.updateint?(this.updatecounter=0,this.get(this.getFunction,this.getParams)):this.draw(this.data)},liveDataStream.prototype.add=function(t){this.data.push(t),this.data.length>this.maxdatalength&&this.data.shift()},liveDataStream.prototype.push=function(t){this.add(t)},liveDataStream.prototype.get=function(t,i){"function"==typeof t&&t(i).then(t=>{this.add(t)})},liveDataStream.prototype.draw=function(t){let i=0,e=0,h=0;for(let s=0;s<t.length;s++)t[s]>e&&(e=t[s]),t[s]<h&&(h=t[s]),i=t[s];let s=e;h<0&&(s+=-h);let a=s/this.height;for(let i=0;i<t.length;i++){let e,h=i+100,s=i+100;e=t[i]>0?this.height/2-t[i]/a:this.height-this.height/2+Math.abs(t[i]/a);let o=this.height/2;$w.canvas.line(this.i,h,e,s,o)}$w.canvas.text(this.i,5,10,"max: "+e.toFixed(2),"fill","10px Arial","#000"),$w.canvas.text(this.i,5,this.height/3*2,"min: "+h.toFixed(2),"fill","10px Arial","#000"),$w.canvas.text(this.i,5,this.height-10,"current: "+i.toFixed(2),"fill","10px Arial","#000")};var PieChart=function(t){this.i=t.i,this.z=t.z,this.width=t.width,this.height=t.height,this.max=t.max,this.data=t.data,this.colors=t.colors,this.total=this.gettotal(this.data),this.draw(this.data)};PieChart.prototype.loop=function(){this.total=this.gettotal(this.data),this.draw(this.data)},PieChart.prototype.push=function(t){this.data=t},PieChart.prototype.gettotal=function(t){let i=0;for(let e=0;e<t.length;e++)i+=t[e];return i},PieChart.prototype.draw=function(t){let i=0;for(let e=0;e<t.length;e++)$w.canvas.arc(this.i,this.width/2,this.height/2,this.width/3,i,i+2*Math.PI*(t[e]/this.total),!1,this.colors[e],"fill"),i+=2*Math.PI*(t[e]/this.total)};var positiveLiveDataStream=function(t){if(this.i=t.i,this.height=t.height,this.width=t.width,this.bool=!1,this.updateint=t.updateint,this.updatecounter=0,this.updategraph=!1,void 0===t.xmin?this.xmin=0:this.xmin=t.xmin,void 0===t.xmax?this.xmax=0:this.xmax=t.xmax,this.maxdatalength=this.width-this.xmin-this.xmax,void 0===t.ymin?this.ymin=50:this.ymin=t.ymin,this.height-=this.ymin,void 0===t.linecolor?this.linecolor="#ffffff":this.linecolor=t.linecolor,void 0===t.textcolor?this.textcolor="#ffffff":this.textcolor=t.textcolor,void 0===t.maxx?this.maxx=this.width/20:this.maxx=t.maxx,void 0===t.maxy?this.maxy=this.height+40:this.maxy=t.maxy,void 0===t.measure?this.measure="C":this.measure=t.measure,void 0===t.msize?this.msize="20px":this.measure=t.msize,void 0===t.currentx?this.currentx=this.width/2+this.width/20:this.currentx=t.currentx,void 0===t.currenty?this.currenty=this.height+40:this.currenty=t.currenty,void 0===t.data)this.data=[];else{let i=JSON.stringify(t.data);this.data=JSON.parse(i)}if(void 0===t.getFunction)return console.log("Error: getFunction is a required parameter when in mode 0"),!1;this.getFunction=t.getFunction,void 0===t.getParams?this.getParams={}:this.getParams=t.getParams};positiveLiveDataStream.prototype.loop=function(){this.updatecounter++,this.updatecounter>=this.updateint?(this.updatecounter=0,this.get(this.getFunction,this.getParams)):this.draw(this.data)},positiveLiveDataStream.prototype.add=function(t){this.data.push(t),this.data.length>this.maxdatalength&&this.data.shift()},positiveLiveDataStream.prototype.push=function(t){this.add(t)},positiveLiveDataStream.prototype.get=function(t,i){"function"==typeof t&&t(i).then(t=>{this.add(t)})},positiveLiveDataStream.prototype.draw=function(t){let i=0,e=0,h=0;for(let s=0;s<t.length;s++)t[s]>e&&(e=t[s]),t[s]<h&&(h=t[s]),i=t[s];let s=(e+=h)/this.height;for(let i=0;i<t.length;i++){let e=i+this.xmin,h=this.height-t[i]/s,a=i+this.xmin,o=this.height;$w.canvas.line(this.i,e,h,a,o,this.linecolor)}$w.canvas.text(this.i,this.maxx,this.maxy,"max: "+e.toFixed(2)+" "+this.measure,"fill",this.msize+" Arial",this.textcolor),$w.canvas.text(this.i,this.currentx,this.currenty,"current: "+i.toFixed(2)+" "+this.measure,"fill",this.msize+" Arial",this.textcolor)};var PressureSpeedo=function(t){if(this.i=t.i,this.z=t.z,this.width=t.width,this.height=t.height,this.hwidth=this.width/2,this.hheight=this.height/2,this.pspeed=0,this.rspeed=t.rspeed,this.real=t.data,this.tpspeed=t.real/360,this.updateint=t.updateint,this.updatecounter=0,void 0===t.maxp?this.maxp=500:this.maxp=t.maxp,void 0===t.measure?this.measure="psi":this.measure=t.measure,void 0===t.size?this.size=this.width/2-20:this.size=t.size,void 0===t.mpos?this.mpos={x:this.width/2-60,y:this.height/3*2}:this.mpos=t.mpos,void 0===t.mcolor?this.mcolor="#ffffff":this.mcolor=t.mcolor,void 0===t.msize?this.msize="30px":this.msize=t.msize,this.mode=0,void 0!==t.mode&&(this.mode=t.mode),0==this.mode){if(void 0===t.getFunction)return console.log("Error: getFunction is a required parameter when in mode 0"),!1;this.getFunction=t.getFunction,void 0===t.getParams?this.getParams={}:this.getParams=t.getParams,this.getParams.maxp=this.maxp}};PressureSpeedo.prototype.loop=function(){this.updatecounter++,this.updatecounter>=this.updateint?(this.updatecounter=0,this.get(this.getFunction,this.getParams)):(this.pspeed+this.rspeed>this.tpspeed&&(this.pspeed-=this.rspeed),this.pspeed-this.rspeed<this.tpspeed&&(this.pspeed+=this.rspeed)),this.draw()},PressureSpeedo.prototype.get=function(t,i){"function"==typeof t&&t(i).then(t=>{this.real=t,this.calc(t)})},PressureSpeedo.prototype.push=function(t){this.real=t,this.calc(t)},PressureSpeedo.prototype.calc=function(t){let i=this.maxp/360;this.tpspeed=t/i},PressureSpeedo.prototype.trig=function(t,i,e,h){e<0&&(e+=360),e>360&&(e-=360);let s=$w.math.radians(e);return{x:h*Math.cos(s)+t,y:h*Math.sin(s)+i}},PressureSpeedo.prototype.drawmeasure=function(){$w.canvas.text(this.i,this.mpos.x,this.mpos.y,this.real.toFixed(2)+" "+this.measure,"fill",this.msize+" Arial",this.mcolor)},PressureSpeedo.prototype.drawneedle=function(){$w.canvas.circle(this.i,this.hwidth,this.hheight,10);let t=this.trig(this.hwidth,this.hheight,this.pspeed-90,10),i=this.trig(this.hwidth,this.hheight,this.pspeed+90,10),e=this.trig(this.hwidth,this.hheight,this.pspeed,this.size-30);$w.canvas.polygon(this.i,[[t.x,t.y],[i.x,i.y],[e.x,e.y]],"#000000","fill")},PressureSpeedo.prototype.draw=function(t){this.drawmeasure(),this.drawneedle()};var PressureSpeedoGauge=function(t){this.i=t.i,this.width=t.width,this.height=t.height,this.hwidth=this.width/2,this.hheight=this.height/2,void 0===t.maxp?this.maxp=500:this.maxp=t.maxp,void 0===t.warning?this.warning=[375,458]:this.warning=t.warning,void 0===t.danger?this.danger=[458,500]:this.danger=t.danger,void 0===t.gcolor?this.gcolor="#000000":this.gcolor=t.gcolor,void 0===t.divisor?this.divisor=12:this.divisor=t.divisor,void 0===t.glinesize?this.glinesize=10:this.glinesize=t.glinesize,void 0===t.glineweight?this.glineweight=1:this.glineweight=t.glineweight,void 0===t.glinecolor?this.glinecolor="#000000":this.glinecolor=t.glinecolor,void 0===t.shownumbers?this.shownumbers=!1:this.shownumbers=t.shownumbers,void 0===t.ringgauge?this.ringgauge=!0:this.ringgauge=t.ringgauge,void 0===t.gbackground?this.gbackground=!1:this.gbackground=t.gbackground,void 0===t.size?this.size=this.height/2-20:this.size=t.size,this.gaugeinc=this.maxp/this.divisor,this.drawgauge()};PressureSpeedoGauge.prototype.loop=function(){},PressureSpeedoGauge.prototype.vtodegs=function(t){return t/this.maxp*360},PressureSpeedoGauge.prototype.makewarning=function(){s=this.vtodegs(this.warning[0]),e=this.vtodegs(this.warning[1]),$w.canvas.arc(this.i,this.hwidth,this.hheight,this.size-this.glinesize,$w.math.radians(s),$w.math.radians(e),!1,"#ffff00","fill")},PressureSpeedoGauge.prototype.makedanger=function(t,i){t=this.vtodegs(this.danger[0]),i=this.vtodegs(this.danger[1]),$w.canvas.arc(this.i,this.hwidth,this.hheight,this.size-this.glinesize,$w.math.radians(t),$w.math.radians(i),!1,"#ff0000","fill")},PressureSpeedoGauge.prototype.trig=function(t,i,e,h){e<0&&(e+=360),e>360&&(e-=360);let s=$w.math.radians(e);return{x:h*Math.cos(s)+t,y:h*Math.sin(s)+i}},PressureSpeedoGauge.prototype.drawgauge=function(){let t=0;0!=this.gbackground&&$w.canvas.circle(this.i,this.hwidth,this.hheight,this.size,this.gbackground),this.ringgauge&&$w.canvas.circle(this.i,this.hwidth,this.hheight,this.size,"#000000",1,"stroke"),this.makewarning(),this.makedanger();for(let i=0;i<360;i+=360/this.divisor){let e=this.trig(this.hwidth,this.hheight,i,this.size),h=this.trig(this.hwidth,this.hheight,i,this.size-this.glinesize);if($w.canvas.line(this.i,e.x,e.y,h.x,h.y,this.glinecolor,this.glineweight),this.shownumbers){let e=this.trig(this.hwidth-10,this.hheight,i,this.size+20);$w.canvas.text(this.i,e.x,e.y,Math.floor(t),"fill","10px Arial"),t+=this.gaugeinc}}};