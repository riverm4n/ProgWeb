module.exports = {
  attributes: {
    jogador: {
      type: 'number',
      columnType: 'int',
      required: true,
      unique: true
    },

    pontuacao: {
      type: 'number',
      columnType: 'int',
      required: true
    },

    data: {
      type: 'string',
      columnType: 'varchar',
      required: true
    }
  }
}
