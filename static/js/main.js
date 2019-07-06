
let dCounter = 1;
let dLimit = 5;
function addDoorInput(divName) {
    if (dCounter == dLimit) {
        alert('You have reached the limit: ' + dCounter + ' inputs.');
    } else {
        let newdiv = document.createElement('div');
        newdiv.className = 'one';
        newdiv.innerHTML = '<p>Door ' + (dCounter + 1) + '</p>' +
            '<div class="input-field col s12">' +
            '<label for="length' + (dCounter + 1) + '">Length</label> ' +
            '<input type="number" name="length' + (dCounter + 1) + '" id="length' + (dCounter + 1) + '">' + '<br>' +
            '</div>' +
            '<div class="input-field col s12">' +
            '<label for="height' + (dCounter + 1) + '">Height</label> ' +
            '<input type="number" name="height' + (dCounter + 1) + '" id="height' + (dCounter + 1) + '">' +
            '</div>';
        document.getElementById(divName).appendChild(newdiv);
        dCounter ++;
    }
};


$(document).ready(function(){ 
    $('#updateAll').click(function(){
        let length = $('#length').val();
        let width = $('#width').val();
        let wallThickness = $('#wallThickness').val();
        let cL = (2*length) + (2*width) - (4*2*0.5*wallThickness);
        $('#centreLine').text(`Centre Line: ${cL}`);

        let wallH = $('#wallH').val();
        grossArea = cL*wallH;

        let data = $('#doorForm').serializeArray();
        let arrays = [];
        for(let i=0; i<data.length; i++){
            if(i%2===1) continue; 
            let arr = Number(data[i].value); 
            arrays.push(arr);
        };
        let arrays2 = []
        for(let i=0; i<data.length; i++){
            if(i%2===0) continue; 
            let arr = Number(data[i].value); 
            arrays2.push(arr);
        };
        let sum = 0;
        for (let i=0; i<arrays.length; i++){ 
            sum += (arrays[i]*arrays2[i]);
        };
        let totalDoorArea = sum
        let wallConstrArea = Math.round(((grossArea - totalDoorArea)*1e-6)*100)/100;

        $('#wallConstr').text(`Area: ${wallConstrArea}`);
    });
    

    $('#dRemove').click(function(){
        if (dCounter==1) {
            alert('Cannot remove first input field!')
        } else {
            let list = document.getElementById('dynamicInput_1');
            list.removeChild(list.lastElementChild);
            dCounter--;
        }
    });

});






