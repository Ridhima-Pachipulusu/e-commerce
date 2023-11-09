const wrappers=document.querySelector(".wrapper")
const product=document.querySelector(".product-one");
const product1 = document.querySelector(".product-two");
const product2= document.querySelector(".product-three");
const product3 = document.querySelector(".product-four");
const item=document.querySelectorAll(".nav-item");
item.forEach((item,index) => {
    item.addEventListener("click",()=>{
        wrappers.style.transform=`translatex(${-100 * index}vw)`;
        product.style.transform = `translatex(${-100 * index}vw)`;
        product1.style.transform = `translatex(${-100 * index}vw)`;
        product2.style.transform = `translatex(${-100 * index}vw)`;
        product3.style.transform = `translatex(${-100 * index}vw)`;
    });
});
const image=document.querySelector(".img1");
const back=document.querySelector(".bg1")
image.addEventListener("click",(e)=>{
    e.preventDefault();
    back.classList.remove("hidden");
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
const clicking=document.querySelectorAll(".click");
clicking.forEach((clicking,index)=>{
  clicking.addEventListener("click",()=>{
    if(index==0)
    back.classList.remove("hidden");
    else if(index==1)
    back1.classList.remove("hidden");
    else if(index==2)
    back2.classList.remove("hidden");
    else
    back3.classList.remove("hidden");
  })
});