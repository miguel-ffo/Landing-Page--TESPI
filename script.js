
  function buscarPreco(instrumentId, nomeMoeda) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://api.coinext.com.br:8443/AP/GetL2Snapshot';

    fetch(proxy + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            OMSId: 1,
            InstrumentId: instrumentId,
            Depth: 1
        })
    })
    .then(response => response.json())
    .then(data => {
        // Extrai o último preço negociado (posição 4 na maioria das sublistas)
        const ultimosPrecos = data.map(item => item[4]).filter(preco => preco);
        const precoAtual = ultimosPrecos.length > 0 ? ultimosPrecos[0] : 'N/A';

        document.getElementById('resultado').innerHTML = `
            <h2>${nomeMoeda}</h2>
            <p><strong>Preço Atual:</strong> R$ ${parseFloat(precoAtual).toFixed(2)}</p>
        `;
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
        document.getElementById('resultado').innerText = 'Erro ao buscar dados.';
    });
}