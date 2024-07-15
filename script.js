document.getElementById('ligarTvButton').addEventListener('click', function() {
    // Substitua 'endereco_da_tv' pelo endereço IP da sua TV LG
    var TV_IP = '192.168.1.100';
    var endpoint = '/api/power/on';  // Endpoint para ligar a TV

    // Monta a URL completa com o IP da TV e o endpoint
    var url = 'http://' + TV_IP + endpoint;

    // Envia uma requisição HTTP POST para ligar a TV
    fetch(url, {
        method: 'POST'
    }).then(response => {
        console.log('Comando enviado com sucesso!');
        // Adicione aqui lógica adicional conforme necessário
    }).catch(error => {
        console.error('Erro ao enviar comando:', error);
    });
});

document.getElementById('desligarTvButton').addEventListener('click', function() {
    // Substitua 'endereco_da_tv' pelo endereço IP da sua TV LG
    var TV_IP = '192.168.1.100';
    var endpoint = '/api/power/off';  // Endpoint para desligar a TV

    // Monta a URL completa com o IP da TV e o endpoint
    var url = 'http://' + TV_IP + endpoint;

    // Envia uma requisição HTTP POST para desligar a TV
    fetch(url, {
        method: 'POST'
    }).then(response => {
        console.log('Comando enviado com sucesso!');
        // Adicione aqui lógica adicional conforme necessário
    }).catch(error => {
        console.error('Erro ao enviar comando:', error);
    });
});