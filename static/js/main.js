
let counter = 1; // initial text box counter
let limit = 10; // limit
function addInput(divName) {
    if (counter == limit) {
        alert('You have reached the limit: ' + counter + ' inputs.');
    } else {
        var newdiv = document.createElement('div');
        newdiv.className = "input-field col s12";
        newdiv.innerHTML = '<i class="material-icons prefix">create</i>' +
            '<label' + ' for="' + (counter + 1) + '"' + '>Door ' + (counter + 1) + '</label>' + 
            '<input' + ' id="' + (counter + 1) + '"' + ' type="number" ' + ' name="' + 'door' + (counter + 1) + '"' + ' value="">';
        document.getElementById(divName).appendChild(newdiv);
        counter ++;
    }
};


$(document).ready(function(){ 
    $('#updateAll').click(function(){
        let length = $('#length').val();
        let width = $('#width').val();
        let wallThickness = $('#wallThickness').val();
        let cL = (2*length) + (2*width) - (4*2*0.5*wallThickness);
        $('#centreLine').text(cL);

        let wallH = $('#wallH').val();
        d = cL*wallH*1e-6;
        let area = Math.round(d*100)/100;
        $('#wallConstr').text(area);
    });
    

    $('#done').click(function(){
        let names = $('#myForm').serializeArray();
        let arrays = [];
        for (let i = 0; i < names.length; i++){
            let arr = Number(names[i].value);
            arrays.push(arr);
        };

        sum = 0;
        for (let i = 0; i < arrays.length; i++) {
            sum += arrays[i];
        };

        $('#addResult').text(sum).css('color', 'red');
    });

    
    $('#remove').click(function(){
        if (counter==1) {
            alert('Cannot remove first input field!')
        } else {
            let list = document.getElementById('dynamicInput');
            list.removeChild(list.lastElementChild);
            counter--;
        }
    });

});






