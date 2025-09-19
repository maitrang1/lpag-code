//popup  
eQ(Q('.zallSect'),()=>{popClo('menu')});   sSQ(popWa2,'max-height',wHe-2*s1T-2*e2p(.5)+'px');   sSQ(qc('popuMai2'),'margin-top',s1T+'px');   

//button call now 
eQ(Q('.buttCallHotl,.iconPhonWrap'),()=>{window.location.href='tel:+84909017236'}); 

eq(qi('footForm'),e=>{ e.preventDefault();e.stopPropagation();var pho=q('#footPhon',qi('footForm')).value,iP=iPh(pho);if(!pho){popOpe('foot-form-phon')}
else if(!iP){popOpe('foot-form-caut')} else{emailjs.sendForm('service_wkycy4o','template_7zkcx8r',qi('footForm')).then(()=>{popOpe('foot-form-succ');
fSQ(Q('#footMess,#footPhon,#footEmai'));},(er)=>{popOpe('foot-form-erro');console.log('ER: ',er);});} }, 'submit');   

eq(qi('zallForm'),e=>{ e.preventDefault();e.stopPropagation();var pho=q('#zallPhon',qi('zallForm')).value,iP=iPh(pho);if(!pho){popOpe('menu-form-phon')}
else if(!iP){popOpe('menu-form-caut')} else{emailjs.sendForm('service_wkycy4o','template_7zkcx8r',qi('zallForm')).then(()=>{popOpe('menu-form-succ');
fSQ(Q('#zallMess,#zallPhon,#zallEmai'));},(er)=>{popOpe('menu-form-erro');console.log('ER: ',er);});} }, 'submit');   




document.addEventListener('DOMContentLoaded',()=>{   

const row=q('.row'), rowGap=+sV(row,'gap').slice(0,-2);   
let sects=Q('.sec0'), secLen,secLe1=sects.length+1,secLe2,secLe3;   secLe1=secLe1<10?'0'+secLe1:secLe1; 

//after loaded   
cA(qi("hideCont"),'tran');   setTimeout(()=>{cA(qi("hideCont"),'hide'); sects.forEach((e)=>{sStstf(e)}); },300);   

//child func in Loaded   //variable //const   
const colQ=q('.col'),coPo=pr(colQ),coHe=coPo.h, menHei=e2p(2.6),   coGap=+sV(colQ,'gap').slice(0,-2);   

//hcmc //tabli   /Tabl set width height   /Cont height   
const c2hcFi=q('.co2.hcmc.firs'), c2hcFiPo=pr(c2hcFi), c2hcFiHe=c2hcFiPo.h, c2LaHe=coHe-c2hcFiHe-coGap-menHei;   
if(wWi>1200){sSQw(Q('.tablCont'),(.66*s1W-rowGap)+'px')}else{sSQw(Q('.tablCont'),s1W+'px')}   sSQh(Q('.tablCont'),c2LaHe+'px');   sSw(qi('tablPortCont'));   
if(wWi>1200){sSQh(Q('.boxxCont'),(c2LaHe-2*e2p(.25))+'px');sSQh(Q('.boxxCon2'),(c2LaHe-2*e2p(.25))+'px');} 
else{sSQh(Q('.boxxCont'),(coHe-menHei-2*e2p(.25))+'px');sSQh(Q('.boxxCon2'),(coHe-menHei-2*e2p(.25))+'px')} 

//hhead   //stars bg   
starCrea();   startShoot();   

//Initial sect display
showSect(sectActi);   allEvents();    

}); //end DOMContentLoaded





