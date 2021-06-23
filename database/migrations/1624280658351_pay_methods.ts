import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PayMethods extends BaseSchema {
  protected tableName = 'pay_methods'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary
      table.string('card_type')
      table.integer('card_number')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
