
document.addEventListener('DOMContentLoaded', function () {
  setInterval(setClock, 500)
})

function setClock () {
  var domHour = document.querySelector('#hour')
  var domMinute = document.querySelector('#minute')
  var domSecond = document.querySelector('#second')

  var now = new Date()
  var nowHour = now.getHours()
  var nowMinute = now.getMinutes()
  var nowSecond = now.getSeconds()

  var angleSecond = getSecondAngle(nowSecond)
  var angleMinute = getMinuteAngle(nowMinute + (nowSecond / 60))
  var angleHour = getHourAngle(nowHour + (nowMinute / 60) + (nowSecond / 3600))

  domHour.style.transform = 'rotate(' + angleHour + 'deg)'
  domMinute.style.transform = 'rotate(' + angleMinute + 'deg)'
  domSecond.style.transform = 'rotate(' + angleSecond + 'deg)'
}

function getHourAngle (num) {
  return (num / 12) * 360
}

function getMinuteAngle (num) {
  return (num / 60) * 360
}

function getSecondAngle (num) {
  return (num / 60) * 360
}
