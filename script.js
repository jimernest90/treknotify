let health = document.querySelectorAll('.health');
let science = document.querySelector('.health.science')
let engineering = document.querySelector('.health.engineering')
let medical = document.querySelector('.health.medical')
let command = document.querySelector('.health.command')
let psychology = document.querySelector('.health.psych')
let security = document.querySelector('.health.security')



const healthObject = {
    science: [],
    engineering: [],
    medical: [],
    command: [],
    psychology: [],
    security: []
}

health.forEach(function (h) {
    
    h.addEventListener('click', function () {
        console.log('click');
        console.log(healthObject)
            if(h === science){
                healthObject.science.push('microscope')
            }
            else if(h === engineering){
                healthObject.engineering.push('dylithiam crystals')
            }
            else if(h === medical){
                healthObject.medical.push('medicine')
            }
            else if(h === command){
                healthObject.command.push('flute')
            }
            else if(h === psychology){
                healthObject.psychology.push('aspirin')
            }
            else if(h === security){
                healthObject.security.push('phaser')
        }
    });
});

