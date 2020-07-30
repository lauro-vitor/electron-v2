module.exports  = error => {
    switch(error.errno) {
        case 1146:
            return 'Tabela não registrada na base de dados';
        case 1451:
            return(
                `Não foi possível excluir, porque o registro possui uma
                referência em outra tabela`); 
        case 1452:
            return `Error ao adicionar Usuário`;
        case 1064:
            return `Erro de sintaxe SQL!`;
        case 1048:
            return `Contém campos nulos, dados inválidos : ${error.sqlMessage} `;
        default :
            return `Error Não conhecido : ${error.sqlMessage}`;
    }
}