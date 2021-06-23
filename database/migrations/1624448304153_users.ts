import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.dropTable(this.tableName)
  }

  public async down () {

    this.schema.createTable(this.tableName, (table) => {
      table.string('user_name').notNullable()
      table.string('user_lastname').notNullable()
      table.string('user_password').notNullable()
      table.string('user_email').notNullable()
      table.string('user_phone_number').notNullable()

      table.integer('user_fk_payement_address_id').unsigned().references('address_id').inTable('addresses')
      table.integer('user_fk_parrain_id').unsigned().references('user_id').inTable('users')
      table.integer('user_fk_refresh_token_id').unsigned().references('refreshtoken_id').inTable('refreshtokens')
      table.integer('user_fk_pay_method_id').unsigned().references('paymethod_id').inTable('pay_methods')
      table.integer('user_fk_delivery_address_id').unsigned().references('address_id').inTable('addresses')
      table.integer('user_fk_filleul_id').unsigned().references('user_id').inTable('users')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }
}
