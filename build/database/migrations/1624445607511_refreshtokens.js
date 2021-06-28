"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Refreshtokens extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'refreshtokens';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.renameColumn('refreshtoken_id', 'refresh_token_id');
            table.renameColumn('refreshtoken_token', 'refresh_token');
            table.renameColumn('refreshtoken_expiration_date', 'refresh_token_expire_date');
            table.dateTime('refresh_token_created_date').notNullable;
        });
        this.schema.renameTable(this.tableName, 'refresh_token');
    }
    async down() {
        this.schema.renameTable('refresh_token', this.tableName);
        this.schema.alterTable(this.tableName, (table) => {
            table.renameColumn('refresh_token_id', 'refreshtoken_id');
            table.renameColumn('refresh_token', 'refreshtoken_token');
            table.renameColumn('refresh_token_expire_date', 'refreshtoken_expiration_date');
            table.dropColumn('refresh_token_created_date');
        });
    }
}
exports.default = Refreshtokens;
//# sourceMappingURL=1624445607511_refreshtokens.js.map