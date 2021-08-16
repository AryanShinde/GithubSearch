const api="https://api.github.com/users/";
const form=document.querySelector("form");
const submitBtn=document.querySelector(".submit-btn");
const inputBox=document.querySelector("input");
const MainDivCard=document.querySelector(".main-card");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let value=inputBox.value;
    MainDivCard.innerHTML="";
    createCard(value);
    value="";
})

async function fetchApi(api){
    const response=await fetch(api);
    const jsonResponse= await response.json();
    console.log(jsonResponse);
}

function createCard(value){
    const userApi=`https://api.github.com/users/${value}`;
    fetchApi(userApi);
    const card=document.createElement("div");
    card.classList.add("card");
    card.innerHTML=``;
}
createCard("AryanShinde");
