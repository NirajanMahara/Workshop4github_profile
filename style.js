@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

* {
    box-sizing: border-box;
}

body {
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #2a2a72 0%, #2e2a68 74%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    margin: 0;
    min-height: 100vh;
}

input {
    background-color: #4c2885;
    border-radius: 10px;
    border: none;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
        0 15px 40px rgba(0, 0, 0, 0.1);
    color: white;
    font-family: inherit;
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 2rem;
}

input::placeholder {
    color: #bbb;
}

input:focus {
    outline: none;
}

.card {
    background-color: #4c2885;
    background-image: linear-gradient(315deg, #4c2885 0%, #4c11ac 100%);
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
        0 15px 40px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 3rem;
    max-width: 800px;
}

.avatar {
    border: 10px solid #2a2a72;
    border-radius: 50%;
    height: 150px;
    width: 150px;
}

.user-info {
    color: #eee;
    margin-left: 2rem;
}

.user-info h2 {
    margin-top: 0;
}

.user-info ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    max-width: 400px;
}

.user-info ul li {
    display: flex;
    align-items: center;
}

.user-info ul li strong {
    font-size: 0.9rem;
    margin-left: 0.5rem;
}

.repo {
    background-color: #2a2a72;
    border-radius: 5px;
    display: inline-block;
    color: white;
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
}