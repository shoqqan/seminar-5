const baseURL = "https://jsonplaceholder.typicode.com"

const getPosts = async () =>{
    try {
        const responce = await fetch(`${baseURL}/posts`)
        const posts = await responce.json()
        showPosts(posts)
    }catch (error) {
        console.error(error)
    }
}

const getUser = async (id) =>{
    try{
        const responce = await fetch(`${baseURL}/users/${id}`)
        const user = await responce.json()
        return user.username
    }
    catch (error) {
        console.error(error)
    }
}



const showPosts =  (posts) =>{
    const mainContent = document.getElementById('mainContent')
    posts.forEach(async (post)=>{
        const postDiv = document.createElement('div')
        const username = await getUser(post.userId)
        postDiv.innerHTML = `
        <p>${username}</p>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postDiv.classList.add('post')
        mainContent.appendChild(postDiv);
    })
}

getPosts()
