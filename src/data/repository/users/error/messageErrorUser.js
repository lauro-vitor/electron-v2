module.exports  = error => {
    switch(error.errno) {
        case 1451:
            return(
                `Não pode excluir ou atualizar, porque o registro possui uma
                referência em outra tabela:`); 
        case 1452:
            return `Error ao adicionar Usuário: ${error.sqlMessage}`;
        case 1064:
            return `Erro de sintaxe SQL : ${error.sqlMessage}!`;
        case 1048:
            return `Contém campos nulos, dados inválidos : ${error.sqlMessage} `;
        default :
            return `Error Não conhecido : ${error.sqlMessage}`;
    }
}