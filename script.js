function getDadosEnderecoPorCEP(cep) {
    console.log(cep);
    let url = 'https://viacep.com.br/ws/' + cep + '/json';
    console.log(url);

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xmlHttp.setRequestHeader('Content-Type', 'application/json'); // Atribuição de tipo de documento a receber
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let dadosJSONText = xmlHttp.responseText;
            let dadosJSONObj = JSON.parse(dadosJSONText);

            document.getElementById('endereco').value = dadosJSONObj.logradouro
            document.getElementById('bairro').value = dadosJSONObj.bairro
            document.getElementById('cidade').value = dadosJSONObj.localidade
            document.getElementById('uf').value = dadosJSONObj.uf
            
            console.log(dadosJSONObj)
        }
    }
    xmlHttp.send();
}