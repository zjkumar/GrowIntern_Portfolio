// // https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png

/* changing role */

let designation = 'FRONTEND';
let designationElement = document.getElementById('homeDesignation');
designationElement.addEventListener('animationiteration', () => {
    designationElement.textContent = designation;
    designation = designation === 'FRONTEND' ? 'BACKEND' : 'FRONTEND';
})

/* Activating the nav bar links */

const navLinkSpanList = document.querySelectorAll('.nav-link-span');

function activateLink(event) {
    const spanEl = event.target;

    navLinkSpanList.forEach((spanElement) => {
        spanElement.classList.remove('active-link');
    });
    spanEl.classList.add('active-link');

}
navLinkSpanList.forEach((spanEl) => {
    spanEl.addEventListener('click', activateLink);
})

