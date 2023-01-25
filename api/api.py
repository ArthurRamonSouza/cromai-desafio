from flask import Flask, request, render_template
import main
import os

# Configurar a porta para a 5000 caso não esteja definida
if __name__ == "main":
    port = int(os.getenv("PORT"), 5000)

# Criando a API com Flask 
app = Flask("Desafio Cromai API")

# Por padrão o Flask ordena o json de resposta
#app.config["JSON_SORT_KEYS"] = False

# Página inicial será  o guia/documentação da API
@app.route("/", methods=["GET"])
def homePage():
    return render_template("guide.html")
    # return {"key": "value"}

# Mapeamento da API
@app.route("/teorema", methods=["GET"])
def recebeCatetos():

    # Pegar os parametros da requisição, verificar se é nulo ou não e depois armazená-los
    if(request.args.get("ladoa") != None):
        try:
            ladoA = float(request.args.get("ladoa"))
        except:
            mensagem = "Valor do parâmetro 'ladoa' inválido."
            ladoA = False
    else:
        ladoA = False
    
    if(request.args.get("ladob") != None):
        try:
            ladoB = float(request.args.get("ladob"))
        except:
            mensagem = "Valor do parâmetro 'ladob' inválido."
            ladoB = False
    else:
        ladoB = False
    
    if(request.args.get("ladoc") != None):
        try:
            ladoC = float(request.args.get("ladoc"))
        except:
            mensagem = "Valor do parâmetro 'ladoc' inválido."
            ladoC = False
    else:
        ladoC = False
    
    # Caso não haja erros na requisição, o cáculo do teorema será aplicado
    if((ladoA and ladoB) or (ladoA and ladoC) or (ladoB and ladoC)):
        status = 200
        mensagem = "Requisicao valida."
        resultado = main.pitagoras(ladoA, ladoB, ladoC)
        return response(status, mensagem, resultado)

    # Caso dois ou mais dos lados sejam nulos, retorna um erro
    status = 400
    if(mensagem is None):
        mensagem = "Requisicao invalida!"

    return response(status, mensagem)

# Função para uma response personalizada e organizada
def response(status, mensagem, resultado = False):
    response = {}
    response["Status"] = status
    response["Mensagem"] = mensagem

    # Se não tive erros na requisição, haverá um resultado
    if(resultado):
        response["Resultado"] = resultado

    return response

# Comando para rodar o app
app.run(host="0.0.0.0", port = port)