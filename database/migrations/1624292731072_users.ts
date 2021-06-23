import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('user_name').notNullable()
      table.string('user_lastname').notNullable()
      table.string('user_password').notNullable()
      table.string('user_email').notNullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('user_name')
      table.dropColumn('user_lastname')
      table.dropColumn('user_password')
      table.dropColumn('user_email')
    })
  }
}
