let btnMenu = document.querySelector('.toggle-icon i'),
   menu = document.querySelector('.sidebar-wrapper'),
   closeBtn = document.querySelector('.close-menu i'),
   switcherBtn = document.querySelector('.switcher-icon i'),
   switcherContainer = document.querySelector('.switcher-container'),
   switcherClose = document.querySelector('.switcher-close i');

//funcion agregar
 
function addClass(button, containerName, className){
    button.addEventListener('click', () => {
        containerName.classList.add(className);
    });
}

//funcion eliminar

function removeClass(button, containerName, className){
    button.addEventListener('click', () => {
        containerName.classList.remove(className);
    });
}

addClass(btnMenu, menu, 'active');
addClass(switcherBtn, switcherContainer, 'open');
removeClass(closebtn, menu, 'active');
removeClass(switcherClose, switcherContainer , 'open');


//Cambiar Color Dark Modo

let colorsBtn = document.querySelectorAll('.switcher-body ul li');

colorsBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        colorsBtn.forEach((btn) => {
            btn.classList.remove('active');
        });

        btn.classList.add('active');
        if(e.target.dataset.color === '#212529'){
            //Cambiar a Blanco asddad
            document.documentElement.style.setProperty('--lightGray', e.target.dataset.color);
            document.documentElement.style.setProperty('--whiteColor', '#2b3035');
            document.documentElement.style.setProperty('--textColor', '#9ca2a8');
            // cambiar color locar
            let colors = [e.target.dataset.color, '#2b3035', '#9ca2a8'];
            localStorage.setItem("colors-options", JSON.stringify(colors));
        }else{
            document.documentElement.style.setProperty('--lightGray', e.target.dataset.color);
            document.documentElement.style.setProperty('--whiteColor', '#ffffff');
            document.documentElement.style.setProperty('--textColor', '#4c5258');
// cambiar color locar
let colors = [e.target.dataset.color, '#ffffff', '#4c5258'];
localStorage.setItem("colors-options", JSON.stringify(colors));

        }
    
    });
});


//color localStorage 

let colorsStorage = JSON.parce(localStorage.getItem('colors-options'));

//cheak if local storage not empty

if(colorsStorage !== null ) {
    document.documentElement.style.setProperty('--lightGray',colorsStorage[0]);
    document.documentElement.style.setProperty('--whiteColor',colorsStorage[1]);
    document.documentElement.style.setProperty('--textColor',colorsStorage[2]);
}