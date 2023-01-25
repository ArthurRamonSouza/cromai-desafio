from api import app
import os

# Configurar a porta para a 5000 caso não esteja definida
if __name__ == "main":
    port = int(os.getenv("PORT"), 5000)
# Comando para rodar o app
app.run(host="0.0.0.0", port = port)