
 let mode =   "Время"
 
const output = document.getElementById('output') 
const fullBtn = document.getElementById('full') 
const dateBtn = document.getElementById('date') 
const timeBtn = document.getElementById('time') 
 
  function qwe(wew){
    return function(){
        mode= wew
        update()
    }
  }

fullBtn.onclick = qwe('full')
dateBtn.onclick = qwe('date')
timeBtn.onclick = qwe('time')




setInterval(() => {
    update()
}, 1000);





function update(){
    output.textContent = format(mode)
}



function format(formatq){
    const now = new Date()
    switch(formatq){
        case 'time':
            return now.toLocaleTimeString()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return now.toLocaleTimeString() + ' ' + now.toLocaleDateString()

    }
}