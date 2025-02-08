document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;

    // Check if student exists in the system
    if (studentId === '12345' && password === 'password') {
        document.getElementById('message').innerText = 'Welcome, student!';
    } else {
        document.getElementById('message').innerText = 'Yaad aa rahi to Babu,Sona ko call car lo kisi ko nahi batau ga';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newStudentId = document.getElementById('newStudentId').value;
    const newPassword = document.getElementById('newPassword').value;

    // Register the new student
    document.getElementById('registerMessage').innerText = `Aur ${newStudentId} Kay hal hai Kahe Akle baithe ho kam se km khi ghum aate`;
});

function showRegister() {
    document.getElementById('registerContainer').style.display = 'block';
}
