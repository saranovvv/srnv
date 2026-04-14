function display(e){
        
    if(e.target.classList.contains("test")){
        const content_long = document.getElementById('show-tekst')
        content_long.classList.add('show')
    }
}
  

document.getElementById('show').addEventListener("click", e => {
    display(e);
})