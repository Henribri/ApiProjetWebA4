import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tokens extends BaseSchema {
  protected tableName = 'tokens'

  public async up () {

    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('id','refreshtoken_id')
      table.renameColumn('token','refreshtoken_token')
      table.renameColumn('expiration_date','refreshtoken_expiration_date')
    })
    this.schema.alterTable(this.tableName, (table) => {
      table.string('refreshtoken_token').notNullable().alter()
      table.dateTime('refreshtoken_expiration_date').notNullable().alter()
    })
    this.schema.renameTable(this.tableName, 'refreshtokens')
  }

  public async down () {
    this.schema.renameTable(this.tableName, 'tokens')
    this.schema.alterTable(this.tableName, (table) => {
      table.string('refreshtoken_token').nullable().alter()
      table.dateTime('refreshtoken_expiration_date').nullable().alter()
    })
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('refreshtoken_id','id')
      table.renameColumn('refreshtoken_token','token')
      table.renameColumn('refreshtoken_expiration_date','expiration_date')
    })

  }
}

