"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const promises_1 = require("node:fs/promises");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const documentConfig = new swagger_1.DocumentBuilder()
        .setTitle('WebTherapy API')
        .setDescription('API for WebTherapy')
        .setVersion("1.0-PRE-ALPHA.0.0.1")
        .addTag("auth")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, documentConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    await (0, promises_1.writeFile)("./swagger-spec.json", JSON.stringify(document));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map