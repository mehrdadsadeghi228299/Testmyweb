const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
function SwaggerConfig (app) {
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.0.1",
            info: {
                title: "Lawer-backend",
                description: "level one if Projects",
                version: "0.1.0",
            },
            servers: [
                {
                  url: "http://localhost:3030",
                },
                {
                  url: "http://localhost:5050",
                },
              ],
      
            
        },
        apis: [process.cwd() + "/src/modules/**/*.swagger.js"]
    });
    const swagger = swaggerUi.setup(swaggerDocument, {});
    app.use("/swagger", swaggerUi.serve, swagger);
}

module.exports = SwaggerConfig;