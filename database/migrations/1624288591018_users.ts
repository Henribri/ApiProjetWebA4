import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('id','user_id')


    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('user_id','id')


    })
  }
}
