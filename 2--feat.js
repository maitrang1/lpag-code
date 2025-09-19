//feat   //slide verticle   
let featIval, featSlidActi;   const slidWrap=q('.slidVer1>.sv1'), mediItem=Q('.featMediItem'), featPbar=Q('.featPbar'), slidVer1=Array.from(slidWrap.children), slidFirs=q('.slidVer1>ul>li'), slideHeig=pr(slidFirs).h, wP=pr(q('.slidWrap.sv1')), feMd=wP.t+(wP.b-wP.t)/2;   sSt(slidWrap,-slideHeig+'px');   
const slidActi=(up,useAct,mid=feMd)=>{ let eleAct,sliAct; slidVer1.forEach((e)=>{cR(e);sSw(e);}); mediItem.forEach((e)=>{cR(e)}); featPbar.forEach((e)=>{cR(e)});   slidVer1.forEach((e)=>{ p=pr(e); if(p.t< mid && mid<p.b){ if(up>0){eleAct=e}else if(up<0){eleAct=e.nextElementSibling.nextElementSibling}else{eleAct=e.nextElementSibling} featSlidActi=eleAct.id; sliAct=qi(featSlidActi);cA(sliAct); mediItem.forEach((e)=>{ if(cC(e,featSlidActi)){cA(e)} }); if(!useAct){cA(q('.featPbar',sliAct));}   } }); }    
slidActi(0,false);   

//   slidFirsLast slidLastFirs slidUpup slidDown   
const slidFirsLast=()=>slidWrap.appendChild(slidWrap.firstElementChild),   slidLastFirs=()=>slidWrap.insertBefore(slidWrap.lastElementChild,slidWrap.firstElementChild),   slidUpup=()=>{slidActi(+1,true);sStstf(slidWrap);sStfty(slidWrap,slideHeig+'px');setTimeout(()=>{sSts(slidWrap)},350);setTimeout(()=>{slidLastFirs();sStfty(slidWrap)},400)},   slidDown=useAct=>{slidActi(-1,useAct);sStstf(slidWrap);sStfty(slidWrap,-slideHeig+'px');setTimeout(()=>{sSts(slidWrap)},350);setTimeout(()=>{slidFirsLast();sStfty(slidWrap)},400)};   
eq(q('.sv1Arr.Upp'),dBo9(()=>{clearInterval(featIval);slidUpup()}) );   eq(q('.sv1Arr.Dow'),dBo9(()=>{clearInterval(featIval);slidDown(true)}) );   

//slabi   //tap1Auto   
var tap1Ival, tap1Slab=q('#tap1Slab'), tap1Peri=9, tap1Cate=Q('.tap1Cate',tap1Slab), tap1Body=q('.tap1Body',tap1Slab), tap1Cont=Q('.tap1Cont',tap1Slab), tap1Pbar=q('.tap1Pba2',tap1Slab), htL=tap1Cate.length, i=Math.floor(Math.random()*htL);
const getOffsetTop=(elem)=>{ var offsetTop=0; while (elem){ offsetTop+=elem.offsetTop; elem=elem.offsetParent; } return offsetTop; }   
var tap1CateTopp=getOffsetTop(tap1Cate[i]), tap1BodyTopp=getOffsetTop(tap1Body), tap1CateBody=tap1BodyTopp-tap1CateTopp, tap1CateHeig=tap1Cate[i].offsetHeight, 
tap1CateBott=parseFloat(window.getComputedStyle(tap1Cate[i]).marginBottom), tap1CateHei2=tap1CateHeig+tap1CateBott;   
tap1Cate.forEach(el=>{cR(el);sS(el,'margin-bottom');});   sSts(tap1Pbar);sSw0(tap1Pbar);  setTimeout(()=>{sStswi(tap1Pbar,tap1Peri);sSw1(tap1Pbar);}, 50);   cA(tap1Cate[i]);sS(tap1Cate[i],'margin-bottom',`${-tap1CateBody-e2p(.15)+tap1CateHei2}px`);   
var tap1Iden=tap1Cate[i].id; Q(`.${tap1Iden}`,tap1Slab).forEach(el=>cA(el));   Q(`.tap1Cont:not(.${tap1Iden})`,tap1Slab).forEach(el =>cR(el));
const tap1Auto=()=>{ cR(tap1Cate[i]);sS(tap1Cate[i],'margin-bottom'); sSts(tap1Pbar); sSw0(tap1Pbar);  setTimeout(()=>{sStswi(tap1Pbar,tap1Peri);sSw1(tap1Pbar);}, 50); 
i++; if(i===htL){ i=0; }   tap1CateTopp=getOffsetTop(tap1Cate[i]); tap1CateBody=tap1BodyTopp-tap1CateTopp;   cA(tap1Cate[i]);sS(tap1Cate[i],'margin-bottom',`${-tap1CateBody-e2p(.15)+tap1CateHei2}px`);   tap1Iden=tap1Cate[i].id; Q(`.${tap1Iden}`,tap1Slab).forEach(el =>cA(el)); Q(`.tap1Cont:not(.${tap1Iden})`,tap1Slab).forEach(el =>cR(el));   }    
eQ(tap1Cont,()=>{clearInterval(tap1Ival);sSts(tap1Pbar);sSw1(tap1Pbar);}); tap1Cate.forEach(tab=>{ eq(tab,()=>tap1Even(tab),'mouseenter'); eqt(tab,()=>tap1Even(tab)); });   
const tap1Even=(tab)=>{ clearInterval(tap1Ival); sSts(tap1Pbar); sSw1(tap1Pbar);   
tap1Cate.forEach(el=>{cR(el);sS(el,'margin-bottom');}); tap1CateTopp=getOffsetTop(tab); tap1CateBody=tap1BodyTopp-tap1CateTopp; cA(tab);sS(tab,'margin-bottom',`${-tap1CateBody-e2p(.15)+tap1CateHei2}px`); tap1Iden=tab.id;   Q(`.${tap1Iden}`,tap1Slab).forEach(el =>cA(el)); Q(`.tap1Cont:not(.${tap1Iden})`,tap1Slab).forEach(el =>cR(el)); }   

