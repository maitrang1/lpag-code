//log   ll llj aa aaj   
const ll=o=>console.log(o),   aa=o=>alert(o),   llj=o=>console.log(JSON.stringify(o)),   aaj=o=>alert(JSON.stringify(o)),   

//object   iO   //number   nAb:absolute rN   e2p   iPh   
iO=O=>typeof O=='object',   nAb=n=>n<0?-1*n:n,   rN=N=>+Math.floor(Math.random()*N),   e2p=em=>+em*sV(q('body'),'font-size').slice(0,-2),   iPh=num=>(nu2=num.replace(/[^\d]/g,''),nL=nu2.length,nL<9||nL>12?!1:/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(nu2)),   

//query   q Q qi qc pa   
q=(e,p=document)=>p.querySelector(e),   Q=(e,p=document)=>p.querySelectorAll(e),   qi=(i)=>document.getElementById(i),   qc=(c)=>Array.from(document.getElementsByClassName(c)),   pa=(e,n=1)=>{let p=e;for(let i=0;i<n;i++)p=p.parentElement;return p},   

//event   ed eq eQ edt eqt eQt   d:doc e:ele f:func c:event(click) o:obj   t:touchstart 
ed=(f,c='click',o)=>document.addEventListener(c,f,o),   eq=(e,f,c='click',o)=>e.addEventListener(c,f,o),   eQ=(e,f,c='click',o)=>e.forEach(l=>l.addEventListener(c,f,o)),   edt=(f,o={passive:true})=>document.addEventListener('touchstart',f,o),   eqt=(e,f,o={passive:true})=>e.addEventListener('touchstart',f,o),  eQt=(e,f,o={passive:true})=>e.forEach(l=>l.addEventListener('touchstart',f,o)),   

//class   cA cR cT cTQ cC cS cRA cAQ cRQ cAQs cRQs    s:sho c:cont cT:Toggle b:boolean 
cA=(e,c='act')=>e.classList.add(c),   cR=(e,c='act')=>e.classList.remove(c),   cAs=(e,c='sho')=>e.classList.add(c),   cRs=(e,c='sho')=>e.classList.remove(c),   cT=(e,b,c='act')=>e.classList.toggle(c,b),   cTQ=(e,b,c='act')=>e.forEach(l=>l.classList.toggle(c,b)),   cC=(e,c='act')=>e.classList.contains(c),   cS=(e,c)=>e.className=c,   cRA=(e,c)=>e.classList.remove(...c),   cAQ=(e,c='act')=>e.forEach(l=>l.classList.add(c)),   cRQ=(e,c='act')=>e.forEach(l=>l.classList.remove(c)),   cAQs=(e,c='sho')=>e.forEach(l=>l.classList.add(c)),   cRQs=(e,c='sho')=>e.forEach(l=>l.classList.remove(c)),   

//style-css   sV sS sSQ sT   a=':after'/':before' /T:cssText   
sV=(e,p,a='')=>getComputedStyle(e,a).getPropertyValue(p),   sS=(e,o,v='')=>{if(typeof o==='object'){for(p in o){e.style.setProperty(p,o[p])}}else{e.style.setProperty(o,v)}return e},   sSQ=(e,o,v='')=>{e.forEach(l=>{if(typeof o==='object'){for(p in o){l.style.setProperty(p,o[p])}}else{l.style.setProperty(o,v)}})},   sT=(e,v='')=>e.style.cssText=v,   

//   sSd sSt sSQt sSl sSr sSb    /d:display /t:top /l:left /r:right /b:bottom   
sSd=(e,v='none')=>(e.style.display=v),   sSt=(e,v='')=>(e.style.top=v),   sSQt=(e,v='')=>(e.forEach(l=>l.style.top=v)),   sSl=(e,v='')=>(e.style.left=v),   sSr=(e,v='')=>(e.style.right=v),   sSb=(e,v='')=>(e.style.bottom=v),   

