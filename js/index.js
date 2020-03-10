document.addEventListener('DOMContentLoaded', function(){
    IncludeNavbar()
})

function IncludeNavbar() {
    btnOpenMenu = document.getElementById('btn-open-menu')    
    btnOpenMenu.addEventListener('click', () => {
        if (btnOpenMenu.classList.contains('active'))
        {
            btnOpenMenu.classList.remove('active')
        }
        else
        {
            btnOpenMenu.classList.add('active')
        }
        
    })  
}