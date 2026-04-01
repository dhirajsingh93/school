
const cardsData = [
{
image:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
name:'Rohit Sharma',
handle:'Parent of Class 5 Student',
date:'2025'
},
{
image:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
name:'Neha Verma',
handle:'Parent of Class 2 Student',
date:'2025'
},
{
image:'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200',
name:'Amit Kumar',
handle:'Parent of Class 7 Student',
date:'2025'
},
{
image:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200',
name:'Priya Singh',
handle:'Parent of Class 4 Student',
date:'2025'
}
];

const row1=document.getElementById("row1");
const row2=document.getElementById("row2");

function createCard(card){
return `
<div class="bg-white p-5 rounded-xl mx-4 shadow-md hover:shadow-xl transition w-72 shrink-0">

<div class="flex gap-3 items-center">

<img class="w-11 h-11 rounded-full object-cover" src="${card.image}">

<div>
<p class="font-semibold text-gray-800">${card.name}</p>
<span class="text-xs text-gray-500">${card.handle}</span>
</div>

</div>

<p class="text-sm text-gray-600 pt-4 leading-relaxed">
Umadeep Convent School provides a supportive environment where students grow academically and personally. The teachers are caring and the facilities are excellent.
</p>

</div>
`;
}

function renderCards(target){

const cards=[...cardsData,...cardsData,...cardsData];

cards.forEach(card=>{
target.insertAdjacentHTML("beforeend",createCard(card));
});

}

renderCards(row1);
renderCards(row2);



//about and navbar fix


const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

const aboutBtn = document.querySelector("#aboutMenu button");
const aboutDropdown = document.getElementById("aboutDropdown");


// MOBILE MENU OPEN
openMenu.addEventListener("click", (e) => {

menu.style.width = "75%";

e.stopPropagation();

});


// MOBILE MENU CLOSE BUTTON
closeMenu.addEventListener("click", () => {

menu.style.width = "0";

});


// CLICK ANYWHERE CLOSE MENU (MOBILE)
document.addEventListener("click", (e) => {

if(!menu.contains(e.target) && !openMenu.contains(e.target)){

menu.style.width = "0";

}

});



// ABOUT DROPDOWN CLICK
aboutBtn.addEventListener("click", (e) => {

e.stopPropagation();

aboutDropdown.classList.remove("hidden");


// 2 second baad close
setTimeout(()=>{

aboutDropdown.classList.add("hidden");

},2000);

});



// OUTSIDE CLICK DROPDOWN CLOSE
document.addEventListener("click",(e)=>{

if(!aboutDropdown.contains(e.target) && !aboutBtn.contains(e.target)){

aboutDropdown.classList.add("hidden");

}

});



