let loginbanner = document.querySelector(".loginform");
loginbanner = Array.from(loginbanner).forEach((loginform) => {
    new Loginform(loginform);
});

// class Loginform {
//     constructor(domElement) {
//         this.domElement = domElement
    
//     this.expandButton = this.domElement.querySelector(".expandButton");
//     this.expandButton.innerHTML = "expand";
//     this.expandButton.addEventListener("click", this.expandLoginform);
//     }
//     expandLoginform() {
//         this.parentNode.classList.toggle("loginform-open");
//     }
// }