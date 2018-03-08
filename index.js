function dwarfRollCall(dwarves) {
  let i = 0;
  while (i < dwarves.length){
  dwarves[i] = ( `${[i + 1]}. `+dwarves[i]);
  i++;
  }
     return (`${dwarves.join(' ')} `)
  }


function summonCaptainPlanet(planeteerCalls){
  for(let i = 0; i < planeteerCalls.length; i++){
       planeteerCalls[i] = (planeteerCalls[i]+ `!`);
    }
    return planeteerCalls
  }

function longPlaneteerCalls(words) {
  if (words.length > 4){
    return true
  }else{
    return false
  }
}

function findTheCheese (foods) {
var cheese = foods.find(function(element){
  return element === `cheddar` || element === `swiss`
});
     if(cheese === `cheddar` || element === `swiss` ){
        return (`${cheese}`)
   }else{
        return (`no cheese!`)
  }
}

function wordsWithB (words){
  var newWords = []
  for (let i = 0; i < words.length; i++){
    if (words === words[i].startsWith(`b`)){
      return newWords.push (`${words}`)
    }else{
      return newWords
    }
  }
}
