import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PayMethods extends BaseSchema {
  protected tableName = 'pay_methods'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('paymethod_card_number').notNullable().alter()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('paymethod_card_number').notNullable().alter()
    })  }
}
