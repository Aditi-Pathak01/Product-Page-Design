let productImg = document.querySelector("#product-img");
let btn = document.querySelectorAll(".btn");

btn[0].onclick = function () {//iife fx used
  productImg.src = "assets/img1.png";
  for (bt of btn) {//for loop, bt= all .btn;
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  productImg.src = "assets/img2.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  productImg.src = "assets/img1.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
/*WAY2:- 
btn[0].addEventListener("click", () => {
  productImg.src = "assets/img1.png";
  btn[0].classList.add("active")
  btn[1].classList.remove("active")
  btn[2].classList.remove("active")
});
btn[1].addEventListener("click", () => {
  productImg.src = "assets/img2.png";
  btn[1].classList.add("active");
  btn[0].classList.remove("active")
  btn[2].classList.remove("active")
});
btn[2].addEventListener("click", () => {
  productImg.src = "assets/img3.png";
  btn[2].classList.add("active");
  btn[1].classList.remove("active")
  btn[0].classList.remove("active")
});*/
