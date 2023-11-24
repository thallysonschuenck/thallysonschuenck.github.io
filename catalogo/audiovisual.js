function preencherFicha(filme) {
    const ficha = document.getElementById('ficha');
    const divFilme = document.createElement('div');
    divFilme.classList.add('filme');

    divFilme.innerHTML = `
        <h2>${filme.titulo}</h2>
        <p><strong>Resumo:</strong> ${filme.resumo}</p>
        <p><strong>Gêneros:</strong> ${filme.generos.join(', ')}</p>
        <p class="classificacao"><strong>Classificação Etária:</strong> ${filme.classificacao}</p>
        <p><strong>Elenco:</strong> ${filme.elenco.join(', ')}</p>
        <p><strong>Opiniões:</strong></p>
        <ul>
            ${filme.opinioes.map(opiniao => `<li>${opiniao.rating} - ${opiniao.descricao}</li>`).join('')}
        </ul>
        <img src="${filme.figura}" alt="${filme.titulo}">
    `;
    ficha.appendChild(divFilme);

    // Desafio 1: Alterar a cor da faixa etária
    const classificacaoEtaria = divFilme.querySelector('.classificacao');
    const idade = parseInt(filme.classificacao);
    if (idade <= 14) {
        classificacaoEtaria.style.color = 'green';
    } else if (idade > 14 && idade < 18) {
        classificacaoEtaria.style.color = '#ffd200';
    } else {
        classificacaoEtaria.style.color = 'red';
    }

    // Desafio 2: Representar a classificação com estrelas
    const opinioes = divFilme.querySelector('ul');
    opinioes.innerHTML = filme.opinioes.map(opiniao => `<li>${estrelasRating(opiniao.rating)} - ${opiniao.descricao}</li>`).join('');
}

function estrelasRating(rating) {
    return '★'.repeat(rating);
}

function carregarDadosDaURL(url) {
    fetch(url)
        .then(response => response.json())
        .then(lista => {
            console.log('Dados obtidos:', lista);
            lista.forEach(filme => {
                preencherFicha(filme);
            });
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error);
        });
}

const url = 'https://rafaelescalfoni.github.io/desenv_web/filmes.json';
carregarDadosDaURL(url);
