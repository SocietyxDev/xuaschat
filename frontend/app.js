document.getElementById('signup-btn').addEventListener('click', () => {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');
    fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert('Sign up successful');
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('signin-btn').addEventListener('click', () => {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');
    fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert('Sign in successful');
        console.log(data);
        document.getElementById('auth').classList.add('hidden');
        document.getElementById('chat').classList.remove('hidden');
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('send-message-btn').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    fetch('http://localhost:3000/messages/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sender: 'user_id', content: message, groupId: 'group_id' })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
});
