import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('address_city').notNullable().alter()
      table.string('address_street').notNullable().alter()
      table.integer('address_street_number').notNullable().alter()
      table.integer('address_postal_code').notNullable().alter()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('address_city').nullable().alter()
      table.string('address_street').nullable().alter()
      table.integer('address_street_number').nullable().alter()
      table.integer('address_postal_code').nullable().alter()
    })
  }
}
