document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    
    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();
            
            if (name && email && message) {
                alert('Thank you for your message, ' + name + '! I will get back to you soon.');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            } else {
                alert('Please fill in all fields before submitting.');
            }
        });
    }
});
