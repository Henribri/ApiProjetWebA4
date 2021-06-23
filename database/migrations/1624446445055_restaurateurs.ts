import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Restaurateurs extends BaseSchema {
  protected tableName = 'restaurateurs'

  public async up () {
    this.schema.dropTable(this.tableName)
  }

  public async down () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('restaurateur_id').primary
      table.string('restaurateur_name').notNullable()
      table.string('restaurateur_lastname').notNullable()
      table.string('restaurateur_password').notNullable()
      table.string('restaurateur_email').notNullable()
      table.string('restaurateur_restaurant_name').notNullable()
      table.string('restaurateur_phone_number').notNullable()
      table.integer('restaurateur_fk_parrain_id').unsigned().references('restaurateur_id').inTable('restaurateurs')
      table.integer('restaurateur_fk_refresh_token_id').unsigned().references('refreshtoken_id').inTable('refreshtokens')
      table.integer('restaurateur_fk_address_id').unsigned().references('address_id').inTable('addresses')
      table.integer('restaurateur_fk_filleul_id').unsigned().references('restaurateur_id').inTable('restaurateurs')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }
}
