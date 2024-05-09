var main=document.getElementById("main");
var btn_right=document.getElementById("right");
var btn_left=document.getElementById("left");
var start=0
var db=[
    {id:1,owner:"Eli",vip:true,tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:2,owner:"Veli",vip:false,tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:3,owner:"Emin",vip:true,tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:4,owner:"Rauf",vip:false,tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:5,owner:"Kenan",vip:false,tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:6,owner:"Ramin",vip:false,tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:7,owner:"ELmin",vip:true,tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:8,owner:"Qasim",vip:false,tip:"heyet",region:"Naxcivan",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:9,owner:"Emin",vip:true,tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:10,owner:"Rauf",vip:false,tip:"heyet",region:"Culfa",adress:"elince mehellesi",room:4,condition:"Temirli",area:"300kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
    {id:11,owner:"Kenan",vip:true,tip:"bina",region:"Serur",adress:"Xetai mehellesi",room:2,condition:"Temirli",area:"100kv",floor:3,price:30000,elaqe:05553022296,tarix:"24.07.2024",info:"razilasmaq olar" },
    {id:12,owner:"Ramin",vip:false,tip:"heyet",region:"babek",adress:"elince mehellesi",room:4,condition:"Temirsiz",area:"200kv",price:40000,elaqe:05553022296,tarix:"24.07.2024",info:"nah razilasmaq olar"},
]
console.log(db.length);
var cards=[]

function initalData(db){
if(cards.length==0){
  for(let i =start; i<=start+10;i++){
    if(db[i] in db){
       cards.push(db[i])}
       else{
        break
       }
        }} 
else{
    cards.length=0
    for(let i =start; i<=start+10;i++){
        if(db[i] in db){
        cards.push(db[i]) }
        else{
            start=i
            break;
           }}}} 
 
initalData(db)
pageData()

btn_right.addEventListener("click",()=>{
    start+=10
    initalData(db)
    pageData(cards)
     })

btn_left.addEventListener("click",()=>{
    if(start>10){
       
    if (start % 10==0){
        start-=10  
        initalData(db)
        pageData(cards)  
    }
    else{
       start=start-(10+(start %10))
       initalData(db)
       pageData(cards)
    }
}
else{
    start=0
    initalData(db)
    pageData(cards)
}
})






function pageData(){
    main.textContent=''
for(let i=0;i<cards.length;i++){  
var card=document.createElement("div")
card.classList.add("card")
var imgdiv=document.createElement("div");
imgdiv.classList.add("imgDiv")
var img=document.createElement("img")
imgdiv.append(img);
img.src="img4.jpg"
var info=document.createElement("div")
info.classList.add("info")
var catg=document.createElement("h2")
catg.classList.add("categories")
catg.textContent='Rent'
var details=document.createElement("h3")
details.classList.add("details")
details.textContent='detallar'
var price=document.createElement("h3")
price.classList.add("price")
price.textContent="price  "+ cards[i]
info.append(catg,details,price)
card.append(imgdiv,info);
main.append(card);
 }
}

 
