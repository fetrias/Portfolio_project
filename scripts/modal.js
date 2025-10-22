
function addDiaryEntry() {
    console.log('Функция вызвана!');

    const title = document.getElementById('entryTitle').value;
    const date = document.getElementById('entryDate').value;
    const status = document.getElementById('entryStatus').value;
    const description = document.getElementById('entryDescription').value;
    const technologies = document.getElementById('entryTechnologies').value;

    console.log('Данные формы:', { title, date, status, description, technologies });

    const newEntry = document.createElement('div');

    let borderColor = 'success';
    let badgeText = 'Завершено';
    let textColor = 'success';

    if (status === 'in-progress') {
        borderColor = 'warning';
        badgeText = 'В процессе';
        textColor = 'warning';
    } else if (status === 'planned') {
        borderColor = 'secondary';
        badgeText = 'Запланировано';
        textColor = 'secondary';
    }

    const formattedDate = new Date(date).toLocaleDateString('ru-RU');

    newEntry.className = `diary-entry mb-4 p-3 border-start border-4 border-${borderColor}`;
    newEntry.innerHTML = `
        <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="mb-0 text-${textColor}">${title}</h5>
            <span class="badge bg-${borderColor}">${badgeText}</span>
        </div>
        <div class="text-muted mb-2">
            <i class="bi bi-calendar me-1"></i>${formattedDate}
        </div>
        <p class="mb-2">${description}</p>
        <div class="tech-tags">
            ${technologies ? technologies.split(',').map(tech =>
        `<span class="badge bg-primary me-1">${tech.trim()}</span>`
    ).join('') : ''}
        </div>
    `;

    const diaryContainer = document.getElementById('diaryEntriesContainer');
    console.log('Diary container найден:', diaryContainer);

    diaryContainer.insertBefore(newEntry, diaryContainer.firstChild);

    const modal = document.getElementById('addEntryModal');
    const bsModal = bootstrap.Modal.getInstance(modal);
    bsModal.hide();

    document.getElementById('diaryForm').reset();

    console.log('Запись успешно добавлена!');
}

window.addDiaryEntry = addDiaryEntry;
console.log('modal.js загружен - addDiaryEntry доступна');