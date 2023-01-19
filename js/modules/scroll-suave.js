// SCROLL SUAVE LINKS INTERNOS
export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event) { // scroll suave
        event.preventDefault(); // prevenindo comportamento padrão do link ao clicar

        const href = event.currentTarget.getAttribute('href'); // atributo href do link (#animais, #faq, etc.)
        const section = document.querySelector(href); // section que será exibida

        section.scrollIntoView({ // trazer elemento (section) para visualização
            behavior: 'smooth', // comportamento: 'suave';
            block: 'start' // alinhar o bloco ao início/topo da página
        });

        /*
        // forma alternativa:

        const topo = section.offsetTop;

        // scrollTo(eixo X|horizontal, eixo Y|vertical)
        // scrollTo({objeto})
        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        }); // scroll da página até a section
        */
    }
    
    linksInternos.forEach((link) => { // adicionando evento de clique em todos os links internos
        link.addEventListener('click', scrollToSection);
    });
}