//before sect move    /ordinate /where   
const showSect=(index, where)=>{   subtIdex=index-prevIdex; absoIdex=subtIdex<0?-1*subtIdex:subtIdex;   
if(absoIdex>2&&absoIdex!==secLe1&&absoIdex!==secLe3){shoNowVer(sects, index)}

const secIde=sects[sectActi].id;   




//hhead   
if(secIde===A.head){   cAQs(Q('.row.titl,.row.subt,.row.butt,.row.link'));   setTimeout(()=>{popSmaOpe('nextSect');setTimeout(()=>{popClo('nextSect')},3e3);},6e3);   
const textData=gTD();   if(where=='naviRigh'){ tS(qi('type-head-hea2'),textData.headText.main) }  
else{ tS(qi('type-head-hea2')); typeArra([ ['type-head-hea2', headHea2Tex0] ],[textData.headText.typeArray], 5e3, 33 ); }   
} else {   cRQs(Q('.row.titl,.row.subt,.row.butt,.row.link'));   popClo('nextSect');   typeStop['type-head-hea2']=true;   
}   

//bbene 
if(secIde===A.bene){   cAQs(Q('.row.bene.hea2,.row.bene.bran,.row.bene.slab,.co3.bene.one,.co3.bene.two,.co3.bene.thr'));   
} else {   cRQs(Q('.row.bene.hea2,.row.bene.bran,.row.bene.slab,.co3.bene.one,.co3.bene.two,.co3.bene.thr'));   
}   

//ffeat 
if(secIde===A.feat){   cAQs(Q('.featCont,.featMedi'));   featIval=setInterval(()=>{slidDown(false);},9e3);   
} else {   cRQs(Q('.featCont,.featMedi'));   clearInterval(featIval);   
}   

//hhcmc 
if(secIde===A.hcmc){   cAQs(Q('.row.hcmc.hea2,.co3.hcmc.one,.co3.hcmc.two'));   if(wWi<1201){ setTimeout(()=>{popSmaOpe('nextSect');setTimeout(()=>{popClo('nextSect')},3e3);},6e3); }   
} else {   cRQs(Q('.row.hcmc.hea2,.co3.hcmc.one,.co3.hcmc.two'));   popClo('nextSect');   
}   

//hhcmc mobile  
if(secIde===A.hcmc+'_m'){   cAQs(Q('.co2.hcm2'));   setTimeout(()=>{popSmaOpe('nextSect');setTimeout(()=>{popClo('nextSect')},3e3);},6e3);   
} else {   cRQs(Q('.co2.hcm2'));   popClo('nextSect');   
}   

//hhnoi 
if(secIde===A.hnoi){   cAQs(Q('.row.hnoi.hea2,.co3.hnoi.one,.co3.hnoi.two'));   if(wWi<1201){ setTimeout(()=>{popSmaOpe('nextSect');setTimeout(()=>{popClo('nextSect')},3e3);},6e3); }   
} else {   cRQs(Q('.row.hnoi.hea2,.co3.hnoi.one,.co3.hnoi.two'));   popClo('nextSect');   
}   

//hhnoi mobile
if(secIde===A.hnoi+'_m'){   cAQs(Q('.co2.hno2'));   setTimeout(()=>{popSmaOpe('nextSect');setTimeout(()=>{popClo('nextSect')},3e3);},6e3);   
} else {   cRQs(Q('.co2.hno2'));   popClo('nextSect');   
}   

//hdnan 
if(secIde===A.dnan){   cAQs(Q('.row.dnan.hea2,.co3.dnan.one,.co3.dnan.two'));   if(wWi<1201){ setTimeout(()=>{popSmaOpe('nextSect');setTimeout(()=>{popClo('nextSect')},3e3);},6e3); }   
} else {   cRQs(Q('.row.dnan.hea2,.co3.dnan.one,.co3.dnan.two'));   popClo('nextSect');   
}   

//hdnan mobile
if(secIde===A.dnan+'_m'){   cAQs(Q('.co2.dna2'));   setTimeout(()=>{popSmaOpe('nextSect');setTimeout(()=>{popClo('nextSect')},3e3);},6e3);   
} else {   cRQs(Q('.co2.dna2'));   popClo('nextSect');   
}   

//sslab 
if(secIde===A.slab){   tap1Ival=setInterval(tap1Auto, tap1Peri*1e3);   
} else {   clearInterval(tap1Ival);   
} 

//pport   
if(secIde===A.port){   cAQs(Q('.row.port.hea2,.co2.port.last'));   
setTimeout(()=>{popSmaOpe('nextSect');setTimeout(()=>{popClo('nextSect')},3e3);},6e3);   
} else {   cRQs(Q('.row.port.hea2,.co2.port.last'));   popClo('nextSect');   
}   

//pport   
if(secIde===A.por2){   cAQs(Q('.row.por2.hea2'));   keybBloc=true;   
pbarSta0(portPbar);pbaWidSta(portPbar,sHo1ShowTime);sHo1PortIval=setInterval(()=>{nextSlid();pbaWidSta(portPbar,sHo1ShowTime);},1e3*sHo1ShowTime);buttPlay(sHo1PlayPaus);   
setTimeout(()=>{popSmaOpe('nextSect');setTimeout(()=>{popClo('nextSect')},3e3);},6e3);   
} else {   cRQs(Q('.row.por2.hea2'));   keybBloc=false;   popClo('nextSect');   
clearInterval(sHo1PortIval);pbaWidEn0(portPbar);buttPaus(sHo1PlayPaus);   
}   

//ccmtt   
if(secIde===A.cmtt){   cAQs(Q('.row.cmtt.hea2,.row.sub2,.co3.cmtt.one,.co3.cmtt.two,.co3.cmtt.thr'));   const textData=gTD();   const cur1=qi('type-cmtt-box1')?.nextElementSibling;   const cur2=qi('type-cmtt-box2')?.nextElementSibling;   const cur3=qi('type-cmtt-box3')?.nextElementSibling;   if(cur1)cur1.classList.add('dla0');   if(cur2)cur2.classList.add('dla2');   if(cur3)cur3.classList.add('dla1');   

if(where=='naviRigh'){ 
    tSQ(Q('#type-cmtt-box1,#type-cmtt-box2,#type-cmtt-box3'),[
        textData.cmttText.box1Static,
        textData.cmttText.box2Static,
        textData.cmttText.box3Static
    ]); 
} else{   tSQ(Q('#type-cmtt-box1,#type-cmtt-box2,#type-cmtt-box3'));   
typeArra( [ ['type-cmtt-box1', '', 70, 0], ['type-cmtt-box2', '', 60, 12e3], ['type-cmtt-box3', '', 65, 6e3] ], 
[textData.cmttText.box1Array, textData.cmttText.box2Array, textData.cmttText.box3Array], 9e3 ); 
}   

} else {   cRQs(Q('.row.cmtt.hea2,.row.sub2,.co3.cmtt.one,.co3.cmtt.two,.co3.cmtt.thr'));   const cur1=qi('type-cmtt-box1')?.nextElementSibling;   const cur2=qi('type-cmtt-box2')?.nextElementSibling;   const cur3=qi('type-cmtt-box3')?.nextElementSibling;   if(cur1)cur1.classList.remove('dla0','dla1','dla2');   if(cur2)cur2.classList.remove('dla0','dla1','dla2');   if(cur3)cur3.classList.remove('dla0','dla1','dla2');   typeStop['type-cmtt-box1']=true; typeStop['type-cmtt-box2']=true; typeStop['type-cmtt-box3']=true;   
}  

//ffaqs   
if(secIde===A.faqs){   cAQs(Q('.row.faqs.hea2'));   cAQs(faqsItem);   setTimeout(()=>{sSQtsal(faqsItem)},3e3);   
} else {   cRQs(Q('.row.faqs.hea2'));   cRQs(faqsItem);   sSQtsal(faqsItem,1.5);   
}   

//lloca 
if(secIde===A.loca){   cAQs(Q('.sVe1Wrap'));   locaIval=setInterval(locaAuto,6e3);    
} else {   cRQs(Q('.sVe1Wrap'));   clearInterval(locaIval);   
} 

//ffoot  
if(secIde===A.foot){   cAQs(Q('.row.foot.hea2,.row.foot.twoo'));   setTimeout(()=>{popSmaOpe('prevSect');setTimeout(()=>{popClo('prevSect')},3e3);},6e3);   
} else {   cRQs(Q('.row.foot.hea2,.row.foot.twoo'));   popClo('prevSect');   
}   

//move clone -> orginal head/foot   ,,,
if( index===0){ setTimeout(()=>{ index=secLe2; sectActi=index; shoNowVer(sects, sectActi); },310); setTimeout(()=>{ sects.forEach((sect, idx)=>{if(idx===index) {cA(sect)} else {cR(sect)} }); cA(naviRig22[index])},320); }   
else if( index===secLe1 ){ setTimeout(()=>{index=1; sectActi=index; shoNowVer(sects, sectActi); },310); setTimeout(()=>{ sects.forEach((sect, idx)=>{if(idx===index) {cA(sect)} else {cR(sect)} }); cA(naviRig22[index])},320); }   
naviRig22.forEach((e)=>{cR(e)});cA(naviRig22[index]);   

//index-secAct>update newURL 
let secAnc=sects[index].id, newURL=`${window.location.pathname}#${secAnc}`;   setTimeout(()=>{ window.history.pushState(null, null, newURL); }, 300);   

//move section & add act   
sects.forEach((sect, idx)=>{sStstf(sect); sStfty(sect,(idx-index)*100+'%'); if(idx===index){cA(sect)}else{cR(sect)} }); 

prevIdex=index;   isScro=false;  
};   //end showSect()   




