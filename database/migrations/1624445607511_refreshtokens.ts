import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Refreshtokens extends BaseSchema {
  protected tableName = 'refreshtokens'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('refreshtoken_id','refresh_token_id')
      table.renameColumn('refreshtoken_token','refresh_token')
      table.renameColumn('refreshtoken_expiration_date','refresh_token_expire_date')
      table.dateTime('refresh_token_created_date').notNullable
    })

    this.schema.renameTable(this.tableName,'refresh_token')
  }

  public async down () {
    this.schema.renameTable('refresh_token',this.tableName)
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('refresh_token_id','refreshtoken_id')
      table.renameColumn('refresh_token','refreshtoken_token')
      table.renameColumn('refresh_token_expire_date','refreshtoken_expiration_date')
      table.dropColumn('refresh_token_created_date')
    })


  }
}
