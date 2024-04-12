

const values = document.querySelectorAll('button');

const result = document.getElementById('result');

values.forEach((element)=> {
    element.addEventListener('click', (event)=> {
        // console.log(typeof(event.target.textContent))
        const indival = event.target.textContent;

        if(indival === 'C'){
            result.value="";
        }

        else if(indival === '='){     

            result.value = eval(result.value);
        }

        else{

            result.value += indival;
        }

    })
})




