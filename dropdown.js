class Dropdown {
    constructor(container) {
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
    }
    // add click trigger
    init() {
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
        });
    }
}

// get dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

// apply to each dropdown element
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});