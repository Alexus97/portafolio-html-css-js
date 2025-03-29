

const contactForm = document.getElementById('contact-form'); // Corrected variable name
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_qalgiuk', 'template_c16ee6d', '#contact-form', 'nbZGj4r5AF-klm0DI')
    .then(() => {
        // show send message
        contactMessage.textContent = 'Message sent successfully 👍';

        // remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // reset form
        contactForm.reset();

    })
    .catch(() => { // Added error handling
        contactMessage.textContent = 'Error sending message 😥';
    });
}

contactForm.addEventListener('submit', sendEmail);

