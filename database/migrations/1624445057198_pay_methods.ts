import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PayMethods extends BaseSchema {
  protected tableName = 'pay_methods'

  public async up () {

    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('paymethod_id','credit_card_id')
      table.renameColumn('paymethod_card_type','credit_card_type')
      table.renameColumn('paymethod_card_number','credit_card_num')

    })
    this.schema.renameTable(this.tableName,'credit_card')
  }

  public async down () {
    this.schema.renameTable('credit_card',this.tableName)
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('credit_card_id','paymethod_id')
      table.renameColumn('credit_card_type','paymethod_card_type')
      table.renameColumn('credit_card_num','paymethod_card_number')

    })
  }
}
