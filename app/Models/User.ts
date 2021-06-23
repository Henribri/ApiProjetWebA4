import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasOne,
  hasMany,
  HasOne,
  HasMany,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'

import Address from './Address'
import CreditCard from './CreditCard'
import internal from 'stream'
import Role from './Role'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public user_id: number

  @column()
  public user_firstname: string

  @column()
  public user_lastname: string

  @column()
  public user_email: string

  @column()
  public user_password: string

  @column()
  public user_phone_number: string

  @column()
  public user_is_supported: boolean

  @column()
  public user_support: boolean

  @column()
  public user_is_delivery: boolean

  @column()
  public fk_payement_address_id : number

  @column()
  public fk_delivery_address_id : number

  @column()
  public fk_credit_card_id : number

  @column()
  public fk_restorer_id : number

  @column()
  public fk_role_id : number


  @hasOne(()=>Address,{
    localKey : 'fk_payment_address_id'
  })
  public payement_address_id: HasOne<typeof Address>

  @hasOne(()=>Address,{
    localKey : 'fk_delivery_address_id'
  })
  public delivery_address_id: HasOne<typeof Address>

  @hasOne(()=>CreditCard,{
    localKey : 'fk_credit_card_id'
  })
  public credit_card_id: HasOne<typeof CreditCard>

  @belongsTo(()=>Role,{
    localKey: 'fk_role_id'
  })
  public role: BelongsTo<typeof Role>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.user_password = await Hash.make(user.user_password)
    }
  }
}
