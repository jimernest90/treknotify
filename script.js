let healthTwo = document.querySelector('.health.health-two')
let healthThree = document.querySelector('.health.health-three')
let monitor = document.querySelector('.message-box')

healthTwo.onclick = function(){
    monitor.style.background = `url('./img/monitor-view-one.jpeg')`
    monitor.style.height = '5em'
};
healthThree.onclick = function(){
    monitor.style.background = `url('./img/diagram-two.jpeg')`
    monitor.style.backgroundSize = 'cover'
    monitor.style.backgroundRepeat = 'no-repeat'
    monitor.style.height = '20em'
    
}

