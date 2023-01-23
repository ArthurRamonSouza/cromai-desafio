from flask import Flask, request
import main

# Criando o site da API e a API com Flask 
app = Flask("Desafio Cromai API")

@app.route("/", methods=["GET"])
def homePage():
    return {"Pagina": "inicial"}
    # return {"key": "value"}

@app.route("/api", methods=["GET"])
def recebeCatetos():
    # Pegar os parametros da requisição e armazená-los
    ladoA = False
    ladoB = False
    ladoC = False

    # Caso não haja erros na requisição, o cáculo do teorema será aplicado
    if((ladoA and ladoB) or (ladoA and ladoC) or (ladoB and ladoC)):
        status = 200
        mensagem = "Requisicao valida."
        resultado = main.pitagoras(ladoA, ladoB, ladoC)
        return response(status, mensagem, resultado)

    # Caso dois ou mais dos lados sejam nulos, retorna um erro
    status = 405
    mensagem = "Requisicao invalida!"

    return response(status, mensagem)


def response(status, mensagem, resultado = False):
    response = {}
    response["Status"] = status
    response["Mensagem"] = mensagem

    # Se não tive erros na requisição, haverá um resultado
    if(resultado):
        response["Resultado"] = resultado

    return response

app.run()