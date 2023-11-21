(function(){
    // Variables
    const navbar = document.querySelector('.escondido');
    const menuBuger = document.querySelector('#menu-burger');

    menuBuger.addEventListener('click', alternarMenu)


    function alternarMenu(){
        if(navbar.classList.contains('escondido')){
            navbar.classList.remove('escondido')
        } else{
            navbar.classList.add('escondido')
        }
    }
})();