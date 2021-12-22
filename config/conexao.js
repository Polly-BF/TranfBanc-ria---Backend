// variável para instanciar o pacote do mysql
const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: 'localhost',
    //Root - usuário padrão do MySQL
    user: 'root',
    password: '#Foco219',
    port: 3306,
    database: 'db_basicoexerc'
})

conexao.connect((erro)=>{
    if(erro)throw erro
    console.log('Estamos conectados a base de dados') 
})

module.exports = conexao


// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'