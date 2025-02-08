// Function to show the pop-up with a message
function showPopup(message) {
    document.getElementById('popupMessage').innerText = message;
    document.getElementById('popup').classList.add('show');
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();    
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;

    // Check if student exists in the system
    if (studentId === '12345' && password === 'password') {
        showPopup('Welcome, student!');
    } else {
        showPopup('Invalid ID or password.');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newStudentId = document.getElementById('newStudentId').value;
    const newPassword = document.getElementById('newPassword').value;

    // Register the new student
    showPopup(`Mr/Miss ${newStudentId}, you have been registered successfully!`);
});
