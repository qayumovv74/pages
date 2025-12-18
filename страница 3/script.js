function showBookingForm() {
    document.getElementById('booking-form').classList.toggle('hidden');
}

function bookTour() {
    document.getElementById('booking-form').classList.add('hidden');
    document.getElementById('booking-confirmation').classList.remove('hidden');
}
