module.exports = {
  attributes: {
    nome: {
      type: 'string',
      columnType: 'varchar',
      required: true,
      unique: true
    }

    sigla: {
      type: 'string',
      columnType: 'char',
      unique: true
    }

    descricao: {
      type: 'string',
      columnType: 'text'
    }
  }
}
