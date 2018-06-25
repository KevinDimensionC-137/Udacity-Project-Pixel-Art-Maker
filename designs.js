// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$("#sizePicker").on("submit", function(event){
event.preventDefault();
makeGrid();
})

function makeGrid() {

// Your code goes here!
var x, y;
height = $("#inputHeight").val();//Gets the value in the grid-height input box
width = $("#inputWidth").val();////Gets the value in the grid-width input box
$("tr").remove();//removes tables if any. Happens every time the submit button is pressed.
        for(var i = 0; i < height; ++i){
            $("#pixelCanvas").append("<tr class=row"+i+"></tr>");//draws the rows. tr means table row
            for(var j = 0 ; j < width ; ++j){
                $(".row"+i).append("<td></td>")//draws the cells for every row. td means table data
            }
        }
    $("td").on("click",function(){//when a cell is clicked
        var color = $("#colorPicker").val();//gets the value of the color picker and stores it in a varibale
        if($(this).attr("style"))//checks if the clicked cell has any style(background-color for our case) on it. 
        $(this).removeAttr("style");//removes style if any
        else
    $(this).css("background-color",color);//sets the background color of the clicked cell to whatever is in the color picker
})
}
