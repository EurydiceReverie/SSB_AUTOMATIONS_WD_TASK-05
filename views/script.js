document.addEventListener('mousemove', function(e) {
    const cursorGif = document.getElementById('cursor-gif');
    cursorGif.style.left = e.pageX + 'px';
    cursorGif.style.top = e.pageY + 'px';
});

function handleResize() {
    const navList = document.getElementById('nav-list');
    if (window.innerWidth <= 768) {
        navList.classList.add('flex-column');
        navList.classList.remove('flex-row');
    } else {
        navList.classList.add('flex-row');
        navList.classList.remove('flex-column');
    }
}

window.addEventListener('resize', handleResize);

handleResize();