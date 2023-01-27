import outsideClick from './outsideclick.js'

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');
    const active = 'active';
    const events = ['click', 'touchstart'];
    
    
    dropdownMenus.forEach(menu => {
        events.forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        });
    });
    
    function handleClick(event) {
        event.preventDefault();
        this.classList.add(active);
        outsideClick(this, events, () => { // executa a função outsideClick passando menu (this) e callback por parâmetro
            this.classList.remove(active); // quanto clicar fora do menu, remove classe active
        });
    }
}

/*
// Minha versão do código 

function handleClick(event) {
    event.preventDefault();
    this.classList.add(active);
    outsideClick(this);
}

function outsideClick(element) {
    const html = document.documentElement;
    html.addEventListener('click', handleOutsideClick);

    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.classList.remove(active);
        }
    }
}
*/
