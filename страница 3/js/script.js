function showBookingForm() {
    document.getElementById('booking-form').classList.toggle('hidden');
    document.getElementById('error-message').style.display = 'none';
}

function bookTour() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const error = document.getElementById('error-message');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

   
    if (name === '' || phone === '' || email === '') {
        error.style.display = 'block';
        return;
    }

    
    error.style.display = 'none';

    
    document.getElementById('booking-form').classList.add('hidden');
    document.getElementById('booking-confirmation').classList.remove('hidden');

    
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
}
