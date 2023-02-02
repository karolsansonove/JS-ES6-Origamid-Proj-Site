export default function initAnimaNumeros() {
    function animaNumeros() {
        const numeros = document.querySelectorAll('[data-numero]');
    
        numeros.forEach(numero => {
            const total = +numero.innerText;
            const incremento = Math.floor(total / 100);
            let start = 0;
    
            const contador = setInterval(() => {
                start = start + incremento;
                numero.innerText = start;
                if (start > total) {
                    numero.innerText = total;
                    clearInterval(contador);
                }
            }, 25 * Math.random()); // tempo aleatório
        });
    }
    
    // callback do MutationObserver
    function handleMutation(mutation) { // parâmetro mutation possui um array-like MutationRecord
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros();
        }
    }
    
    // MutationRecord possui todas as mutações que ocorreram
    
    const observerTarget = document.querySelector('.numeros'); // elemento que será observado
    const observer = new MutationObserver(handleMutation);
    
    observer.observe(observerTarget, {attributes: true});
    // observe() = passar no parâmetro o elemento a ser observado e um objeto com opções do objetos para observar
}



/*
// minha versão

numeros.forEach(numero => {
    const total = +numero.innerText;
    
    let start = 0;
    const contador = setInterval(() => {
        start += 50;
        if (start <= total) {
            numero.innerText = start;
        } else {
            numero.innerHTML = total;
        }
    });
});
*/