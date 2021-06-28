"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.post('address/:type', 'AddressesController.create');
    Route_1.default.get('addresses', 'AddressesController.index');
    Route_1.default.get('address/:type', 'AddressesController.getById');
    Route_1.default.delete('address/:type', 'AddressesController.delete');
    Route_1.default.put('address/:type', 'AddressesController.update');
});
Route_1.default.group(() => {
    Route_1.default.post('creditCard', 'CreditCardsController.create');
    Route_1.default.get('creditCards', 'CreditCardsController.index');
    Route_1.default.get('creditCard', 'CreditCardsController.getById');
    Route_1.default.delete('creditCard', 'CreditCardsController.delete');
    Route_1.default.put('creditCard', 'CreditCardsController.update');
}).middleware('auth');
Route_1.default.group(() => {
    Route_1.default.get('user', 'UserController.index');
    Route_1.default.get('user/:id', 'UserController.getById');
    Route_1.default.delete('user/:id', 'UserController.delete');
    Route_1.default.put('user/:id', 'UserController.update');
    Route_1.default.put('user/support/:id', 'UserController.updateSponsor');
}).middleware('auth');
Route_1.default.group(() => {
    Route_1.default.post('user/client', 'UserController.createClient');
    Route_1.default.post('user/delivery', 'UserController.createDelivery');
    Route_1.default.post('user/restorer', 'UserController.createRestorer');
    Route_1.default.get('restorers', 'RestorersController.index');
});
Route_1.default.group(() => {
    Route_1.default.post('restorer', 'RestorersController.createClient');
    Route_1.default.get('restorer', 'RestorersController.getById');
    Route_1.default.delete('restorer', 'RestorersController.delete');
    Route_1.default.put('restorer', 'RestorersController.update');
}).middleware('auth');
Route_1.default.get('', () => {
    return '';
});
//# sourceMappingURL=routes.js.map