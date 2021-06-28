"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Address_1 = __importDefault(require("./Address"));
const CreditCard_1 = __importDefault(require("./CreditCard"));
const Role_1 = __importDefault(require("./Role"));
const Restorer_1 = __importDefault(require("./Restorer"));
class User extends Orm_1.BaseModel {
    static async hashPassword(user) {
        if (user.$dirty.password) {
            user.password = await Hash_1.default.make(user.password);
        }
    }
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], User.prototype, "user_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], User.prototype, "user_firstname", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], User.prototype, "user_lastname", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], User.prototype, "user_email", void 0);
__decorate([
    Orm_1.column({ columnName: 'user_password' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], User.prototype, "user_phone_number", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Boolean)
], User.prototype, "user_is_supported", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Boolean)
], User.prototype, "user_support", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Boolean)
], User.prototype, "user_is_delivery", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], User.prototype, "fk_payment_address_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], User.prototype, "fk_delivery_address_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], User.prototype, "fk_credit_card_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], User.prototype, "fk_restorer_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], User.prototype, "fk_role_id", void 0);
__decorate([
    Orm_1.belongsTo(() => Address_1.default, {
        foreignKey: 'fk_payment_address_id'
    }),
    __metadata("design:type", Object)
], User.prototype, "payment_address_id", void 0);
__decorate([
    Orm_1.belongsTo(() => Address_1.default, {
        foreignKey: 'fk_delivery_address_id'
    }),
    __metadata("design:type", Object)
], User.prototype, "delivery_address_id", void 0);
__decorate([
    Orm_1.belongsTo(() => CreditCard_1.default, {
        foreignKey: 'fk_credit_card_id'
    }),
    __metadata("design:type", Object)
], User.prototype, "credit_card", void 0);
__decorate([
    Orm_1.belongsTo(() => Role_1.default, {
        foreignKey: 'fk_role_id'
    }),
    __metadata("design:type", Object)
], User.prototype, "role", void 0);
__decorate([
    Orm_1.belongsTo(() => Restorer_1.default, {
        foreignKey: 'fk_restorer_id'
    }),
    __metadata("design:type", Object)
], User.prototype, "restorer", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], User.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], User.prototype, "updatedAt", void 0);
__decorate([
    Orm_1.beforeSave(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User]),
    __metadata("design:returntype", Promise)
], User, "hashPassword", null);
exports.default = User;
//# sourceMappingURL=User.js.map