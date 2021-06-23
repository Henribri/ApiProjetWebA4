import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.dropTable('api_tokens')


  }

  public async down () {
    this.schema.createTable('api_tokens', (table) => {
      table.increments('token_id').primary

    })
  }
}
