document.addEventListener('DOMContentLoaded', function () {
    console.log('Фильтр проектов с Grid загружен!');

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    function filterProjects(filter) {
        console.log('Применяем фильтр:', filter);

        let visibleCount = 0;

        projectCards.forEach(card => {
            const technologies = card.getAttribute('data-technologies');

            if (filter === 'all' || technologies.includes(filter)) {
                // Показываем карточку
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                    card.style.pointerEvents = 'auto';
                }, 50);
                visibleCount++;
            } else {
                // Скрываем карточку с анимацией
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                card.style.pointerEvents = 'none';
                card.classList.add('hidden');
            }
        });

        console.log(`Отображено карточек: ${visibleCount}`);
    }

    // Обработчики для кнопок фильтров
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Обновляем активное состояние кнопок
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'btn-primary');
                btn.classList.add('btn-outline-primary');
            });

            this.classList.add('active', 'btn-primary');
            this.classList.remove('btn-outline-primary');

            // Применяем фильтр
            filterProjects(filter);
        });
    });

    // Инициализация - показываем все проекты
    filterProjects('all');
});