function signIn(event) {
    event.preventDefault();

    const FullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (FullName === '' || email === '' || password === '') {
        alert('All fields are required!');
    } else if (email === 'tamilorearemu440@gmail.com' && password === 'password123') {
        window.location.href = 'quiz.html';
    } else {
        alert('Invalid email or password!')
    }



}




















    


   