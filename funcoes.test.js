const funcoes = require('./funcoes');

test('Dois mais dois deverá ser igual a quatro', () => {
    expect(funcoes.somarDoisValores(2, 2))
    .toBe(4);
});

test('Sempre nulo deverá ser igual a null', () => {
    expect(funcoes.sempreNulo())
    .toBeNull();
});

//Códigos válidos: 100, 101, 500, 999
test('Código 100 deverá ser válido', () => {
    expect(funcoes.codigoValido(100))
    .toBeTruthy();
});

test('Código 101 deverá ser válido', () => {
    expect(funcoes.codigoValido(101))
    .toBeTruthy();
});

test('Código 500 deverá ser válido', () => {
    expect(funcoes.codigoValido(500))
    .toBeTruthy();
});

test('Código 999 deverá ser válido', () => {
    expect(funcoes.codigoValido(999))
    .toBeTruthy();
});

//Códigos inválidos: -1, 5, 1000
test('Código -1 deverá ser inválido', () => {
    expect(funcoes.codigoValido(-1))
    .toBeFalsy();
});

test('Código 5 deverá ser inválido', () => {
    expect(funcoes.codigoValido(5))
    .toBeFalsy();
});

test('Código 1000 deverá ser inválido', () => {
    expect(funcoes.codigoValido(1000))
    .toBeFalsy();
});

//TDD
//Escrever o teste primeiro
//Inverter strings
//ANA -> ANA
//Jest -> tseJ

test('Inverter a string ANA deverá retornar ANA', () => {
    expect(funcoes.inverterString('ANA'))
    .toEqual('ANA');
});

test('Inverter a string JEST deverá retornar TSEJ', () => {
    expect(funcoes.inverterString('JEST'))
    .toEqual('TSEJ');
});

const casosInversaoString =[['DANIEL', 'LEINAD'], ['ANA', 'ANA'], ['JEST', 'TSEJ'], ['TESTE', 'ETSET'], ['JAVA', 'AVAJ']];

describe('Inversão de Strings', () => {
    test.each(casosInversaoString)('Inverter a string %s deverá retornar %s', (entrada, esperado) => {
        const resultado = funcoes.inverterString(entrada);
        expect(funcoes.inverterString(entrada)).toEqual(esperado);
    });
});

//Não faremos o teste da 'funcaoNaoTestada' -> cobertura de código < 100%
//jsonplaceholder.typicode.com

//Usando Promises

test('[Promise] Deve carregar o primeiro usuário de teste -> Leanne Graham', () => {
    expect.assertions(1);
    return funcoes.funcaoBuscarUsuario1().then(dados => {
        expect(dados.name).toEqual('Leanne Graham');
    });
});

//Usando Async Await
test('[AsyncAwait] Deve carregar o primeiro usuário de teste -> Leanne Graham', async () => {
    expect.assertions(1);
    const dados = await funcoes.funcaoBuscarUsuario1();
    expect(dados.name).toEqual('Leanne Graham');
});