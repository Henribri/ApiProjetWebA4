import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class PayMethod extends BaseModel {
  @column({ isPrimary: true })
  public credit_card_id: number

  @column({ serializeAs: null })
  public credit_card_type: string

  @column({ serializeAs: null })
  public credit_card_num: number

  @belongsTo(()=>User)
  public user: BelongsTo<typeof User>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