//   sSw sSh sSQw sSQh sSw0 sSh0 sSw1 sSh1 sSts sStsal sSQtsal sStstf sStswi sStshe sStsro sStf sStftx sStfty   //w:wid h:hei   //t:transition /tt:transform /tw:wid /th:hei   //tf:transform /tx:translateX /ty:translateY   
sSw=(e,v='')=>(e.style.width=v),   sSh=(e,v='')=>(e.style.height=v),   sSQw=(e,v='')=>(e.forEach(l=>l.style.width=v)),   sSQh=(e,v='')=>(e.forEach(l=>l.style.height=v)),   sSw0=e=>(e.style.width='0%'),   sSh0=e=>(e.style.height='0%'),   sSw1=e=>(e.style.width='100%'),   sSh1=e=>(e.style.height='100%'),   sSts=(e,v='none')=>(e.style.transition=v),   sStsal=(e,s=.3)=>(e.style.transition='all '+s+'s'),   sSQtsal=(e,s=.3)=>(e.forEach(l=>l.style.transition='all '+s+'s')),   sStstf=(e,s=.3)=>(e.style.transition='transform '+s+'s'),   sStswi=(e,s=.3)=>(e.style.transition='width '+s+'s'),   sStshe=(e,s=.3)=>(e.style.transition='height '+s+'s'),   sStsro=(e,s=.3)=>(e.style.transition='rotate '+s+'s'),   sStf=(e,v='none')=>(e.style.transform=v),   sStftx=(e,v=0)=>(e.style.transform='translateX('+v+')'),   sStfty=(e,v=0)=>(e.style.transform='translateY('+v+')'),   

//tags-text   tC tV tS tSQ   
tC=t=>document.createElement(t),   tV=e=>e.textContent,   tS=(e,v='')=>(e.textContent=v),   tSQ=(e,v=[''])=>e.forEach((l,i)=>l.textContent=v[i]||''),   

//elem   traFirLas copLasFir copFirLas movFirLas movLasFir scrHorCen scrHor scrHorCenNow scrVerCen scrVer scrVerCenNow eleWraNos   
traFirLas=(wI,e)=>{const w=qi(wI),q=e?Q('.'+e,w):'',l=q.length-1,c0=q?q[0]:w.firstElementChild,c9=q?q[l]:w.lastElementChild;const c0C=c0.cloneNode(true),c9C=c9.cloneNode(true);w.appendChild(c0C);w.insertBefore(c9C,c0);return[c9C,c0C]},   

copLasFir=w=>{if(!w||!w.lastElementChild)return;const c9C=w.lastElementChild.cloneNode(true);w.insertBefore(c9C,w.firstElementChild);return c9C},   
copFirLas=w=>{if(!w||!w.firstElementChild)return;const c0C=w.firstElementChild.cloneNode(true);w.appendChild(c0C);return c0C},   

movFirLas=w=>{if(!w||!w.firstElementChild)return;w.appendChild(w.firstElementChild)},   
movLasFir=w=>{if(!w||!w.lastElementChild)return;w.insertBefore(w.lastElementChild,w.firstElementChild)},   

scrHor=(elem,to,dura)=>{const s=elem.scrollLeft,c=to-s,i=20,easeInOut=(t,b,c,d)=>{t/=d/2;if(t<1)return c/2*t*t*t+b;t-=2;return c/2*(t*t*t+2)+b};let ct=0;const aS=()=>{ct+=i;const v=easeInOut(ct,s,c,dura);elem.scrollLeft=v;if(ct<dura)requestAnimationFrame(aS)};if(dura===0){elem.scrollLeft=to;return}aS()},   
scrHorCen=(pare,chil,dura)=>{if(!pare||!chil)return;const pR=pare.getBoundingClientRect(),cR=chil.getBoundingClientRect(),pCX=pR.left+pR.width/2,cCx=cR.left+cR.width/2,sL=pare.scrollLeft+(cCx-pCX);scrHor(pare,sL,dura)},   
scrHorCenNow=(pare,chil)=>{if(!pare||!chil)return;const pR=pare.getBoundingClientRect(),cR=chil.getBoundingClientRect(),pCX=pR.left+pR.width/2,cCx=cR.left+cR.width/2,sL=pare.scrollLeft+(cCx-pCX);pare.scrollLeft=sL},   

