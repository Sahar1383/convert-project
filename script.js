let $ = document
const firstValue = $.querySelector('.C');
const secoundValue = $.querySelector('.F');
const converter = $.querySelector('#converter')
const result = $.querySelector('.result')
const changeBtn = $.querySelector('#change');
const convertBtn = $.querySelector('#convert')
const resetBtn = $.querySelector('#reset')

function convert(){
  if(converter.value === '') {
    result.innerHTML = 'insert correct value'
    result.style.color ='rgb(200, 0, 0)'
  }
  else{

    if(firstValue.innerHTML === '°C') {
      let resultValue = (converter.value*1.8) + 32
      result.style.color = '#fff'
      result.innerHTML = converter.value + '°C To ' + resultValue + '°F' 
    }

    else{
      let resultValue = (converter.value -32) * 5/9
      result.style.color = '#fff'
      result.innerHTML = converter.value + '°F To ' + resultValue.toFixed(2) + '°C'
    }

  }
}
function reset(){
  result.innerHTML=''
  converter.value =''
}
function swap () {
  if(firstValue.innerHTML === '°C') {
    firstValue.innerHTML = '°F'
    secoundValue.innerHTML = '°C'
    converter.setAttribute('placeholder', '°F');
    document.title = 'Converter °F to °C'

  } else {
    firstValue.innerHTML = '°C'
    secoundValue.innerHTML = '°F' 
    converter.setAttribute('placeholder', '°C');
    document.title = 'Converter °C to °F'
  }
}

convertBtn.addEventListener('click', convert)
resetBtn.addEventListener('click', reset)
changeBtn.addEventListener('click', swap)
