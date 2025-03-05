document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;


    if (studentId === '12345' && password === 'password') {
        document.getElementById('message').innerText = 'Welcome, student!';
    } else {
        document.getElementById('message').innerText = '🤖Verifying… AAP hame College k Nahi malum Padte Kriypaya kar k Pahale Khud ko register Kare'
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newStudentId = document.getElementById('newStudentId').value;
    const newPassword = document.getElementById('newPassword').value;

    
    document.getElementById('registerMessage').innerText = `Dear ${newStudentId} 🤖 ERROR 404: . Pay 101 rupees for Registerd yourself;
});

function showRegister() {
    document.getElementById('registerContainer').style.display = 'block';
}
