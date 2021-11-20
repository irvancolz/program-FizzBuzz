const pesanError = "data yang dimasukkan salah";



//cara nomor 1
function jumlahFizz1(){

    const getData = Number(prompt("input nilai fizz"));

    function validasi(){

            //validasi 
            if( isNaN(getData)){
                alert(pesanError);
            }
            else if(getData == "" || getData == 0){
                alert(pesanError);
            }
    }
   validasi();
    
    for(i = 1; i <= getData; i++ ){
               
        if(i % 3 === 0 && i % 5 === 0){
            document.write("Fizzbuzz!!");
           
        }
        else if(i % 3 === 0){
            document.write("Fizz!! ");
           
            }
        else if(i % 5 === 0){
            document.write("Buzz!! ");
            
            }
        else {
            document.write(`${i} `);
        }
    }
}


// cara nomor 2
function jumlahFizz2(){
    const fizz = "Fizz!! ";
    const fizzBuzz = "Fizzbuzz!! ";
    const buzz = "Buzz!! ";
    const fizzBuzzBracket = [];
    function clearAlert(){
        fizzBuzzBracket.length = 0;
    }
    

    const getData = Number(prompt("input nilai fizz"));
    function validasi(){

        //validasi 
        if( isNaN(getData)){
            alert(pesanError);
        }
        else if(getData == "" || getData == 0){
            alert(pesanError);
        }
    }
    validasi();

        
        for(i = 1; i <= getData; i++ ){
               
            if(i % 3 === 0 && i % 5 === 0){
                fizzBuzzBracket.push(fizzBuzz);
            }
            else if(i % 3 === 0){
                fizzBuzzBracket.push(fizz);
                }
            else if(i % 5 === 0){
                fizzBuzzBracket.push(buzz);
                }
            else {
                fizzBuzzBracket.push(`${i} `);
            }
    
        }
    
    if(fizzBuzzBracket.length !== 0){
        alert(`${fizzBuzzBracket}`);
    }
    

    clearAlert();
}


const mulai = document.querySelector(".button:first-child");
mulai.addEventListener('click', ()=>{
    const peraturan = document.querySelector('.button:nth-child(3)');
    const cara = document.querySelectorAll('.cara');

    peraturan.style.top = 0;

    for(let  i = 0; i < cara.length; i++){
       
        cara[i].style.visibility = 'visible';
        cara[i].style.height = 'auto';
        cara[i].style.opacity = '1';
      
    }
   
});

   

const peraturan = document.querySelector(".button:nth-child(3)");
peraturan.addEventListener('click', ()=>{
    const rulesContainer = document.querySelector('.rules');
    rulesContainer.style.opacity = "1";
    rulesContainer.style.top = "50px";
});

const sayaPaham = document.querySelector(".rules .button");
sayaPaham.addEventListener('click', ()=>{
    const rulesContainer = document.querySelector('.rules');
    rulesContainer.style.opacity = "0";
    rulesContainer.style.top = "-400px";
});



const cara1 = document.querySelector('.cara:first-child');
cara1.addEventListener('click', ()=>{
    jumlahFizz1();
})

const cara2 =document.querySelector('.cara:last-child');
cara2.addEventListener('click', ()=>{
    jumlahFizz2();
})