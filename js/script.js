
document.getElementById('backButton').addEventListener('click', function() {
    // Volta para a página anterior
    window.history.back();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    // Aqui você pode adicionar a lógica para verificar o login
    alert('Login realizado com sucesso!'); // Exemplo de alerta
});



