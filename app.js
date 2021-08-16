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
    return jsonResponse;
}

async function createCard(value){
    const userApi=`https://api.github.com/users/${value}`;
    const data= await fetchApi(userApi);
    console.log(data);
    const card=document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
    <div class="upper-card">
        <img class="avatar-img" src=${data.avatar_url} alt="">
        <h3 class="username">${data.name}</h3>
        <a target="_blank" href=${data.html_url}>Users Github</a>
    </div>
    <div class="lower-card">
        <div class="bio"><b>Bio</b>: ${data.bio}</div>
        <div class="location"><b>Location</b>: ${data.location}</div>
        <div class="followers"><b>Followers</b>: ${data.followers}</div>
        <div class="following"><b>Following</b>: ${data.following}</div>
</div>`;
    MainDivCard.appendChild(card);

}
createCard(inputBox.value);
