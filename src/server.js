/* eslint-disable quotes */
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ["http://notesapp-v1.dicodingacademy.com"], // Mengizinkan hanya asal ini
        credentials: true, // Jika perlu mengizinkan cookie
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();