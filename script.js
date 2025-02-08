document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentname = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;

    // Check if student exists in the system
    if (studentName === '12345' && password === 'password') {
        document.getElementById('message').innerText = 'Welcome, student!';
    } else {
        document.getElementById('message').innerText = 'Yad aa rhi to sab se chup k Babu ko call car lo hmm nhi Batai ge/gi kisi Se ';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newStudentId = document.getElementById('newStudentId').value;
    const newPassword = document.getElementById('newPassword').value;

    // Register the new student
    document.getElementById('registerMessage').innerText = `Ka Ho ${newStudentId} Ka Hal ba kam se kam  collage Chali jati`;
});

function showRegister() {
    document.getElementById('registerContainer').style.display = 'block';
}