//port   //gall  
const sHo1Wrap=qi('sHo1WrapPort'), sHo1Wra2=qi('sHo1Wra2Port'), sHo1Body=q('.sHo1Body',sHo1Wrap), sHo1Item=Q('.sHo1Item',sHo1Wrap), sHo1Thum=Q('.sHo1Thum',sHo1Wrap), sHo1PlayPaus=qi('sHo1PlayPaus'), sHo1Rota=qi('sHo1Rotation'), sHo1Down=qi('sHo1Download'), portPbar=q('.pbarHor2.port'), sHo1Prev=document.getElementById('sHo1PrevSlid'), sHo1Next=document.getElementById('sHo1NextSlid'), sHo1ShowTime=9, sHo1Len0=sHo1Item.length;   
let sHo1SlidActi=0, sHo1SlidPrev=sHo1SlidActi, sHo1SlidAbso, sHo1PortIval,portDegr=0;   

//showSlide nextSlid prevSlid   
const showSlide=(index, o)=>{ sHo1SlidAbso=nAb(index-sHo1SlidPrev);   
if(sHo1SlidAbso>2){ if(wWi>wHe){shoNowVer(sHo1Item,index)}else{shoNowHor(sHo1Item,index)} }   
if(wWi>wHe){ if(o==='x'){ sHo1Item.forEach((slide, i)=>{sStftx(slide,(i-index)*100+'%'); cT(sHo1Thum[i],i===index); if(i===index){ let naviWrap=pa(sHo1Thum[i],2); scrVerCen(naviWrap,q('.sHo1Thum.act'),300); } if(i===index){cA(slide)}else{cR(slide)} }); } 
else{ sHo1Item.forEach((slide, i)=>{sStfty(slide,(i-index)*100+'%'); cT(sHo1Thum[i],i===index); if(i===index){ let naviWrap=pa(sHo1Thum[i],2); scrVerCen(naviWrap,q('.sHo1Thum.act'),300); } if(i===index){cA(slide)}else{cR(slide)} }); }
}      else{ if(o==='y'){ sHo1Item.forEach((slide, i)=>{sStfty(slide,(i-index)*100+'%'); cT(sHo1Thum[i],i===index); if(i===index){ let naviWrap=pa(sHo1Thum[i],2); scrHorCen(naviWrap,q('.sHo1Thum.act'),300); } if(i===index){cA(slide)}else{cR(slide)} }); } 
else{ sHo1Item.forEach((slide, i)=>{sStftx(slide,(i-index)*100+'%'); cT(sHo1Thum[i],i===index); if(i===index){ let naviWrap=pa(sHo1Thum[i],2); scrHorCen(naviWrap,q('.sHo1Thum.act'),300); } if(i===index){cA(slide)}else{cR(slide)} }); }
}      
sHo1SlidActi=index; sHo1SlidPrev=index; },   nextSlid=(o)=>{showSlide((sHo1SlidActi+1)%sHo1Len0,o)},   prevSlid=(o)=>{showSlide((sHo1SlidActi-1+sHo1Len0)%sHo1Len0,o)};   

