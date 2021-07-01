import { DateTime } from 'luxon'
import { BaseModel, column,  HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import Restorer from './Restorer'
export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public address_id: number

  @column()
  public address_city: string

  @column()
  public address_street: string

  @column()
  public address_street_number: number

  @column()
  public address_postal_code: number

  @hasMany(() => User,{
    localKey:'address_id'
  })
  public user: HasMany<typeof User>

  @hasMany(()=>Restorer,{
    foreignKey:'address_id'
  })
  public restorer: HasMany<typeof Restorer>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
