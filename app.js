// Simple form submission handler (client-side only)
const form = document.getElementById('contact-form');
const responseParagraph = document.getElementById('form-response');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Gather form data
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        responseParagraph.textContent = 'Bitte füllen Sie alle Felder aus.';
        responseParagraph.style.color = 'red';
        return;
    }

    // In a real app you'd send this to a server;
    // here we just simulate success.
    responseParagraph.textContent = 'Danke für Ihre Nachricht, ' + name + '! Ich melde mich bald bei Ihnen.';
    responseParagraph.style.color = 'green';

    form.reset();
});