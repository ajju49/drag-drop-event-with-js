const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)
//first dragstart is just name and 2nd dragStart is function

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}


function dragStart() {
    this.className += ' hold'
    // this.append(hold)
    setTimeout(() => this.className = 'invisible',)
    // += used to append (eg. to append hold)
    // we added this.classname = invisible to clear the box after we grab that image
    //to hold img for perticular time we added set time out
}

function dragEnd() {
    this.className = 'fill'
    
    //when we going to add img to next box ,that box should have class fill 
    //then only next box will accept img 
    //otherwise it will go to previous box only
}

function dragOver(e) {
    e.preventDefault()
    
    //both drag over and drag enter events having default function
    //that is reset the current drag operation to none
}

function dragEnter(e) {
    e.preventDefault()
    
      //both drag over and drag enter events having default function
    //that is reset the current drag operation to none
}


function dragLeave() {
    e.preventDefault()
    console.log('dragLeave') 
}

function dragDrop() {
    this.className = 'empty'
    //before we add img to any box ,that box should be empty
    //so to make that box empty we add classname to empty
    this.append(fill)
    //ths class should be ready to accept img 
    //it will accept img only when it is having class fill
    //so we add append fill 
}
