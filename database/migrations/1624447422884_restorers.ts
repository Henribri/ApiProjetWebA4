import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Restorers extends BaseSchema {
  protected tableName = 'restorer'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('restorer_id').primary
      table.string('restorer_name').notNullable()
      table.integer('fk_address_id').references('address_id').inTable('addresses')

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
