const anchorTags = document.querySelectorAll('nav ul li a');


anchorTags.forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
        anchor.style.color = 'brown';
    });

    anchor.addEventListener('mouseleave', () => {
        anchor.style.color = '#fff';
    });
});