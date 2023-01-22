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
    
    document.querySelector("#lado-menor").innerHTML = catetos_ordenados[0];

    document.querySelector("#lado-medio").innerHTML = catetos_ordenados[1];
    
    document.querySelector("#lado-maior").innerHTML =  catetos_ordenados[2];
}

//Testando o script que armazena os inputs.