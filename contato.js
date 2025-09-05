const form = document.getElementById('form-contato');
const mensagem = document.getElementById('mensagem-enviada');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    mensagem.textContent = nome ? `Obrigado por enviar, ${nome}! ✨` : 'Obrigado por enviar!';

    mensagem.style.display = 'block';
    mensagem.style.opacity = '1';

    form.reset();

    setTimeout(() => {
        mensagem.style.opacity = '0';
        setTimeout(() => {
            mensagem.style.display = 'none';
        }, 300);
    }, 3000);
});
