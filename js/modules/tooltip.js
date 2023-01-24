export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver); // adicionando evento mouseover em cada item
    });

    function onMouseOver(event) { // callback do evento mouseover
        // this ou event.currentTarget
        const tooltipBox = criarTooltipBox(this); // novo elemento que irá aparecer quanto o mouse passar sobre

        onMouseMove.tooltipBox = tooltipBox;
        // mousemove = enquanto mouse se move sobre objeto.
        // passando objeto onMouseMove no callback
        this.addEventListener('mousemove', onMouseMove);

        // tooltipBox do objeto onMouseLeave receberá o tooltipBox do onMouseOver
        onMouseLeave.tooltipBox = tooltipBox; // adicionando o atributo tooltipBox no objeto
        onMouseLeave.element = this; // adicionando atributo element e atribuindo o this

        // quando o mouse está sobre o elemento, adiciona evento mouseleave (mouse retirado)
        this.addEventListener('mouseleave', onMouseLeave);
        // onMouseLeave é um objeto sendo passado como callback
        // aqui o método handleEvent() será ativado
    }

    const onMouseLeave = { // exetuta quando mouse é retirado
        handleEvent() { // o nome do método deve ser handleEvent() para funcionar
            this.tooltipBox.remove(); // remove tooltipBox
            this.element.removeEventListener('mouseleave', onMouseLeave); // remove do element o evento mouseleave e objeto callback
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }

    const onMouseMove = {
        handleEvent(event) {
        // a tooltip abrirá onde o mouse passar
        // top e left da tooltipBox será o mesmo do evento de mouse
        // o atributo top terá o mesmo valor da posição do mouse no eixo Y(vertical)
        // e o atributo left o mesmo do eixo X (horizontal)
        this.tooltipBox.style.top = event.pageY + 20 + 'px'; // adiciona mais 20px
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    function criarTooltipBox(element) { // criando novo elemento
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip'); // adicionando classe para estilizar css
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox); // adicionado elemento ao final do body
        return tooltipBox;
    }
}