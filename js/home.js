document.getElementById("donation-btn").addEventListener("click", function(){
    showInterfaceById("home-section");
    document.getElementById("donation-btn").classList.add("bg-lime-400");
    document.getElementById("donation-history-btn").classList.remove("bg-lime-400");
});
document.getElementById("donation-history-btn").addEventListener("click", function(){
    showInterfaceById("history-section");
    document.getElementById("donation-btn").classList.remove("bg-lime-400");
    document.getElementById("donation-history-btn").classList.add("bg-lime-400");
});

document.getElementById("blog-btn").addEventListener("click", function(){
    window.location.href = 'index2.html'
});

// header section changing effect

document.addEventListener("scroll", function(){
    const header = document.getElementById("main-header");
    const scrollY = window.scrollY;

    if(scrollY > 100){
        header.style.background = 'rgba(255, 255, 255, 0.5)';
        header.style.backdropFilter = 'blur(10px)';
    }
})
