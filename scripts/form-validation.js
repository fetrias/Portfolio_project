
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name) {
                showContactError('Пожалуйста, введите ваше имя');
                return;
            }

            if (!email) {
                showContactError('Пожалуйста, введите ваш email');
                return;
            }

            if (!isValidEmail(email)) {
                showContactError('Пожалуйста, введите корректный email адрес');
                return;
            }

            if (!message) {
                showContactError('Пожалуйста, введите ваше сообщение');
                return;
            }

            showContactSuccess('Сообщение отправлено! Спасибо за ваше обращение.');
            contactForm.reset();
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showContactError(message) {
        removeContactAlerts();

        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger alert-dismissible fade show mt-3';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        contactForm.parentNode.insertBefore(alertDiv, contactForm.nextSibling);
    }

    function showContactSuccess(message) {
        removeContactAlerts();

        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        contactForm.parentNode.insertBefore(alertDiv, contactForm.nextSibling);
    }

    function removeContactAlerts() {
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());
    }
});

function validateDiaryForm() {
    const title = document.getElementById('entryTitle').value.trim();
    const date = document.getElementById('entryDate').value;
    const description = document.getElementById('entryDescription').value.trim();
    const alertDiv = document.getElementById('diaryFormAlert');

    alertDiv.classList.add('d-none');

    if (!title) {
        showDiaryAlert('Пожалуйста, введите название темы', 'danger');
        return;
    }

    if (!date) {
        showDiaryAlert('Пожалуйста, выберите дату', 'danger');
        return;
    }

    if (!description) {
        showDiaryAlert('Пожалуйста, введите описание', 'danger');
        return;
    }

    showDiaryAlert('Запись успешно добавлена!', 'success');

    setTimeout(() => {
        addDiaryEntry();
        alertDiv.classList.add('d-none');
    }, 1000);
}

function showDiaryAlert(message, type) {
    const alertDiv = document.getElementById('diaryFormAlert');
    alertDiv.textContent = message;
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.classList.remove('d-none');
}

window.validateDiaryForm = validateDiaryForm;
window.showDiaryAlert = showDiaryAlert;