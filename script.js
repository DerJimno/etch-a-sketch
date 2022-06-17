
function createGrid() {
    const gridy = document.getElementById('container')

    for (let i = 1; i < 64; i++) {
        let myRow = document.createElement('tr')
        myRow.id = 'row' + i ;
            gridy.appendChild(myRow)
            let rowW = document.getElementById('row' + i);
                myRow.addEventListener('mouseover', event => {
                event.target.style= "background-color : blue ;"
            })
            
        
        for (let j = 1; j < 64; j++) {
        let myColumn = document.createElement('td')
        myColumn.id = 'column' + j
            rowW.appendChild(myColumn)

            const buttons = document.querySelectorAll('button')
            buttons.forEach((button) => {
            button.addEventListener('click', e => {
            myColumn.style = "background-color: aliceblue;"
            })
            })
        }
        
    };
       
};
createGrid()