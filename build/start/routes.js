"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('', () => {
    return '';
});
Route_1.default.group(() => {
    Route_1.default.get('command', 'CommandsController.getCommand');
    Route_1.default.post('command', 'CommandsController.createCommand');
    Route_1.default.delete('command', 'CommandsController.deleteCommand');
    Route_1.default.put('command', 'CommandsController.editCommand');
    Route_1.default.patch('pay', 'CommandsController.payCommand');
    Route_1.default.patch('validate', 'CommandsController.validateCommand');
    Route_1.default.get('commands', 'CommandsController.getCommands');
    Route_1.default.get('commands-restorer', 'CommandsController.getCommandsByRestorer');
    Route_1.default.get('historic', 'CommandsController.getHistoricCommand');
    Route_1.default.delete('historic', 'CommandsController.deleteHistoricCommand');
}).middleware('auth');
//# sourceMappingURL=routes.js.map