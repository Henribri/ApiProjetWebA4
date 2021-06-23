import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Livreurs extends BaseSchema {
  protected tableName = 'livreurs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('livreur_id').primary
      table.string('livreur_name').notNullable()
      table.string('livreur_lastname').notNullable()
      table.string('livreur_password').notNullable()
      table.string('livreur_email').notNullable()
      table.string('livreur_vehicule').notNullable()
      table.string('livreur_phone_number').notNullable()
      table.integer('livreur_fk_parrain_id').unsigned().references('livreur_id').inTable('livreurs')
      table.integer('livreur_fk_refresh_token_id').unsigned().references('refreshtoken_id').inTable('refreshtokens')
      table.integer('livreur_fk_address_id').unsigned().references('address_id').inTable('addresses')
      table.integer('livreur_fk_filleul_id').unsigned().references('livreur_id').inTable('livreurs')


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
