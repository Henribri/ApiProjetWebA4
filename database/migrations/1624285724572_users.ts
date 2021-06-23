import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('email')
      table.dropColumn('password')
      table.dropColumn('User_LastName')
      table.dropColumn('User_Name')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.string('email')
      table.string('password')
      table.string('User_LastName')
      table.string('User_Name')


    })
  }
}
