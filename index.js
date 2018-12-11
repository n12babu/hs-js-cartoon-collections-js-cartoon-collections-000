var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
let num= []
const dwarfRollCall=(dwarves)=>{
  for(let i=0; i<dwarves.length; i++){
    num.push(i+1+'. '+dwarves[i])
  }
  return num.join(' ')+ ' '
}


const summonCaptainPlanet = (planeteerCalls)=>{
  return planeteerCalls.map(a=>a.toUpperCase()+"!")
};




const longPlaneteerCalls=(words)=>{
  for (let i=0; i<words.length; i++){
    if (words[i].length>4){
      return true
    }
  }
  return false
}



const findTheCheese = (foods)=>{
  for (let i=0; i<foods.length; i++){
    if (foods[i] =='cheddar' || foods[i]=='cheddar'|| foods[i]=='gouda'){
      return foods[i]
    }
  }
  return 'no cheese!'
}
