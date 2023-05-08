
const montain=document.querySelector('#montain');
const montain2=document.querySelector('#montain2');
const climb=document.querySelector('.climb');
const date1=document.querySelector('#date1')
const date2=document.querySelector('#date2')
const date3=document.querySelector('#date3')
const date4=document.querySelector('#date4')
const location1=document.querySelector('#location1')
const location2=document.querySelector('#location2')
const location3=document.querySelector('#location3')
const location4=document.querySelector('#location4')


var splide = new Splide( '.splide', {
        perPage: 4,
        rewind : true,
        
      } );
      
      splide.mount();

      lazyload();
montain.addEventListener('click', stylebutton1);
montain2.addEventListener('click', stylebutton2);

function stylebutton1(){
    
        montain.classList.add('climbButtonActive');
        climb.style.backgroundImage ="url('./src/montain1.png')"
        montain2.classList.remove('climbButtonActive')
        date1.innerText='25 Nov 2016'
        date2.innerText='28 Nov 2016'
        date3.innerText='18 Dec 2016'
        date4.innerText='7 Jan 2016'
        location2.innerText= 'Vestibulum vierra'
        location1.innerText= 'Vestibulum vierra'
        location3.innerText= 'Vestibulum vierra'
        location4.innerText= 'Vestibulum vierra'
        
    
}
function stylebutton2(){
     montain2.classList.add('climbButtonActive');
        climb.style.backgroundImage ="url('./src/montain2.png')"
        montain.classList.remove('climbButtonActive')
        date1.innerText='27 Nov 2016'
        date2.innerText='30 Nov 2016'
        date3.innerText='13 Dec 2016'
        date4.innerText='14 Jan 2016'
        location1.innerText= 'Everest'
        location2.innerText= 'Everest'
        location3.innerText= 'Everest'
        location4.innerText= 'Everest'
}




var splide = new Splide(".splide", {
        type: "fade",
        rewind: true,
      });
      
      
      splide.mount();
      