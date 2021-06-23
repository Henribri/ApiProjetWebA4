import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo , BelongsTo} from '@ioc:Adonis/Lucid/Orm'

import User from './User'
export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public address_id: number

  @column({ serializeAs: null })
  public address_city: string

  @column({ serializeAs: null })
  public address_street: string

  @column({ serializeAs: null })
  public address_street_number: number

  @column({ serializeAs: null })
  public address_postal_code: number

  /*@belongsTo(() => User)
  public user: BelongsTo<typeof User>*/

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
