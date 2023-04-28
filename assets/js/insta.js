'use strict';

// ----------DOM Elements----------
const userId = document.querySelector('#userId');
const password = document.querySelector('#password');
const login = document.querySelector('#login');
const navbar = document.querySelector('.navbar');
const mainContent = document.querySelector('.left');
const myForm = document.querySelector('.myForm');
const navdisplay = document.querySelector('.navdisplay');
const errorMsgPw = document.querySelector('.errorMsgPw');
const errorMsgUid = document.querySelector('.errorMsgUid');
const logout = document.querySelector('.log-out');
const storyField = document.querySelector('.new-story-field');
const addStory = document.querySelector('.add-story');
const addPost = document.querySelector('.newPost');
const postField = document.querySelector('.post');
const passwordToggle = document.querySelector('.show');
const toggleText = document.querySelector('.toggleText');
const iconShow = document.querySelector('.iconShow');
const iconHide = document.querySelector('.iconHide');


// ----------User Data----------
// Login
const loginList = [
 {userId:'freedom',password:'pavi1998',}
];


// Profile
const userIdInfo=[
    {name:'captain_sk_king',location:'Chennai',dp:"./assets/images/User id Data/captain_sk.jpg"},
    {name:'freedom_offl_19',location:'Madurai',dp:"./assets/images/User id Data/freedom_offl_19.jpg"},
    {name:'nayanthara_viki',location:'Tirunelveli',dp:"./assets/images/User id Data/nayanthara_viki.jpg"},
    {name:'pavi_the_chief',location:'Trichy',dp:"./assets/images/User id Data/pavi_the_chief.jpg"},
    {name:'sk_virat_kumar',location:'Nagarcoil',dp:"./assets/images/User id Data/sk_virat.jpg"},
];

// Random Number
const randomNumber = Math.trunc(Math.random()*3)+1;


// ----------Functions----------
function init() {
    myForm.classList.add('flex');
    myForm.classList.remove('hidden');
    navdisplay.classList.add('hidden');
    mainContent.classList.add('hidden');
    userId.value='';
    password.value='';
}

function loginInit() {
    errorMsgPw.classList.add('hidden');
    errorMsgUid.classList.add('hidden');
}

function loggingOut() {
    init();
}

function displayUI() {
    if ((userId.value === (loginList[0].userId) && password.value === loginList[0].password)) {
      myForm.classList.remove('flex');
      myForm.classList.add('hidden');
      navdisplay.classList.remove('hidden');
      mainContent.classList.remove('hidden');
    } else {
        if (userId.value === loginList[0].userId && parseInt(password.value) !== loginList[0].password) {

            // Wrong Password
            errorMsgPw.innerHTML = 'password is not correct';
            errorMsgPw.classList.remove('hidden');
        }

        else if (userId.value !== loginList[0].userId && parseInt(password.value) === loginList[0].password) {
            // Wrong Username
            errorMsgUid.innerHTML = 'user id is not correct';
            errorMsgUid.classList.remove('hidden');
        }

        else if (userId.value !== loginList[0].userId && parseInt(password.value) !== loginList[0].password) {
            // Wrong Username
            errorMsgUid.innerHTML = 'user id is not correct';
            errorMsgUid.classList.remove('hidden');
            // Wrong Password
            errorMsgPw.innerHTML = 'password is not correct';
            errorMsgPw.classList.remove('hidden');
        }
    }
}

function newStory() {
    const randomNum = Math.trunc(Math.random() * 5);
    const html = `<div class="story demo-story d-flex">
        <a href="#"><img class="image image-story" src="${userIdInfo[randomNum].dp}" alt="profilePic" width="40px" height="40px">
        <p>${userIdInfo[randomNum].name}</p></a>
     </div>`;
    storyField.insertAdjacentHTML("afterbegin", html);
}

function newPost() {
    const randomNum = Math.trunc(Math.random() * 3) + 1;
    const minutes = Math.trunc(Math.random() * 60);
    const postNumber = Math.trunc(Math.random() * 21);
    const currentId = userIdInfo[randomNum];

    const html = `
    <div  style="border-bottom: 1px solid rgb(128, 128, 128,0.2);">
        <div class="post-header mt-2 ms-1 d-flex">
          <div>
            <div class="idDetails d-flex mt-1">
               <a href="#"><img class="image" src="${currentId.dp}" alt="profilePic" width="35px" height="35px"></a>
               <a href="#" class="anchor"><h1>${currentId.name}</h1></a>
            </div>
              <a href="#"><p>${currentId.location}</p></a>
          </div>
            <div>
              <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
            </div>
        </div>

      <div class="post-content">
        <div class="post-image-cover">
          <div class="post-image">
            <img src="./assets/images/Post data/${postNumber}.jpg" class="img-fluid" alt="post-img" width="500px">
          </div>
        </div>
            <p>${minutes} MINUTES AGO...</p>
      </div>

      <div class="post-icons">
        <ul class="nav">
         <div class="icons-left ms-2">
           <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
           <li><a href="#"><i class="fa-regular fa-comment"></i></a></li>
           <li><a href="#"><i class="fa-regular fa-paper-plane"></i></a></i></li>
         </div>
         <div class="icons-left">
           <li><a href="#"><i class="fa-regular fa-bookmark"></i></a></li>
         </div>
        </ul>
      </div>

      <div class="post-likes">
       <a href="#"><img  class="z-index-2" src="./assets/images/User id Data/captain_sk.jpg" alt="likes" width="15px" height="15px"></a>
       <a href="#"><img  class="z-index-1" src="./assets/images/User id Data/pavi_the_chief.jpg" alt="likes" width="15px" height="15px"></a>
       <a href="#"><img  class="z-index-n1" src="./assets/images/User id Data/sk_virat.jpg" alt="likes" width="15px" height="15px"></a>
       <h6 class="like-details">Liked by <b><a href="#">someone</a></b> and <b><a href="#">${minutes + (randomNum * 7) + (randomNumber * 2)} others</a></b></h6>
      </div>

      <div class="post-comments">
        <h6><a href="#">View all ${minutes + ((randomNum * 2) + randomNumber)} comments</a></h6>
      </div>
      </div>`;
    postField.insertAdjacentHTML("afterbegin", html);
}

function show() {
  
  password.getAttribute('type')==='password'? password.setAttribute('type','text'):password.setAttribute('type','password');

  toggleText.innerHTML ==='show'? toggleText.innerHTML='hide':toggleText.innerHTML='show';

  iconShow.classList.toggle('hidden');
  iconHide.classList.toggle('hidden');
}


// ----------Events----------
login.addEventListener('click',displayUI);
userId.addEventListener('click',loginInit);
password.addEventListener('click',loginInit);
logout.addEventListener('click',loggingOut);
addStory.addEventListener('click',newStory);
addPost.addEventListener('click',newPost);
passwordToggle.addEventListener('click',show);
