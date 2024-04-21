const anchorTags = document.querySelectorAll('nav ul li a');


anchorTags.forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
        anchor.style.color = '#7e03bb';
    });

    anchor.addEventListener('mouseleave', () => {
        anchor.style.color = '#260b0b';
    });
});