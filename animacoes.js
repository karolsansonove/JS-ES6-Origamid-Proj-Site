//// NAVEGAÇÃO POR TABS
function initTabNav() { // função que inicia navegação por tab
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    const activeClass = 'ativo';

    if (tabMenu.length && tabContent.length) { // só executa se existir elementos em tabMenu e tabContent

        tabContent[0].classList.add(activeClass); // mantém ativa a primeira section da tabContent ao carregar a página

        // adicionando classe 'ativo' apenas na section com índice passado por parâmetro
        function activeTab(index) {
            tabContent.forEach((item) => { // remove classe 'ativo' de todas as sections
                item.classList.remove(activeClass);
            });
            const direcao = tabContent[index].dataset.anime; // armazena valor do dataset
            tabContent[index].classList.add(activeClass, direcao); // adiciona classe 'ativo' e direcao no index do argumento
        }

        // adicionando evento de click nos elementos do tabMenu
        // (o click no item do tabMenu irá adicionar a classe 'ativo' no item do tabContent)
        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

//// ACCORDION LIST
function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';
    if (accordionList.length) {

        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

// SCROLL SUAVE LINKS INTERNOS
function initScrollSuave() {
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
initScrollSuave();

//// ANIMAÇÃO PARA DAS SECTIONS NO SCROLL
function initAnimationSections() {
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
initAnimationSections();