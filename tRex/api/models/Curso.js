module.exports = {
  attributes: {
    nome: {
      type: 'string',
      columnType: 'varchar(100)',
      required: true,
      maxLength: 100
    },

    sigla: {
      type: 'string',
      columnType: 'char(4)',
      required: true
    },

    descricao: {
      type: 'string',
      columnType: 'text'
    }
  }
}
