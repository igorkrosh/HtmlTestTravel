document.addEventListener('DOMContentLoaded', function(){
    IncludeNavbar()
    InludeFilters()
})

function IncludeNavbar() {
    btnOpenMenu = document.getElementById('btn-open-menu')   
    sideBar = document.getElementById('sidebar')
    navBar = document.querySelector('.navbar')

    btnOpenMenu.addEventListener('click', () => {
        if (btnOpenMenu.classList.contains('active'))
        {
            btnOpenMenu.classList.remove('active')
            sideBar.classList.remove('active')
            navBar.removeChild(fade)
        }
        else
        {
            btnOpenMenu.classList.add('active')
            sideBar.classList.add('active')
            fade = document.createElement('div')
            fade.classList.add('fade')
            navBar.appendChild(fade)
        }
        
    })  
}

function InludeFilters() {
    btnsFilter = document.querySelectorAll('.btn-title')
    
    for (btn of btnsFilter)
    {        
        btn.addEventListener('click', (event) => {
            if (event.target.parentElement.classList.contains('active'))
            {
                activeElems= document.querySelectorAll('.filter-wrapper .active')

                for (elem of activeElems)
                {
                    elem.classList.remove('active')
                }
            }
            else
            {
                event.target.parentElement.classList.add('active') 
            }                       
        })
    }

    continentOptions = document.querySelectorAll('.filter .continent-list .continent')

    for (continent of continentOptions)
    {
        continent.addEventListener('click', (event) => {
            if (event.target.classList.contains('active'))
            {
                event.target.classList.remove('active')
            }
            else
            {
                for (cont of continentOptions)
                {
                    cont.classList.remove('active')
                }
                event.target.classList.add('active') 
            }
           
        })
    }
}