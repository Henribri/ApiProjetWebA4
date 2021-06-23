import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('id','address_id')
      table.renameColumn('city','address_city')
      table.renameColumn('street','address_street')
      table.renameColumn('street_number','address_street_number')
      table.renameColumn('postal_code','address_postal_code')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('address_id','id')
      table.renameColumn('address_city','city')
      table.renameColumn('address_street','street')
      table.renameColumn('address_street_number','street_number')
      table.renameColumn('address_postal_code','postal_code')
    })
  }
}
