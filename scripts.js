// A ideia é fazer os inputs do usuário aparecerem no triângulo na parte direita da tela.
var catetos = Array(3);

function mudarValoresTriangulo(){

    // Array para armazenar os valores dos catetos.
    // catetos[] = [cateto-a, cateto-b, cateto-c]
    catetos[0] = document.querySelector("#cateto-a").value;
    
    catetos[1] = document.querySelector("#cateto-b").value;
    
    catetos[2] = document.querySelector("#cateto-c").value;

    // Ordenando o array do menor para o maior valor
    let catetos_ordenados = catetos.sort((a, b) => a - b);

    // Mudando os valores dos lados do triângulo no HTML da página
    document.querySelector("#lado-menor").innerHTML = catetos_ordenados[0];

    document.querySelector("#lado-medio").innerHTML = catetos_ordenados[1];
    
    document.querySelector("#lado-maior").innerHTML =  catetos_ordenados[2];

    // Condicionais para impedir que os valores dos lados do triângulo fique nulo
    if(document.querySelector("#lado-menor").innerHTML == ""){
        document.querySelector("#lado-menor").innerHTML = 3;
        
    }
    if(document.querySelector("#lado-medio").innerHTML == ""){
        document.querySelector("#lado-medio").innerHTML = 4;
    }
    if(document.querySelector("#lado-maior").innerHTML == ""){
        document.querySelector("#lado-maior").innerHTML = 5;
    }
}