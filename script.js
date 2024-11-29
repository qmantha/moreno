document.addEventListener("DOMContentLoaded", function() {
    const categories = ['moderation', 'fun', 'utility', 'roleplay'];
    
    function updateCategoryCounts() {
        let allCount = 0;

        categories.forEach(category => {
            const count = document.querySelectorAll(`.command-card.${category}`).length;
            document.getElementById(`${category}-count`).textContent = count;
            allCount += count;
        });

        document.getElementById('all-count').textContent = allCount;
    }

    updateCategoryCounts();
});

// Function to handle showing/hiding categories (implement based on your needs)
function showCategory(category) {
    const allCards = document.querySelectorAll('.command-card');
    allCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}