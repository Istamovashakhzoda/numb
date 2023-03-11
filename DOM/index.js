"use script"
const getRandomNumber = (min,max) =>{
  return Math.random(Math.floor( max-min +1))+min
}


const btn = () =>{

  const minn = document.getElementById("min");
  const maxx = document.getElementById("max");

  const min = Number(minn.value);
  const max = Number(maxx.value);

  if( minn.value === ``  || maxx.value === `` ){
    alert("Please enter min and max numbers")
    return;
  }

  if(min > max){
    alert("Min Number Should Small From The Max")
    return;
  }

  const placeholderr = document. querySelector("#placeholder");
  placeholderr. textContent = getRandomNumber( min , max );
  console.log(placeholderr);
}

const btnel =document.getElementById("btn");
btnel.addEventListener("click", btn)