scrVer=(elem,to,dura)=>{const s=elem.scrollTop,c=to-s,i=20,easeInOut=(t,b,c,d)=>{t/=d/2;if(t<1)return c/2*t*t*t+b;t-=2;return c/2*(t*t*t+2)+b};let ct=0;const aS=()=>{ct+=i;const v=easeInOut(ct,s,c,dura);elem.scrollTop=v;if(ct<dura)requestAnimationFrame(aS)};if(dura===0){elem.scrollTop=to;return}aS()},   
scrVerCen=(pare,chil,dura)=>{if(!pare||!chil)return;const pR=pare.getBoundingClientRect(),cR=chil.getBoundingClientRect(),pCY=pR.top+pR.height/2,cCy=cR.top+cR.height/2,sT=pare.scrollTop+(cCy-pCY);scrVer(pare,sT,dura)},   
scrVerCenNow=(pare,chil)=>{if(!pare||!chil)return;const pR=pare.getBoundingClientRect(),cR=chil.getBoundingClientRect(),pCY=pR.top+pR.height/2,cCy=cR.top+cR.height/2,sT=pare.scrollTop+(cCy-pCY);pare.scrollTop=sT},   

eleWraNos=elem=>{if(!elem)return;const w=document.createElement('div');w.setAttribute('data-nosnippet',true);elem.parentNode.insertBefore(w,elem);w.appendChild(elem)},   

//attribute   aV   //field   fSQ   //textData   gTD   
aV=(e,a)=>e.getAttribute(a),   fSQ=(Q,v='')=>{Q.forEach(q=>q.value=v)},   gTD=()=>JSON.parse(qi('textData').textContent);   

//global    // pw pr   
const pw=()=>{let e=window,l=e.scrollX,t=e.scrollY,w=e.innerWidth,h=e.innerHeight,r=l+w,b=t+h;return{l:l,r:r,t:t,b:b,w:w,h:h}},   pr=e=>{let l=e.offsetLeft,t=e.offsetTop,w=e.offsetWidth,h=e.offsetHeight,r=l+w,b=t+h;return{l:l,r:r,t:t,b:b,w:w,h:h}},    

//deBounce dBo9   
dBo9=(func,wait=300)=>{let to;return function(...args){clearTimeout(to);to=setTimeout(()=>func.apply(this,args),wait);} },    

//change imediately 
shoNowVer=(eles, index)=>{eles.forEach((sect,idx)=>{ sStstf(sect); sStfty(sect,(idx-index)*100+'%'); }); },   
shoNowHor=(eles, index)=>{eles.forEach((sect,idx)=>{ sStstf(sect); sStftx(sect,(idx-index)*100+'%'); }); },   

dCh=(d0,d1,pe=.05)=>{return((d1-d0)/d0>pe)},   

//table tablSort   //end-const   
tablSort=(id,n)=>{var table=qi(id),rows,rowL,swit=true,i,x,y,switNeed,dirSor="theSorAsc",switCout=0;while(swit){swit=false;rows=table.getElementsByTagName("tr");rowL=rows.length-1;for(i=1;i<rowL;i++){switNeed=false;x=rows[i].getElementsByTagName("td")[n];y=rows[i+1].getElementsByTagName("td")[n];if(dirSor=="theSorAsc"){if(x.innerHTML>y.innerHTML){switNeed=true;break}}else if(dirSor=="theSorDes"){if(x.innerHTML<y.innerHTML){switNeed=true;break}}}if(switNeed){pa(rows[i]).insertBefore(rows[i+1],rows[i]);swit=true;switCout++}else{if(switCout==0&&dirSor=="theSorAsc"){dirSor="theSorDes";swit=true}}}Q('th>b.hS',table).forEach((e,i)=>{cRA(e,["theSorAsc","theSorDes"]);if((i)==n){cA(e,dirSor)}})} 


   
const wdow=pw(),wWi=wdow.w,wHe=wdow.h,   pop=qc('popuMain'),   

