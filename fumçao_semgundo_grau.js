function reolverFunçaoSegundograu(a,b,c){

    // passo 1: caucular o delta
    let delta = b*b-4*a*c
    // passo 2: verifar se delta e zero, negativo po podetivo
    if(delta<0){
        // se o delta for nrgstivo não tem raizes reais
        console.log("A equaçao nãtem soluções reais")
    }
    else if (delta===0){
        // se delta for igual zero, e equaçao tem duas raizea igual
        console.log("A equações tem raizes iguais.  ")
    }   
    else {
        // se o delta for positivo, a equaçao tem duas raizes diferents
        let x1 = (-b +Math.sqrt(delta))/(2*a)
        let x2 = (-b - Math.sqrt(delta))/(2*a)
        console.log("A equaçao tem duas raizes rais x1=" ,x1, "e x2= ",x2 )
    }   


}
reolverFunçaoSegundograu(1, -3, 2)
    
    

