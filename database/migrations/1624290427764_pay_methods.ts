import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PayMethods extends BaseSchema {
  protected tableName = 'pay_methods'

  public async up () {

    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('id','paymethod_id')
      table.renameColumn('card_type','paymethod_card_type')
      table.renameColumn('card_number','paymethod_card_number')
    })
    this.schema.alterTable(this.tableName, (table) => {
      table.string('paymethod_card_type').notNullable().alter()
      table.integer('paymethod_card_number').notNullable().alter()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('paymethod_card_type').nullable().alter()
      table.integer('paymethod_card_number').nullable().alter()
    })
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('paymethod_id','id')
      table.renameColumn('paymethod_card_type','card_type')
      table.renameColumn('paymethod_card_number','card_number')
    })

  }
}
