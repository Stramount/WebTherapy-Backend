import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {writeFile} from 'node:fs/promises'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const documentConfig = new DocumentBuilder()
        .setTitle('WebTherapy API')
        .setDescription('API for WebTherapy')
        .setVersion("1.0-PRE-ALPHA.0.0.1")
    // .addTag("WebTherapy") you can add tags here
        .build();

    const document = SwaggerModule.createDocument(app, documentConfig, );
    SwaggerModule.setup('api', app, document);

    await writeFile("./swagger-spec.json", JSON.stringify(document));
    await app.listen(3000);
}
bootstrap();
