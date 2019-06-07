
// let row = document.querySelector(".inner");
// row = Array.from(row).forEach((inner) => {
//     new Inner(inner);
// });

// class Row {
//     constructor(inner) {

// let row = document.querySelector(".inner");
// row = Array.from(row).forEach((inner) => {
//     new Inner(inner);
// });

// class Row {
//     constructor(inner) {

//     this.inner = this.domElement.querySelector(`.icons[]='${inner.dataset.tab}'`);
//     this.inner = new Inner(this.inner)
//     inner.addEventListener("click", () => this.linkClick());
//     }
//     linkClick() {
//         this.inner.toggleInner();
//     }
// }



// // Step 3: Create the TabLink class
// class TabLink {
//     constructor(link) {
//       // this.link = link;
//       // console.log(link)
//       // Step 4: Match the data-set values between the link and the content
//       this.tabContent = document.querySelector(`.content[data-tab='${link.dataset.tab}']`)
  
  
//     // Step 5: Create new content object from matched data-set content tab
//     this.tabContent = new Content(this.tabContent)
      
//       // Step 8: Add our event listener, pass in this keyword
//       // with arrow function for implicit binding
//     link.addEventListener('click', () => this.linkClick())
//         }
    
//     linkClick() {
//        this.tabContent.toggleContent();
//      }
//   }
  
//   // Step 6: Create class Content with tabElement passed in
//   class Content {
//     constructor(tabElement) {
//       // console.log(tabElement)
//       this.tabElement = tabElement;
      
      
//       }
//     toggleContent() {
//         this.tabElement.classList.toggle('change');
//     }
//   }
  
//   // Step 1: Select all elements in the DOM for our tabs
//   const links = document.querySelectorAll('.link')
  
  // links is a Nodelist
  // Step 2: Iterate over the nodelist and create new class called TabLink
  // links.forEach( link => new TabLink(link))
