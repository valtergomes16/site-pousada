function clickMenu(){
    if(hamburguer.style.display == 'block'){
        hamburguer.style.display = 'none'
        main.style.display = 'block'
        hello.style.display = 'block'
    }
    else{
        hamburguer.style.display = 'block'
        main.style.display = 'none'
        hello.style.display = 'none'
    }
}