const nextSect=()=>{if(!isScro){ isScro=true; sectActi=(sectActi+1)%secLen; showSect(sectActi); buttDownProg.nextAfte(sectActi); } };   

const prevSect=()=>{if(!isScro){ isScro=true; sectActi=(sectActi-1+secLen)%secLen; showSect(sectActi); } };   

const eveWheVer=(e)=>{ if(fullMode)return; if([...eleBloVer].some(el=>el.contains(e.target)))return; 
e.deltaY>0 ? nextSect() : prevSect(); };   

const eveKeyVer=(e)=>{ if(fullMode)return; if(keybBloc)return; const isTyping=e.target.tagName==='INPUT' || e.target.tagName==='TEXTAREA' || e.target.isContentEditable; if(e.key===' ' && isTyping){ return; }      
const actions={ ' ': nextSect, 'ArrowLeft': prevSect, 'ArrowRight': nextSect, 'ArrowDown': nextSect, 'PageDown': nextSect, 'ArrowUp': prevSect, 'PageUp': prevSect, 'Home':()=>{sectActi=1; showSect(sectActi); }, 'End':()=>{sectActi=secLe2; showSect(sectActi); } };
if(actions[e.key]){actions[e.key]()} };   
//   touVerStaPag touVerEndPag touHorStaPag touHorEndPag   
let touYStaPag=0, touYEndPag=0, touXStaPag=0, touXEndPag=0;   
const touVerStaPag=e=>{touYStaPag=e.touches[0].clientY},   touVerEndPag=e=>{if(fullMode)return;if([...eleBloVer].some(el=>el.contains(e.target)))return;touYEndPag=e.changedTouches[0].clientY;if(touYStaPag>touYEndPag+22){nextSect()}else if(touYStaPag<touYEndPag-22){prevSect()}};   

