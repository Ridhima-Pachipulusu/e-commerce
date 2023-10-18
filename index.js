const wrappers=document.querySelector(".wrapper")
const item=document.querySelectorAll(".nav-item");
item.forEach((item,index) => {
    item.addEventListener("click",()=>{
        wrappers.style.transform=`translatex(${-100 * index}vw)`;
    });
});
const image=document.querySelector(".img1");
const back=document.querySelector(".bg1")
image.addEventListener("click",(e)=>{
    e.preventDefault();
    back.classList.remove("hidden");
    back.style.transform=`translate(1vw)`;
})
const image1 = document.querySelector(".img2");
const back1 = document.querySelector(".bg2");
image1.addEventListener("click", () => {
  back1.classList.remove("hidden");
});
const image2 = document.querySelector(".img3");
const back2= document.querySelector(".bg3");
image2.addEventListener("click", () => {
  back2.classList.remove("hidden");
});
const image3 = document.querySelector(".img4");
const back3 = document.querySelector(".bg4");
image3.addEventListener("click", () => {
  back3.classList.remove("hidden");
});
const closes1=document.querySelector(".into1");
closes1.addEventListener("click",()=>{
    back.classList.add("hidden");
})
const closes2 = document.querySelector(".into2");
closes2.addEventListener("click", () => {
  back1.classList.add("hidden");
});
const closes3 = document.querySelector(".into3");
closes3.addEventListener("click", () => {
  back2.classList.add("hidden");
});
const closes4 = document.querySelector(".into4");
closes4.addEventListener("click", () => {
  back3.classList.add("hidden");
});