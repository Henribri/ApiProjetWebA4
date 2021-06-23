import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.renameTable(this.tableName,'address')
  }

  public async down () {
    this.schema.renameTable('address',this.tableName)

  }
}
