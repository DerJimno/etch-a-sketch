function changeColor() {
   let color = document.getElementById('col').value
const col = document.getElementById('col')
col.addEventListener('mouseout', e => {
    col.style.color = e.target.value
      color = e.target.value
  let root = document.documentElement;
root.style.setProperty('--clr-change', color)    
      }); 
} 
function createGrid () {
    const gridy = document.getElementById('container')
      
 const gridsSize = document.getElementById('gridsSize').addEventListener('change', e => {
        let m = e.target.value
        document.getElementById('gridsSize').disabled = true
    for (let i = 1; i <= m; i++) {
          const colorBtn = document.getElementById('colorBtn')
             colorBtn.addEventListener('click', e => {
                location.reload();
                return false;
             });
        let myRow = document.createElement('tr')
        myRow.id = 'row' + i ;
            gridy.appendChild(myRow)
            let rowW = document.getElementById('row' + i);
            let color = document.getElementById('col').value
            const col = document.getElementById('col')
            gridy.addEventListener('mouseover', e => {
               e.target.style = `background-color : ${color};`
            });   
            col.addEventListener('mouseout', e => {
              col.style.color = e.target.value
                color = e.target.value
                });  
        for (let j = 1; j <= m ; j++) {
        let myColumn = document.createElement('td')
        myColumn.id = 'column' + j
            rowW.appendChild(myColumn)

            const clearBtn = document.querySelector('.clearBtn')
            clearBtn.addEventListener('click', e => {
            myColumn.style = "background-color: white;"
            });
            const clearInp = document.querySelector('.clearInp')
            clearInp.addEventListener('click', e => {
            myColumn.style = "background-color: white;"
            });   
        };
    };    
    function randomizeColor() {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)   
        return `rgb(${randomR}, ${randomG}, ${randomB})`
    };
        const rainbowBtn = document.getElementById('rainbowBtn')
        rainbowBtn.addEventListener('click', () => {
                gridy.addEventListener('mouseover', e => {
                e.target.style = `background-color : ${randomizeColor()};`
                });
        })
  })    
};
changeColor()
createGrid()