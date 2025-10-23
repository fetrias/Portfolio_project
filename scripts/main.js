document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (nameInput) {
            nameInput.setAttribute('aria-describedby', 'name-hint');
            if (!document.getElementById('name-hint')) {
                const hint = document.createElement('small');
                hint.id = 'name-hint';
                hint.className = 'visually-hidden';
                hint.textContent = 'Введите ваше полное имя';
                nameInput.parentNode.appendChild(hint);
            }
        }

        if (emailInput) {
            emailInput.setAttribute('aria-describedby', 'email-hint');
            if (!document.getElementById('email-hint')) {
                const hint = document.createElement('small');
                hint.id = 'email-hint';
                hint.className = 'visually-hidden';
                hint.textContent = 'Введите действующий email адрес для ответа';
                emailInput.parentNode.appendChild(hint);
            }
        }

        if (messageInput) {
            messageInput.setAttribute('aria-describedby', 'message-hint');
            if (!document.getElementById('message-hint')) {
                const hint = document.createElement('small');
                hint.id = 'message-hint';
                hint.className = 'visually-hidden';
                hint.textContent = 'Опишите подробно ваш вопрос или предложение';
                messageInput.parentNode.appendChild(hint);
            }
        }
    }

    const diaryForm = document.getElementById('diaryForm');
    if (diaryForm) {
        const inputs = ['entryTitle', 'entryDate', 'entryDescription'];
        inputs.forEach(id => {
            const input = document.getElementById(id);
            if (input && !input.getAttribute('aria-describedby')) {
                const hintId = `${id}-hint`;
                input.setAttribute('aria-describedby', hintId);
                if (!document.getElementById(hintId)) {
                    const hint = document.createElement('small');
                    hint.id = hintId;
                    hint.className = 'visually-hidden';
                    hint.textContent = `Введите ${input.previousElementSibling?.textContent?.toLowerCase() || 'значение'}`;
                    input.parentNode.appendChild(hint);
                }
            }
        });
    }
});