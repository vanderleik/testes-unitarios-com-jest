const axios = require('axios');

const funcoes = {
    somarDoisValores: (v1, v2) => v1 + v2,
    sempreNulo: () => null,
    codigoValido: function(codigo) {
        if (codigo >= 100 && codigo <= 999) {
            return true;
        } else {
            return false;
        }
    },
    inverterString: str => str.split('').reverse().join(''),

    //Análise de cobertura de testes
    funcaoNaoTestada: (v) => v + 1, //Função que retorna seu argumento somando +1

    funcaoBuscarUsuario1: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.data)
    .catch(error => 'Erro ao buscar usuário'),

}

module.exports = funcoes;