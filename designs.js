// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table = document.querySelector('#pixelCanvas');


function makeGrid() {
    // e.preventDefault();
   table.innerHTML="";
   let gridHeight = document.querySelector('#inputHeight').value;
   let gridWidth = document.querySelector('#inputWidth').value;
   console.log("Hello World!", gridHeight, gridWidth);
   

   for (let x=0; x<gridHeight; x++){
    let row = document.createElement('tr'); //creating rows
    table.appendChild(row);
      for (let y=0; y<gridWidth; y++){
        let data = document.createElement('td'); //creating cells
        row.appendChild(data);
        data.addEventListener('click', function(){  
            let color= document.querySelector('#colorPicker').value;
            data.style.backgroundColor= color;  //changes the color of data cell on click
        
        }  ) 
        
    }
       
   }
    

}
const button = document.querySelector('#submit');
button.addEventListener('click', function(){
    makeGrid()}  ) //calling makeGrid() when submit is clicked
