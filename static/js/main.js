
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

function removeDoorInput(divName) {
    if (dCounter==1) {
        alert('Cannot remove first input field!')
    } else {
        let list = document.getElementById('dynamicInput_1');
        list.removeChild(list.lastElementChild);
        dCounter--;
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

function removeWinInput(divName) {
    if (wCounter==1) {
        alert('Cannot remove first input field!')
    } else {
        let list = document.getElementById('dynamicInput_2');
        list.removeChild(list.lastElementChild);
        wCounter--;
    }
};

function vRound2dp(volume) {
    return Math.round((volume*1e-9)*100)/100;
}

function aRound2dp(area) {
    return Math.round((area*1e-6)*100)/100;
}

// jQuery code starts here
$(document).ready(function(){ 
    $('#table').hide();

    $('#update, #m_update').click(function(){
        let length = $('#length').val();
        let width = $('#width').val();
        let wallThickness = $('#wallThickness').val();

        // Center Line
        let cL = (2*length) + (2*width) - (4*2*0.5*wallThickness);
        $('#side-bar-centre-line, #m_side-bar-centre-line').text(`${cL} mm`);

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
        
        // External Wall Construction
        let wallConstrArea = aRound2dp(grossArea - totalDoorArea - totalWinArea)
        $('#side-bar-wall-constr, #m_side-bar-wall-constr').text(`${wallConstrArea} sq.m`);

        // External Wall Finishes
        let extPrmt = 2*length + 2*width;
        let grossExtWallFin = extPrmt * wallH;
        let extWallFin = aRound2dp(grossExtWallFin - totalDoorArea - totalWinArea)
        $('#side-bar-eWall-fin, #m_side-bar-eWall-fin').text(`${extWallFin} sq.m`);

        // INternal Wall Finishes
        let intPrmt = extPrmt - 2*(4*2*0.5*wallThickness)
        let grossIntWallFin = intPrmt * wallH;
        let intWallFin = aRound2dp(grossIntWallFin - totalDoorArea - totalWinArea)
        $('#side-bar-iWall-fin, #m_side-bar-iWall-fin').text(`${intWallFin} sq.m`);

        let grossfloorFin = (length - (2*wallThickness)) * (width - (2*wallThickness));
        let floorFin = aRound2dp(grossfloorFin)
        $('#side-bar-floor-fin, #m_side-bar-floor-fin').text(`${floorFin} sq.m`);

        // Excavation
        function excavation() {
            $('#One, #m_One, #Two, #m_Two, #Three, #m_Three, #Four, #m_Four').hide();

            let fdnWidth = $('#fdnWidth').val();
            let excDepth = $('#excDepth').val();

            if (excDepth > 4500 && excDepth <= 6000) {
                let vol = vRound2dp(cL * fdnWidth * 1500)
                let vol_1 = vol
                let vol_2 = vol
                let vol_3 = vRound2dp(cL * fdnWidth * (excDepth - 4500));
                $('#one, #m_one').text(`${vol} cu.m`);
                $('#two, #m_two').text(`${vol_1} cu.m`);
                $('#three, #m_three').text(`${vol_2} cu.m`);
                $('#four, #m_four').text(`${vol_3} cu.m`);
                $('#One, #m_One, #Two, #m_Two, #Three, #m_Three, #Four, #m_Four').show();
            } else if (excDepth > 3000 && excDepth <= 4500) {
                let vol = vRound2dp(cL * fdnWidth * 1500)
                let vol_1 = vol
                let vol_2 = vRound2dp(cL * fdnWidth * (excDepth - 3000))
                $('#one, #m_one').text(`${vol} cu.m`);
                $('#two, #m_two').text(`${vol_1} cu.m`);
                $('#three, #m_three').text(`${vol_2} cu.m`);
                $('#One, #m_One, #Two, #m_Two, #Three, #m_Three').show();
            } else if (excDepth > 1500 && excDepth <= 3000) {
                let vol = vRound2dp(cL * fdnWidth * 1500);
                let vol_1 = vRound2dp(cL * fdnWidth * (excDepth - 1500))
                $('#one, #m_one').text(`${vol} cu.m`);
                $('#two, #m_two').text(`${vol_1} cu.m`);
                $('#One, #m_One, #Two, #m_Two').show();
            } else if (excDepth <= 1500) {
                let vol = vRound2dp(cL * fdnWidth * excDepth);
                $('#one, #m_one').text(`${vol} cu.m`);
                $('#One, #m_One').show();
            } 
        }
        excavation();

        // Site Clearance
        let fdnSpread = $('#fdnSpread').val();
        let siteClearance = aRound2dp((+length + (2*fdnSpread)) * (+width + (2*fdnSpread)))
        $('#side-bar-site-clearance, #m_side-bar-site-clearance').text(`${siteClearance} sq.m`);


        $('#table').show();
        $('#animation, #m_animation').animate({fontSize: '24px'})
        

            
    });

    $('.sidenav').sidenav();

    $('.modal').modal({
        opacity: 0.4,
        inDuration: 250,
    });

});




