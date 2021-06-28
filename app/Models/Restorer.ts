import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'
import User from './User'

export default class Restorer extends BaseModel {
  @column({ isPrimary: true })
  public restorer_id: number

  @column()
  public restorer_name : string

  @column()
  public fk_address_id : number

  @belongsTo(()=>Address, {
    foreignKey : 'fk_address_id'
  })
  public address : BelongsTo<typeof Address>

  @hasOne(()=>User, {
    localKey : 'restorer_id'
  })
  public user : HasOne<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
