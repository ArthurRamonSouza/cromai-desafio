// A ideia é fazer os inputs do usuário aparecerem no triângulo na parte direita da tela.
// Array para armazenar os valores dos catetos.
var catetos = Array(3);

function mudarValoresTriangulo() {

    // catetos[] = [cateto-a, cateto-b, cateto-c]
    catetos[0] = document.querySelector("#cateto-a").value;

    catetos[1] = document.querySelector("#cateto-b").value;

    catetos[2] = document.querySelector("#cateto-c").value;

    // Mudando os valores dos lados do triângulo no HTML da página
    document.querySelector("#lado-menor").innerHTML = catetos[0];

    document.querySelector("#lado-medio").innerHTML = catetos[1];

    document.querySelector("#lado-maior").innerHTML = catetos[2];

    // Teorema de Pitágoras será aplicado no código abaixo

    // Se o cateto A e B forem preenchidos, o input do C é desativado para que o cáculo possa ser feito.
    if ((document.querySelector("#lado-menor").innerHTML != "") && (document.querySelector("#lado-medio").innerHTML != "")) {
        let C = Math.sqrt(Math.pow(catetos[0], 2) + Math.pow(catetos[1], 2));
        document.querySelector("#lado-maior").innerHTML = C.toFixed(2);
        document.querySelector("#cateto-c").value = C.toFixed(2);     
    }

    // Se o cateto A e C forem preenchidos, o input do B é desativado para que o cáculo possa ser feito.
    else if ((document.querySelector("#lado-menor").innerHTML != "") && (document.querySelector("#lado-maior").innerHTML != "")) {
        let B = Math.sqrt(Math.pow(catetos[2], 2) - Math.pow(catetos[0], 2));
        document.querySelector("#lado-medio").innerHTML = B.toFixed(2);
        document.querySelector("#cateto-b").value = B.toFixed(2);
    }

    // Se o cateto B e C forem preenchidos, o input do A é desativado para que o cáculo possa ser feito.
    else if ((document.querySelector("#lado-medio").innerHTML != "") && (document.querySelector("#lado-maior").innerHTML != "")) {
        let A = Math.sqrt(Math.pow(catetos[2], 2) - Math.pow(catetos[1], 2));
        document.querySelector("#lado-menor").innerHTML = A.toFixed(2);
        document.querySelector("#cateto-a").value = A.toFixed(2);
    }

    // Condicionais para impedir que os valores dos lados do triângulo fique nulo
    if (document.querySelector("#lado-menor").innerHTML == "") {
        document.querySelector("#lado-menor").innerHTML = "A";
    }

    if (document.querySelector("#lado-medio").innerHTML == "") {
        document.querySelector("#lado-medio").innerHTML = "B";
    }

    if (document.querySelector("#lado-maior").innerHTML == "") {
        document.querySelector("#lado-maior").innerHTML = "C";
    }

    document.getElementById("cateto-a").disabled = false;
    document.getElementById("cateto-b").disabled = false;
    document.getElementById("cateto-c").disabled = false;
}
function verificaCamposPreenchidos(){

    let input_a = document.getElementById("cateto-a");
    
    let input_c = document.getElementById("cateto-c");

    let input_b = document.getElementById("cateto-b");

    if ((document.getElementById("cateto-a").value != "") && (document.getElementById("cateto-b").value != "")) {
        input_c.disabled = true;
    }

    else if ((document.getElementById("cateto-a").value != "") && (document.getElementById("cateto-c").value != "")) {
        input_b.disabled = true;
    }

    else if ((document.getElementById("cateto-b").value != "") && (document.getElementById("cateto-c").value != "")) {
        input_a.disabled = true;

    }else {
    
    input_a.disabled = false;
    input_b.disabled = false;
    input_c.disabled = false;
    }
}