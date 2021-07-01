import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class PayMethod extends BaseModel {
  public static table = 'credit_cards'

  @column({ isPrimary: true })
  public credit_card_id: number

  @column()
  public credit_card_type: string

  @column()
  public credit_card_num: number

  @hasOne(()=>User, {
    localKey: 'credit_card_id'
  })
  public user: HasOne<typeof User>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