A={ 
head:'-header-dau-trang', bene:'-uu-the-chinh', feat:'-dac-tinh-tot', hcmc:'-bao-gia-tphcm', hcm2:'-bao-gia-tphcm_m', hnoi:'-bao-gia-ha-noi', hno2:'-bao-gia-ha-noi_m', dnan:'-bao-gia-da-nang', dna2:'-bao-gia-da-nang_m', slab:'-mau-da-tam-dep', hmuc:'-mau-hang-muc-dep', port:'-du-toan-chung', por2:'-hinh-anh-dep', cmtt:'-binh-luan-moi', faqs:'-faqs-cau-hoi', loca:'-xuong-cua-hang', foot:'-footer-cuoi-trang' 
},   

//anchor   
sec1=pr(q('.sec1')),s1L=sec1.l,s1T=sec1.t,s1W=sec1.w,s1H=sec1.h,s1R=wWi-s1W-s1L   ;    

//faqs   
const faqs=q('.faqsWrap'), faqsItem=Q('.faqsItem',faqs);    

let keybBloc=false, fullMode=false;       ed(()=>{if(document.fullscreenElement){fullMode=true}else{fullMode=false}},'fullscreenchange'); 

//clone First Last Sections>loop around 
let [firs,last]=traFirLas('mainCont','sec0');   cS(firs,'sec0 foot'); eleWraNos(firs); q('#footForm',firs).id='footFormCopy'; 
cS(last,'sec0 head'); eleWraNos(last);   sects=Q('.sec0'), secLen=sects.length,secLe1=secLen-1,secLe2=secLen-2,secLe3=secLen-3;   
let sectActi=1, prevIdex=sectActi, subtIdex=0, absoIdex=0,   isScro=false;   

//naviRigh: sect display none>remove li item   
let secHidArr=[], navRigLis=Q('#naviRigh li');
for(let i=0;i<secLen;i++){if(sects[i].nodeType===Node.ELEMENT_NODE){if(window.getComputedStyle(sects[i]).display==='none'){sects[i].remove();secHidArr.push(sects[i].id)}}}   
secHidArr.forEach((id)=>{  navRigLis.forEach((li)=>{ if(aV(li,'data-anch')===id){li.remove()} });  });   
sects=Q('.sec0'), secLen=sects.length,secLe1=secLen-1,secLe2=secLen-2,secLe3=secLen-3;   
let naviRig22=Q('.naviRig2');   

//url#anchor -> sectActi section active   
const urlAnc=window.location.hash; for(let s=0;s<secLen;s++){if(sects[s].id==urlAnc.slice(1)){sectActi=s;break}}

//naviRigh adjust Height  
setTimeout(()=>{
let naviRigh=q('#naviRigh'), naviRig2=Q('.naviRig2'), ba2Hei=naviRig2[0].offsetHeight, ba3Top=+sV(q('.naviRig3'),'top').slice(0,-2)*-.5;
ba4Hei=q('div.naviRig4>span',naviRig2[0]).offsetHeight;   
let navGap, conHei=q('.sec1').offsetHeight;   conHei+=2*(ba2Hei/2-ba4Hei/2)-2*ba2Hei+4*ba4Hei;   navGap=(conHei-secLe2*ba2Hei)/secLe3;   
sS(naviRigh,'gap',navGap+'px');   sSt(naviRigh,(.5*wHe+ba2Hei/2-ba3Top-.5*ba4Hei)+'px'); 
},50);   

//navi & menu   if wWi>2048   wHe>1024   
sSl(q('#menuWap1'),s1L+'px');   
if(wWi>1500){sSr(q('#menuWap2'),(s1R+'px'));}
if(wWi>2048){sSr(q('#naviRigh'),s1L+'px');}   if(wHe>1024){ sSb(q('#menuWap1'),s1T+'px'); sSb(q('#menuWap2'),s1T+'px') }   

//block move section       
const eleBloVer=Q('.wrapScro,.tablCont,.sHorWrap,.popuMain,.popuBgro,.popuMainFree,.popuBgroFree'),   headHea2Tex0=tV(qi('type-head-hea2'));   

var wid=[],hei=[],whL; wid.push(window.innerWidth);hei.push(window.innerHeight);   
///rr-onResize   dCh(wid[whL-1],wid[whL-2]) ppp   
window.onresize=()=>{   
wid.push(window.innerWidth);hei.push(window.innerHeight);whL=wid.length;   if( wid[whL-1]!==wid[whL-2] ){window.location.reload(false);}  
};   //end onResize