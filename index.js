async function fetchApi() {
    let inputCep = document.getElementById('inputCep').value
    console.log(inputCep)
    let url = `https://viacep.com.br/ws/${inputCep}/json/`;
    console.log(url)
    let resposta = await fetch(url);
    const formatadaResposta = await resposta.json();
    // validaçao a resposta teve sucesso
    if(resposta.ok){
        return console.log("Sucesso", formatadaResposta)
    }
    return console.log('Erro: ', formatadaResposta?.message)
}

// fetch(`https://viacep.com.br/ws/88309450/json/`)
//     .then((resposta) => resposta.json().then( (value) => console.log(value)));