//event>move section   
const allEvents=()=>{ document.addEventListener('touchstart',(e)=>{touVerStaPag(e)},{passive:true});   
document.addEventListener('touchend',(e)=>{ touVerEndPag(e); });  ed(dBo9(eveWheVer),'wheel',{passive:true}); ed(dBo9(eveKeyVer),'keydown');  eq(qi('prevSect'),dBo9(prevSect)); eq(qi('nextSect'),dBo9(nextSect)); eQ(qc('moveUpup'),dBo9(prevSect)); eQ(qc('moveDown'),dBo9(nextSect)); };   

//naviRighBarr  click on bar>move>update sectActi   
naviRig2=Q('.naviRig2'); const naviRig4=Q('.naviRig4'); naviRig4.forEach(sect=>{ eq( sect, dBo9( ()=>{naviRig2.forEach((e)=>{cR(e)}); const dataAnch=aV(pa(sect),'data-anch'); for(let i=0;i<secLen;i++){ if(sects[i].id===dataAnch){sectActi=i;break} } showSect(sectActi,'naviRigh');cA(pa(sect));} )  ); });    

//menu section clicked
eQ(Q('.zallSect'),e=>{ let clicId = e.target.id; for(let i=0;i<secLen;i++){ if(sects[i].id===clicId){sectActi=i;break} } showSect(sectActi); }); 