const setBackground = () => {
    let p1 = document.querySelector('.firstP');
    let p2 = document.querySelector('.lastP');
    
    p1.classList.toggle('bg-red');

    p2.classList.toggle('bg-yellow');


    /* p1.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'yellow'; */
};

let btnSetBG = document.getElementById('setBG');

btnSetBG.addEventListener('click', setBackground);

