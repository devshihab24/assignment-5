function showInterfaceById(id){
    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}