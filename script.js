function redirectToWatch(animePage) {
    window.location.href = animePage;
}

function redirectToRandomAnime() {
    const animePages = ['tpn.html', 'spyxfamily.html', 'tokyoghoul.html', 'erased.html', 'prison_school.html', 'umaru.html', 'death_note.html'];
    const randomIndex = Math.floor(Math.random() * animePages.length);
    window.location.href = animePages[randomIndex];
}
