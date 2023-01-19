//// NAVEGAÇÃO POR TABS
// função que inicia navegação por tab
export default function initTabNav() {
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