//event handle rotate now   touVerSta touVerEnd touHorSta touHorEnd   
eq(sHo1Rota,()=>{ const iteA=q('.sHo1Item.act',sHo1Wrap); portDegr+=90; sStf(iteA,`rotate(${portDegr}deg)`); clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus); } ); 
eq(sHo1Down,()=>{const link=tC('a'); link.href=q('.sHo1Item.act',sHo1Wrap).src; link.download='NTdep-com---Downloaded-Image.webp'; document.body.appendChild(link); link.click(); document.body.removeChild(link); }); 
sHo1Thum.forEach((thu,i)=>{ eq(thu,()=>{clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus);showSlide(i);}); }); 
eq(sHo1Prev,()=>{clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus);prevSlid('x');}); eq(sHo1Next,()=>{clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus);nextSlid('x');}); 
let touYSta=0, touYEnd=0,   touXSta=0, touXEnd=0;   const touVerSta=event=>{touYSta=event.touches[0].clientY},   touVerEnd=event=>{touYEnd=event.changedTouches[0].clientY;if(touYSta>touYEnd+22){nextSlid('y')}else if(touYSta<touYEnd-22){prevSlid('y')}},   touHorSta=event=>{touXSta=event.touches[0].clientX},   touHorEnd=event=>{touXEnd=event.changedTouches[0].clientX;if(touXSta>touXEnd+22){nextSlid('x')}else if(touXSta<touXEnd-22){prevSlid('x')}};   
sHo1Item.forEach((slide)=>{ 
slide.addEventListener('touchstart',(e)=>{clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus);touVerSta(e);touHorSta(e);},{passive:true} ); 
slide.addEventListener('touchend',(e)=>{ if(nAb(touXEnd-touXSta)<=22){touVerEnd(e)}else{touHorEnd(e)} },{passive:true}); 
});   

const handleKeyDown=(e)=>{if(e.key==='ArrowRight'){ clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus); nextSlid('x'); } 
else if(e.key==='ArrowLeft'){ clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus); prevSlid('x'); } else if(e.key==='ArrowDown'){ clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus); nextSlid('y'); } else if(e.key==='ArrowUp'){ clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus); prevSlid('y'); } 
};   ed(dBo9(handleKeyDown),'keydown');

const handleWheelXEvent=(event)=>{clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus); event.deltaY>0 ? nextSlid() : prevSlid(); }; 
eq(sHo1Body,dBo9(handleWheelXEvent),'wheel',{passive:true}); 

eq(qi('sHo1FullScre'),()=>{if(!document.fullscreenElement){sHo1Wra2.requestFullscreen().catch(err=>{alert(`Error: ${err.message} (${err.name})`);});}else{document.exitFullscreen();}}); 
eq(sHo1Wrap,()=>{if(!document.fullscreenElement){sHo1Wrap.requestFullscreen().catch(err=>{alert(`Error: ${err.message} (${err.name})`);});}else{document.exitFullscreen();}}, 
'dblclick'); 
eq(sHo1PlayPaus,()=>{let play=q('.play',sHo1PlayPaus); if(cC(play)){ clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus); } 
else{ pbarSta0(portPbar);pbaWidSta(portPbar,sHo1ShowTime); sHo1PortIval=setInterval(()=>{nextSlid();pbaWidSta(portPbar,sHo1ShowTime);},1e3*sHo1ShowTime);buttPlay(sHo1PlayPaus); } } ); 
showSlide(sHo1SlidActi);pbaWidSta(portPbar,sHo1ShowTime);   

//loca 
const locIteQ=Q('.sVe1Item',qi('locaSlid')),locIteL=locIteQ.length, locTit='locaTitl',locTitQ=Q('.'+locTit); var iloc=rN(locIteL), locaIval;   
cRQ(locIteQ);cRQ(locTitQ);cA(locIteQ[iloc]);cA(locTitQ[iloc]);   
const locaAuto=()=>{cR(locIteQ[iloc]);cR(locTitQ[iloc]);   ++iloc; if(iloc==locIteL){iloc=0}cA(locIteQ[iloc]);cA(locTitQ[iloc]);};   
locIteQ.forEach((s)=>{ eq(s,e=>{eid=e.target.id;clearInterval(locaIval);cRQ(locIteQ);cRQ(locTitQ);cA(qi(eid));cA(q('.'+locTit,qi(eid)));}); }); 