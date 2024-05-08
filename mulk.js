var main=document.getElementById("main");
var btn_right=document.getElementById("right");
var btn_left=document.getElementById("left");
var start=0
var db=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]
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

 