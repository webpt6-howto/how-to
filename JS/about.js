let row = document.querySelector(".inner");
row = Array.from(row).forEach((inner) => {
    new Inner(inner);
});

class Row {
    constructor(inner) {

    this.inner = this.domElement.querySelector(`.icons[]='${inner.dataset.tab}'`);
    this.inner = new Inner(this.inner)
    inner.addEventListener("click", () => this.linkClick());
    }
    linkClick() {
        this.inner.toggleInner();
    }
}
