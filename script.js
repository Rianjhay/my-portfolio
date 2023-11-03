let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (fromTop >= offset && fromTop < offset + height) {
            // Remove 'active' class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the corresponding navigation link
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
});