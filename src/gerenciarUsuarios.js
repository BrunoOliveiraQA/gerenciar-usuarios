const usuarios = ['Matheus', 'Lucas', 'Marcos', 'João'];

function retornarUsuarios(){
    return usuarios;
}

function adicionarNovoUsuario(nome){
    usuarios.push(nome);
}


module.exports = {
    usuarios,
    retornarUsuarios,
    adicionarNovoUsuario
}