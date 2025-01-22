const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
});


let lastScrollY = window.scrollY;
const hideScrollThreshold = 800;  

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;

    if (currentScrollY > hideScrollThreshold) {
        if (currentScrollY > lastScrollY) {
            
            navbar.style.transform = 'translateY(-100%)';
        } else {
            
            navbar.style.transform = 'translateY(0)';
        }
    } else {
        // Before 800px, ensure navbar is always visible
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
});
