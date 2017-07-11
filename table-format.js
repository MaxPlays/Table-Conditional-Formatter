format();	

function format(){
	var table = document.getElementById("myTable");
	
	for(var i = 0; i < table.rows.length; i++){
		for(var v = 0; v < table.rows[i].cells.length; v++){
			var cell = table.rows[i].cells[v];
			if(!isNaN(cell.innerHTML)){
				if(cell.innerHTML < 0){
					cell.style.color = "red";
				}
			}
		}
	}
}