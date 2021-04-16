let healthTwo = document.querySelector('.health.health-two')
let healthThree = document.querySelector('.health.health-three')
let monitor = document.querySelector('.message-box')
let slider = document.querySelector('.slider')
let leftBox = document.querySelector('.left-box')
let roundedBox = document.querySelector('.rounded-box')
let checkedSlider = document.querySelector('.input:checked')
let fullScreen = document.querySelector('.full-screen')

healthTwo.onclick = function(){
    monitor.style.background = `url('./img/monitor-view-one.jpeg')`
    monitor.style.backgroundSize = 'contain'
    // monitor.style.height = '5em'
};
healthThree.onclick = function(){
    monitor.style.background = `url('./img/diagram-two.jpeg')`
    monitor.style.backgroundSize = 'contain'
    monitor.style.backgroundRepeat = 'no-repeat'
    // monitor.style.height = '20em'
    
}

slider.addEventListener("click", function(){
    leftBox.classList.toggle('dark-mode-boxes'); 
    roundedBox.classList.toggle('dark-mode-boxes');
    fullScreen.classList.toggle('dark-mode-background')
  });
