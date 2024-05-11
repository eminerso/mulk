var main_premium=document.getElementById("main_premium");
var main_vip=document.getElementById("main_vip");
var main_kira=document.getElementById("main_kira");
var main_ev=document.getElementById("main_ev");
var main_torpaq=document.getElementById("main_torpaq");
var main_obyekt=document.getElementById("main_obyekt");


var houses= [
    {id:1,owner:"Eli",   imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:2,owner:"Veli",  imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:3,owner:"Emin",  imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:4,owner:"Rauf",  imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:5,owner:"Kenan", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:6,owner:"Ramin", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:7,owner:"ELmin", imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:8,owner:"Qasim", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"Naxcivan",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:9,owner:"Emin",  imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:10,owner:"Rauf", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"Culfa",adress:"elince mehellesi",room:4,condition:"Temirli",area:"300kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:11,owner:"Kenan",imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:12,owner:"Ramin",imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
]
var rents=[
    {id:1,owner:"Eli",   imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:2,owner:"Veli",  imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:3,owner:"Emin",  imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:4,owner:"Rauf",  imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:5,owner:"Kenan", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:6,owner:"Ramin", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:7,owner:"ELmin", imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:8,owner:"Qasim", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"Naxcivan",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:9,owner:"Emin",  imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:10,owner:"Rauf", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"Culfa",adress:"elince mehellesi",room:4,condition:"Temirli",area:"300kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:11,owner:"Kenan",imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:12,owner:"Ramin",imgs:["img4.jpg","img5.jpg"],vip:false , tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
]

var obyekt=[
    {id:1,owner:"Eli",   imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"Obyekt",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:2,owner:"Veli",  imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Obyekt",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:3,owner:"Emin",  imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"Obyekt",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:4,owner:"Rauf",  imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Obyekt",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:5,owner:"Kenan", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Obyekt",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:6,owner:"Ramin", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Obyekt",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:7,owner:"ELmin", imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"Obyekt",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:8,owner:"Qasim", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Obyekt",region:"Naxcivan",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:9,owner:"Emin",  imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"Obyekt",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:10,owner:"Rauf", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Obyekt",region:"Culfa",adress:"elince mehellesi",room:4,condition:"Temirli",area:"300kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:11,owner:"Kenan",imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"Obyekt",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:12,owner:"Ramin",imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Obyekt",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
]
var torpaq=[
    {id:1,owner:"Eli",   imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"Torpaq sahesi",region:"Serur",adress:"Xetai mehellesi", area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:2,owner:"Veli",  imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Torpaq sahesi",region:"babek",adress:"elince mehellesi",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:3,owner:"Emin",  imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"Torpaq sahesi",region:"Serur",adress:"Xetai mehellesi", area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:4,owner:"Rauf",  imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Torpaq sahesi",region:"babek",adress:"elince mehellesi",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:5,owner:"Kenan", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Torpaq sahesi",region:"Serur",adress:"Xetai mehellesi", area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:6,owner:"Ramin", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Torpaq sahesi",region:"babek",adress:"elince mehellesi",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:7,owner:"ELmin", imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"Torpaq sahesi",region:"Serur",adress:"Xetai mehellesi", area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:8,owner:"Qasim", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Torpaq sahesi",region:"Navan",adress:"elince mehellesi",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:9,owner:"Emin",  imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"Torpaq sahesi",region:"Serur",adress:"Xetai mehellesi", area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:10,owner:"Rauf", imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Torpaq sahesi",region:"Culfa",adress:"elince mehellesi",area:"300kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:11,owner:"Kenan",imgs:["img4.jpg","img5.jpg"],vip:true ,  tip:"Torpaq sahesi",region:"Serur",adress:"Xetai mehellesi", area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:12,owner:"Ramin",imgs:["img4.jpg","img5.jpg"],vip:false , tip:"Torpaq sahesi",region:"babek",adress:"elince mehellesi",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
]

var vip_data=    [];
var kira_cards=  [];
var ev_cards=    [];
var rent_cards=  [];
var torpaq_cards=[];
var obyekt_cards=[];


function initalData(x,y){
if(y.length==0){
  for(let i=0; i<4;i++){
       y.push(x[i])}    } 
else{
    y.length=0
    for(let i =0; i<=4;i++){ 
        y.push(x[i]) }}} 
 ///////////////////////////// kartlarin elave olunmasi funksiyalarinin cagrilmasi/////////////////////////
initalData(houses,ev_cards)
pageData(ev_cards,main_ev)

initalData(rents,rent_cards)
pageData(rent_cards,main_kira)

initalData(torpaq,torpaq_cards)
pageData(torpaq_cards,main_torpaq)

initalData(obyekt,obyekt_cards)
pageData(obyekt_cards,main_obyekt)


////////////////////////////////////////////VIP datalarin alinmasi///////////////////////////////////////
function vipData(houses){
    for(let i=0;i<houses.length; i++){
        if(houses[i].vip==true){
            vip_data.push(houses[i]) }}}
vipData(houses)



function pageData(cards,z){
    z.textContent=''
for(let i=0;i<cards.length;i++){  
var card=document.createElement("div")
card.classList.add("card")
var imgdiv=document.createElement("div");
imgdiv.classList.add("imgDiv")
var img=document.createElement("img")
imgdiv.append(img);
img.src=cards[0].imgs[0]
var info=document.createElement("div")
info.classList.add("info")
var catg=document.createElement("h2")
catg.classList.add("categories")
catg.textContent=cards[i].tip
var details=document.createElement("h3")
details.classList.add("details")
details.textContent=cards[i].region
var price=document.createElement("h3")
price.classList.add("price")
price.textContent=cards[i].price
info.append(catg,details,price)
card.append(imgdiv,info);
z.append(card);
 }
}

 
