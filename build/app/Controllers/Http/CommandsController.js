"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Command"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class CommandsController {
    async getCommand({ request, response }) {
        try {
            return await Command_1.default.findOne({ _id: request.input('command_id') });
        }
        catch (err) {
            return response.status(502);
        }
    }
    async createCommand({ request, response }) {
        try {
            await Command_1.default.create(request.body());
            return response.ok("Command created");
        }
        catch (err) {
            return response.status(502);
        }
    }
    async editCommand({ request, response }) {
        try {
            await Command_1.default.updateOne({ _id: request.input('command_id') }, request.body());
            return response.ok("Command edited");
        }
        catch (err) {
            return response.status(502);
        }
    }
    async deleteCommand({ request, response }) {
        try {
            await Command_1.default.deleteOne({ _id: request.input('command_id') });
            return response.ok("Command deleted");
        }
        catch (err) {
            return response.status(502);
        }
    }
    async payCommand({ request, response }) {
        try {
            await Command_1.default.updateOne({ _id: request.input('command_id') }, { paid: true });
            return response.ok("Command paid");
        }
        catch (err) {
            return response.status(502);
        }
    }
    async validateCommand({ request, response }) {
        try {
            await Command_1.default.updateOne({ _id: request.input('command_id') }, { "info.validated": true });
            return response.ok("Command validated");
        }
        catch (err) {
            return response.status(502);
        }
    }
    async getHistoricCommand({ request, response }) {
        try {
            const token = request.header('authorization').split(" ");
            const user_id = jsonwebtoken_1.default.verify(token[1], "TOKEN_PRIVATE_KEY").user_id;
            return response.send(await Command_1.default.find({ 'info.client.user_id': user_id }));
        }
        catch (err) {
            return response.status(502);
        }
    }
    async getCommands({ response }) {
        try {
            return response.send(await Command_1.default.find());
        }
        catch (err) {
            return response.status(502);
        }
    }
    async getCommandsByRestorer({ request, response }) {
        try {
            const restorer_id = request.input('restorer_id');
            return response.send(await Command_1.default.find({ 'info.restorer_id': restorer_id }));
        }
        catch (err) {
            return response.status(502);
        }
    }
    async deleteHistoricCommand({ request, response }) {
        try {
            await Command_1.default.deleteMany({ _id: { $in: request.body().delete_historic } });
            return response.ok("Commands deleted");
        }
        catch (err) {
            return response.status(502);
        }
    }
}
exports.default = CommandsController;
//# sourceMappingURL=CommandsController.js.map