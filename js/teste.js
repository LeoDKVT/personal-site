const requisicao = fetch("https://ranekapi.origamid.dev/json/api/produto")
    .then(response => {
        return response.json();
    })
    .then(jsonBody => {
        document.getElementById('#app').innerHTML = jsonBody[0].nome;
        console.log(jsonBody);
    });

console.log(requisicao);  // Recebe a informação da requisição.

const data = {
    id: "leodkvt",
    nome: "Leo",
    email: "leodkvt28@gmail.com",
    senha: "123456",
    cep: "123456",
    rua: "Ali Perto",
    numero: "774",
    bairro: "Botafogo",
    cidade: "Rio de Janeiro",
    estado: "Rio de Janeiro",
}

fetch("https://ranekapi.origamid.dev/json/api/usuario", {
    method: "POST",
    headers: {
        "Content-Type": "aplication/json"
    },
    body: JSON.stringify(data)
});
