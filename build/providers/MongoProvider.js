"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class MongoProvider {
    constructor(app) {
        this.app = app;
    }
    register() {
        const mongoose = new mongoose_1.Mongoose();
        mongoose.connect('mongodb+srv://Geralt:Ciri@' +
            'corbeilleexo.tag2v.mongodb.net:/Apollon', { useNewUrlParser: true, useUnifiedTopology: true });
        this.app.container.singleton('Mongoose', () => mongoose);
    }
    async boot() {
    }
    async ready() {
    }
    async shutdown() {
        await this.app.container.use('Mongoose').disconnect();
    }
}
exports.default = MongoProvider;
//# sourceMappingURL=MongoProvider.js.map