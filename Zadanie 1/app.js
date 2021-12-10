const btn = document.getElementById('button');
const table = document.getElementById('table');
const array = []


btn.addEventListener('click',function (){

    for(let i=0; i<20; i++){
        array.push((Math.floor(Math.random()*(100+1))));
        const newTr = document.createElement('tr');
        if(array[i]%2 ===0){
            newTr.className = 'column-even';
            newTr.innerText = array[i];
            table.appendChild(newTr);
        }
        else{
            newTr.className = 'column-odd';
            newTr.innerText = array[i];
            table.appendChild(newTr);
        }

    }
})
