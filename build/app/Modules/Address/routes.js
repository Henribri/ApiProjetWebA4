"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.post('address', 'AddressController.create');
Route_1.default.get('address', '');
Route_1.default.get('address/:id', '');
Route_1.default.delete('address/:id', '');
Route_1.default.put('address/:id', '');
//# sourceMappingURL=routes.js.map