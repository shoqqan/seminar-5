const getUsers = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((responce)=>responce.json())
        .then((usersRes)=>{
            showFriends(usersRes)
        })
}



const showFriends = (users) =>{
    const mainContent = document.getElementById('mainContent')
    users.forEach((user)=>{
        const userDiv = document.createElement('div')
        userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.email}</p>
        `
        userDiv.classList.add('user')
        mainContent.appendChild(userDiv)
    })
}

getUsers()
