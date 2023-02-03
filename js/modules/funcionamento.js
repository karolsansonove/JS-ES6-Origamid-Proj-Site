export default function initFuncionamento() {
    const diasSemana = document.querySelector('[data-semana]').dataset.semana.split(',').map(Number);
    const horarios = document.querySelector('[data-horario]').dataset.horario.split(',').map(Number);
    const funcionamento = document.querySelector('[data-semana]');
    
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDay(); // getDay = dia da semana, índices de 0 até 6
    const horaAtual = dataAtual.getHours(); // getHours = hora
    
    const horarioAberto = (horaAtual >= horarios[0] && horaAtual < horarios[1]);
    
    if (diasSemana.includes(diaAtual) && horarioAberto) {
        funcionamento.classList.add('aberto');
    }
}