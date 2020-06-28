$(document).ready(function(){
    function makeGrid(){
        const table= $("#pixelCanvas");
        table.empty();
        let gridHeight = $('#inputHeight').val();
        let gridWidth = $('#inputWidth').val();
        console.log(gridHeight, gridWidth);

        for (let x=0; x<gridHeight; x++){
            let row= document.createElement('tr');
            table.append(row);
            for (let y=0; y<gridWidth; y++){
                let data= document.createElement('td');
                row.append(data);
                $('td').click(function(){
                    let color = $("#colorPicker").val();
                    $(this).css("background-color", color)
                })
            }

        }
    }
    
 //calling makeGrid() when submit is clicked
    $('#submit').click(function(){         
        makeGrid()
    })
    
//every cell turns the selected color

    $('#autofill').click(function(){
        let color = $("#colorPicker").val();
        $('td').css("background-color", color)
    })

//turns the table white

    $('#clearGrid').click(function(){
        $('td').css("background-color" , "");
    })

//deletes tbl content

    $('#dltGrid').click(function(){
        $("#pixelCanvas").empty();
    })
})







