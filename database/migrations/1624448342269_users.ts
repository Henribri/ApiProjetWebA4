import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'user'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_id').primary()
      table.string('user_firstname').notNullable()
      table.string('user_lastname').notNullable()
      table.string('user_email').notNullable()
      table.string('user_password').notNullable()
      table.string('user_phone_number').notNullable()
      table.boolean('user_is_supported').notNullable()
      table.boolean('user_support').notNullable()
      table.boolean('user_is_delivery').notNullable()
      table.integer('fk_delivery_address_id').references('address_id').inTable('address')
      table.integer('fk_payment_address_id').references('address_id').inTable('address')
      table.integer('fk_credit_card_id').references('credit_card_id').inTable('credit_card')
      table.integer('fk_restorer_id').references('restorer_id').inTable('restorer')
      table.integer('fk_role_id').references('role_id').inTable('role')

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
