
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
            '<label for="width' + (dCounter + 1) + '">Width</label> ' +
            '<input type="number" name="width' + (dCounter + 1) + '" id="width' + (dCounter + 1) + '">' + '<br>' +
            '</div>' +
            '<div class="input-field col s12">' +
            '<label for="height' + (dCounter + 1) + '">Height</label> ' +
            '<input type="number" name="height' + (dCounter + 1) + '" id="height' + (dCounter + 1) + '">' +
            '</div>';
        document.getElementById(divName).appendChild(newdiv);
        dCounter ++;
    }
};

let wCounter = 1;
let wLimit = 5;
function addWinInput(divName) {
    if (wCounter == wLimit) {
        alert('You have reached the limit: ' + wCounter + ' inputs.');
    } else {
        let newdiv = document.createElement('div');
        newdiv.className = 'one';
        newdiv.innerHTML = '<p>Window ' + (wCounter + 1) + '</p>' +
            '<div class="input-field col s12">' +
            '<label for="width' + (wCounter + 1) + '">Width</label> ' +
            '<input type="number" name="width' + (wCounter + 1) + '" id="width' + (wCounter + 1) + '">' + '<br>' +
            '</div>' +
            '<div class="input-field col s12">' +
            '<label for="height' + (wCounter + 1) + '">Height</label> ' +
            '<input type="number" name="height' + (wCounter + 1) + '" id="height' + (wCounter + 1) + '">' +
            '</div>';
        document.getElementById(divName).appendChild(newdiv);
        wCounter ++;
    }
};

$(document).ready(function(){ 
    const currentYear = new Date().getFullYear();
    $('#copyright').text(`\u00a9 ${currentYear} AdongoJr | Terms and Conditions apply`).css('text-align', 'center');

    $('#update').click(function(){
        let length = $('#length').val();
        let width = $('#width').val();
        let wallThickness = $('#wallThickness').val();
        let cL = (2*length) + (2*width) - (4*2*0.5*wallThickness);
        $('#side-bar-centre-line').text(`Centre Line: ${cL} mm`);

        let wallH = $('#wallH').val();
        grossArea = cL*wallH;

        let doorData = $('#doorForm').serializeArray();
        let dWidths = [];
        for(let i=0; i<doorData.length; i++){
            if(i%2===1) continue; 
            let arr = Number(doorData[i].value); 
            dWidths.push(arr);
        };
        let dHeights = []
        for(let i=0; i<doorData.length; i++){
            if(i%2===0) continue; 
            let arr = Number(doorData[i].value); 
            dHeights.push(arr);
        };
        let totalDoorArea = 0;
        for (let i=0; i<dWidths.length; i++){ 
            totalDoorArea += (dWidths[i]*dHeights[i]);
        };

        let winData = $('#winForm').serializeArray();
        let wWidths = [];
        for(let i=0; i<winData.length; i++){
            if(i%2===1) continue; 
            let arr = Number(winData[i].value); 
            wWidths.push(arr);
        };
        let wHeights = []
        for(let i=0; i<winData.length; i++){
            if(i%2===0) continue; 
            let arr = Number(winData[i].value); 
            wHeights.push(arr);
        };
        let totalWinArea = 0;
        for (let i=0; i<wWidths.length; i++){ 
            totalWinArea += (wWidths[i]*wHeights[i]);
        };
        
        let wallConstrArea = Math.round(((grossArea - totalDoorArea - totalWinArea)*1e-6)*100)/100;
        $('#side-bar-wall-constr').text(` Ext. Wall Construction: ${wallConstrArea} sq.m`);

        let extPrmt = 2*length + 2*width;
        let grossExtWallFin = extPrmt * wallH;
        let extWallFin = Math.round(((grossExtWallFin - totalDoorArea - totalWinArea)*1e-6)*100)/100;
        $('#side-bar-eWall-fin').text(` Ext. Wall Finishes: ${extWallFin} sq.m`);

        let intPrmt = extPrmt - 2*(4*2*0.5*wallThickness)
        let grossIntWallFin = intPrmt * wallH;
        let intWallFin = Math.round(((grossIntWallFin - totalDoorArea - totalWinArea)*1e-6)*100)/100;
        $('#side-bar-iWall-fin').text(` Int. Wall Finishes: ${intWallFin} sq.m`);

        let g_floorFin = (length - (2*wallThickness)) * (width - (2*wallThickness));
        let floorFin = Math.round(((g_floorFin)*1e-6)*100)/100;
        $('#side-bar-floor-fin').text(` Floor Finishes: ${floorFin} sq.m`);


        $('#animation').animate({fontSize: '24px'})
        

            
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

    $('#wRemove').click(function(){
        if (wCounter==1) {
            alert('Cannot remove first input field!')
        } else {
            let list = document.getElementById('dynamicInput_2');
            list.removeChild(list.lastElementChild);
            wCounter--;
        }
    });

    $('.sidenav').sidenav();

});







