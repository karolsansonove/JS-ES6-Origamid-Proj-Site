//// ANIMAÇÃO PARA DAS SECTIONS NO SCROLL
export default function initAnimationSections() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const windowPercent = window.innerHeight * 0.7; // 70% da altura da tela;

    function animaScroll() { // callback
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top; // armazenando o valor de altura entre topo da página e section
            const isSectionVisible = (sectionTop - windowPercent) < 0; // armazenando boolean, se altura está abaixo de 70% ou não
            if (isSectionVisible) {
                section.classList.add('ativo');
            }
        });
    }
    animaScroll(); // roda uma vez ao carregar a página para a primeira sectiona se tornar visível

    window.addEventListener('scroll', animaScroll); // adicionando evento scroll
}