"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Tokens extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'tokens';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.renameColumn('id', 'refreshtoken_id');
            table.renameColumn('token', 'refreshtoken_token');
            table.renameColumn('expiration_date', 'refreshtoken_expiration_date');
        });
        this.schema.alterTable(this.tableName, (table) => {
            table.string('refreshtoken_token').notNullable().alter();
            table.dateTime('refreshtoken_expiration_date').notNullable().alter();
        });
        this.schema.renameTable(this.tableName, 'refreshtokens');
    }
    async down() {
        this.schema.renameTable(this.tableName, 'tokens');
        this.schema.alterTable(this.tableName, (table) => {
            table.string('refreshtoken_token').nullable().alter();
            table.dateTime('refreshtoken_expiration_date').nullable().alter();
        });
        this.schema.alterTable(this.tableName, (table) => {
            table.renameColumn('refreshtoken_id', 'id');
            table.renameColumn('refreshtoken_token', 'token');
            table.renameColumn('refreshtoken_expiration_date', 'expiration_date');
        });
    }
}
exports.default = Tokens;
//# sourceMappingURL=1624289941385_tokens.js.map