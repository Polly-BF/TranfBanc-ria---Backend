const rotas = require('express').Router()

const conexao = require ('./config/conexao')

// rota para listar os dados do databaseexerc, ou seja, listar todos os clientes do banco
rotas.get('/', (req,res)=>{
    // criando uma query para selecionar todos os dados da tabela tb_banco
    let sql = 'select * from tb_banco'
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json(rows)
    })
})

// rota para mostrar apenas um cliente de acordo com o seu id
rotas.get('/:id', (req,res)=>{
    const {id} = req.params
    let sql = 'select * from tb_banco where id_transferencia = ?' 
    conexao.query(sql,[id], (erro,rows,fields)=>{
        if(erro)throw erro 
        res.json(rows[0])  
    })
})

// rota para deletar um cliente específico através do seu id 
rotas.delete('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `delete from tb_banco where id_transferencia = ${id}`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro 
        res.json({status:'cliente excluído com sucesso'})  
    })
})

// essa rota é para fazer uma inclusão na tabela de clientes
rotas.post('/', (req,res)=>{
    const {nomeCliente,valor,contaCliente} = req.body
    let sql = `insert into tb_banco(nomeCliente,valor,contaCliente) values('${nomeCliente}','${valor}','${contaCliente}')`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro 
        res.json({status:'cliente incluído com sucesso'}) 
    })
})

// essa rota é para editar um cliente na tabela
rotas.put('/:id', (req,res)=>{
    const {id} = req.params
    const {nomeCliente,valor,contaCliente} = req.body
    let sql = `update tb_banco set 
            nomeCliente = '${nomeCliente}', 
            valor = '${valor}',
            contaCliente = '${contaCliente}' where id_transferencia = '${id}'`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro 
        res.json({status:'cliente editado com sucesso'}) 
    })
})


module.exports = rotas