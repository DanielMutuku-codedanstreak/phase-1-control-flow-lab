let distance;

function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400 && distance >= 0){
    return('This one is on me!')
  }else if (distance > 2000 && distance < 2500){
    return('I will gladly take your thirty bucks.')
  }else{
    return('No can do.')
  }
}
let city;
function ternaryCheckCity(city){
  // Write your code here!
  const response = city === 'NYC' ? 'Ok, sounds good.' : 'No go.' 
  return response
}
let tip;
function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
      break;
  }
}