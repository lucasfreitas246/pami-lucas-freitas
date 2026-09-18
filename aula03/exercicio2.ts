let nomes: string[] = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais', 'Brasília'];

function listarCidades(lista: string[]): string {
    return `Estas são as 5 cidades: ${lista.join(', ')}!`;
}

let resultado = listarCidades(nomes); 
console.log(resultado);
