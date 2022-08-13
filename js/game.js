const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
let timer = document.querySelector('.timer')
const hea = document.querySelector('.he')
const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
     'summer',
    //'meeseeks',
    //'scroopy',
]
let primeiracarta =''
let segundacarta = ''

const checkEndGame = () =>{
    const disabledcard = document.querySelectorAll('.disabled-card')
if (disabledcard.length == 16){
    clearInterval(this.loop)
    alert(`Parabens!! ${spanPlayer.innerHTML} Você venceu! Seu tempo ${timer.innerHTML}`)
}

}

const checarcarta = () =>{
    const primeiroCharacter = primeiracarta.getAttribute('data-character')
    const segundoCharacter = segundacarta.getAttribute('data-character')

    if( primeiroCharacter == segundoCharacter){
        primeiracarta.firstChild.classList.add('disabled-card')
        segundacarta.firstChild.classList.add('disabled-card')

        primeiracarta = ''
        segundacarta = ''

        checkEndGame()
    }else {
    setTimeout(() => {
        primeiracarta.classList.remove('revelar-card')
        segundacarta.classList.remove('revelar-card')

        primeiracarta = ''
        segundacarta = ''
    },500 )
    }
}


const revelarCard = ({target}) =>{
    if(target.parentNode.className.includes('revelar-card')){
        return
    }
    if (primeiracarta == '') {
        target.parentNode.classList.add('revelar-card')
        primeiracarta = target.parentNode
    } else if(segundacarta == ''){
        target.parentNode.classList.add('revelar-card')
        segundacarta = target.parentNode
        
        checarcarta()
    }
}



const createElement = (tag , className) =>{
    const element = document.createElement (tag)
    element.className = className
    return element
}

const createcard = (character) =>{
   const card = createElement('div', 'card')
   const front = createElement('div' , 'face front')  
   const back = createElement('div' , 'face back')  
   
   front.style.backgroundImage = `url('../imagens/${character}.png')`
    
   card.appendChild(front)
   card.appendChild(back)

   card.addEventListener('click' , revelarCard)

   card.setAttribute('data-character', character)
  return card
}

const loadGame = () =>{
    const duplicarcaracter = [...characters , ...characters]
    const arrayembaralhado = duplicarcaracter.sort(() => Math.random()-0.5 )

    arrayembaralhado.forEach((character) =>{
        const card = createcard(character)
        grid.appendChild(card)
    }
        )
}

const grid1 = document.querySelector('.grid1')
const criarDiv = () => {
const gridTerror = document.createElement('div')
gridTerror.className = 'test back1'
grid1.appendChild(gridTerror)

} 
const botao = document.querySelector('.voltar')
const audio = document.querySelector('.audio')
const startTimer = () =>{
    let time = '20'
    this.loop = setInterval(() =>{
    timer.innerHTML = time
    time--
    if (time == 1){
    clearInterval(this.loop)
    grid.style.display = 'none'
    hea.style.display = 'none'
    audio.autoplay = true
    audio.load()
    botao.style.display = 'flex'
    criarDiv()
    } } , 1000)
   }

    

window.onload = () =>{
spanPlayer.innerHTML = localStorage.getItem('player')    
startTimer()
loadGame() 
 
}
function clicar(){
    location.reload()
}





