let healthTwo = document.querySelector('.health.health-two')
let healthThree = document.querySelector('.health.health-three')
let healthFour = document.querySelector('.health.health-four')
let monitor = document.querySelector('.message-box')
let slider = document.querySelector('.slider')
let checkedSlider = document.querySelector('.input:checked')
let fullScreen = document.querySelector('.full-screen')
let healthOne = document.querySelector('.health-one')
let features = document.querySelector('.features')
let health = document.querySelector('.health')

healthTwo.onclick = function(){
    monitor.style.background = `url('./img/monitor-view-one.jpeg')`
    monitor.style.backgroundSize = 'contain'
};
healthThree.onclick = function(){
    monitor.style.background = `url('./img/diagram-two.jpeg')`
    monitor.style.backgroundSize = 'contain'
    monitor.style.backgroundRepeat = 'no-repeat'
    
}
healthOne.addEventListener("click", function(){
    healthOne.classList.toggle('green')
})

slider.addEventListener("click", function(){
    fullScreen.classList.toggle('dark-mode-background')
    features.classList.toggle('dark-mode-features')
    healthOne.classList.toggle('dark-health-one')
    healthTwo.classList.toggle('dark-health')
    healthThree.classList.toggle('dark-health')
    healthFour.classList.toggle('dark-health')
  });
