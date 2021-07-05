document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#github-form')
    const ul = document.querySelector('#user-list')

    form.addEventListener('submit', function (event) {
        const iTyped = document.querySelector('#search').value
        event.preventDefault()

        

        fetch(`https://api.github.com/search/users?q=${iTyped}`)
        .then(res => res.json())
        .then(response => {
            // console.log(response);
            response.items.forEach(function(user){
                
                const li = document.createElement('li')
                const img = document.createElement('img')
                const a = document.createElement('a');
                a.href = `https://api.github.com/users/${user.login}/repos`
                img.src = user.avatar_url
                // img.addEventListener('click', () => {
                //     fetch(`https://api.github.com/users/${user.login}/repos`)
                //    .then(res => res.json())
                //    .then(response => {
                //        console.log(response)
                //    })
                // })
                a.append(img);
                li.append(user.login, a)
                ul.append(li)
            })
        })
    })
})

// document.addEventListener('DOMContentLoaded', () => {
//     form.addEventListener('', () => {
//         fetch()
//         .then()
//         .then({
//             itme.forEach({

//             })
//         })
//     })
// })