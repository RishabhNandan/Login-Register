document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;

    // Check if student exists in the system
    if (studentId === '12345' && password === 'password') {
        document.getElementById('message').innerText = 'Welcome, student!';
    } else {
        document.getElementById('message').innerText = '🤖 "Verifying… Are you human? Blink twice to confirm!"
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newStudentId = document.getElementById('newStudentId').value;
    const newPassword = document.getElementById('newPassword').value;

    // Register the new student
    document.getElementById('registerMessage').innerText = `Dear ${newStudentId} 🤖 "ERROR 404: Free Money Not Found. Please Register Instead."`;
});

function showRegister() {
    document.getElementById('registerContainer').style.display = 'block';
}
