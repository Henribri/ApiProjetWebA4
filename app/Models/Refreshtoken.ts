import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Refreshtoken extends BaseModel {
  @column({ isPrimary: true })
  public refreshtoken_id: number

  @column({ serializeAs: null })
  public refreshtoken_token: string

  @column({ serializeAs: null })
  public refreshtoken_expiration_date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
