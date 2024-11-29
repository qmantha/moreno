function showCategory(category) {
    let cards = document.querySelectorAll('.command-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Default to showing all commands on page load
document.addEventListener('DOMContentLoaded', () => {
    showCategory('all');
});