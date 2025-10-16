// Фильтрация проектов по технологиям
document.addEventListener('DOMContentLoaded', function() {
    console.log('Фильтр проектов загружен!');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            console.log('Выбран фильтр:', filter);
            
            // Обновляем активную кнопку
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'btn-primary');
                btn.classList.add('btn-outline-primary');
            });
            this.classList.add('active', 'btn-primary');
            this.classList.remove('btn-outline-primary');
            
            // Фильтруем проекты
            projectCards.forEach(card => {
                const technologies = card.getAttribute('data-technologies');
                
                if (filter === 'all' || technologies.includes(filter)) {
                    card.style.display = 'block';
                    // Анимация
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Анимация
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});