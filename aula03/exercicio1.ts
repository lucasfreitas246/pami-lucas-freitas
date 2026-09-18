let produto: string = 'Mouse';
let preco: number = 59.90; 
let disponivel: boolean = true;

let textoDisponivel: string = disponivel ? 'Sim' : 'Não';

console.log(`Produto: ${produto} - Preço: R$${preco.toFixed(2)} - Disponível: ${textoDisponivel}`);
