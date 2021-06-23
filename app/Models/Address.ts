import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo , BelongsTo, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import Restorer from './Restorer'
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

  @hasMany(() => User,{
    localKey:'address_id'
  })
  public user: HasMany<typeof User>

  @belongsTo(()=>Restorer,{
    foreignKey:'address_id'
  })
  public restorer: BelongsTo<typeof Restorer>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
