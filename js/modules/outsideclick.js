/*
    função que fecha o menu com click ou teouchstart fora do elemento
*/
export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';
    
    if (!element.hasAttribute(outside)) { // se o data-outside existir, significa que o evento já existe, não irá adicionar mais de uma vez
        events.forEach(userEvent => {
            // adiciona evento somente após bubble
            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick) ); // adiciona evento toda vez que ocorre clique ou touchstart no menu (handleClick)
        });
        
        element.setAttribute(outside, '');
    }
    function handleOutsideClick(event) {
        if (!element.contains(event.target)) { // condição: se menu não conter elemento que foi clicado
            element.removeAttribute(outside); // remove data-outside
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick); // remove envento junto com remoção da classe active no menu
            });
            callback(); // executa callback que remove classe active do menu
        }
    }
}