import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('user_fk_payement_address_id').unsigned().references('address_id').inTable('addresses')
      table.integer('user_fk_parrain_id').unsigned().references('user_id').inTable('users')
      table.integer('user_fk_refresh_token_id').unsigned().references('refreshtoken_id').inTable('refreshtokens')
      table.integer('user_fk_pay_method_id').unsigned().references('paymethod_id').inTable('pay_methods')
      table.integer('user_fk_delivery_address_id').unsigned().references('address_id').inTable('addresses')
      table.integer('user_fk_filleul_id').unsigned().references('user_id').inTable('users')


    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('user_fk_payement_address_id')
      table.dropColumn('user_fk_parrain_id')
      table.dropColumn('user_fk_refresh_token_id')
      table.dropColumn('user_fk_delivery_address_id')
      table.dropColumn('user_fk_filleul_id')

    })
  }
}
