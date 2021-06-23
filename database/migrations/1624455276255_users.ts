import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'user'

  public async up () {
    this.schema.renameTable('user','users')
    this.schema.renameTable('address','addresses')
    this.schema.renameTable('role','roles')
    this.schema.renameTable('restorer','restorers')
    this.schema.renameTable('credit_card','credit_cards')
    this.schema.dropTable('livreurs')

  }

  public async down () {
    this.schema.renameTable('users','user')
    this.schema.renameTable('addresses','address')
    this.schema.renameTable('roles','role')
    this.schema.renameTable('restorers','restorer')
    this.schema.renameTable('credit_cards','credit_card')
  }
}
