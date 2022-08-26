setInterval(()=> {
    let imgs = document.querySelectorAll("img");
    imgs.forEach((a, i)=>{
        a.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBTqHcEJW6ZmDydHsyCuyMAp6WSc317CP2Fq4SwdDrA&s'
    })
}, 500)