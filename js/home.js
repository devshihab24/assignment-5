document.getElementById("donation-btn").addEventListener("click", function(){
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById("home-section").classList.remove("hidden");
});
document.getElementById("donation-history-btn").addEventListener("click", function(){
    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");  
})

document.getElementById("blog-btn").addEventListener("click", function(){
    window.location.href = 'index2.html'
})
