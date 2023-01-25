import math

# Função que será chamada para calcular o resultado segundo o teorema de Pitágoras
def pitagoras(ladoA = False, ladoB = False, ladoC = False):
    if(ladoA and ladoB):
        ladoC  = math.sqrt(math.pow(ladoA, 2) + math.pow(ladoB, 2))

    elif(ladoA and ladoC):
        ladoB = math.sqrt(math.pow(ladoC, 2) - math.pow(ladoA, 2))

    #elif(ladoB and ladoC):
    #    ladoA = math.sqrt(math.pow(ladoC, 2) - math.pow(ladoB, 2))

    else:
         ladoA = math.sqrt(math.pow(ladoC, 2) - math.pow(ladoB, 2))
         
    return {"Cateto A": ladoA,
            "Cateto B": ladoB,
            "Hipotenusa C": ladoC}