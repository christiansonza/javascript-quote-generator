
    const btn= document.getElementById("btn");
    const quote= document.getElementById("quote");
    const person= document.getElementById("person");
   
   const quotes=[{
     quote:"“Either you run the day or the day runs you.”",
     person:"Jim Rohn"
   },
   {
     quote:"“Setting goals is the first step in turning the invisible into the visible.”",
     person:"Tony Robbins"
   },
   {
     quote:"“He who conquers himself is the mightiest warrior.”",
     person:"Confucius"
   },
   {
     quote:"“You've got to get up every morning with determination if you're going to go to bed with satisfaction.”",
     person:"Tony Robbins"
   },
   {
     quote:"“Just one small positive thought in the morning can change your whole day.”",
     person:"Dalai Lama"
   },
   {
     quote:"“Opportunities don't happen, you create them.”",
     person:"Chris Grosser"
   },
   {
     quote:"“It is never too late to be what you might have been.”",
     person:"George Eliot"
   },
   ]
   
   btn.addEventListener("click",function(){
   
   let random=Math.floor(Math.random()*quotes.length);
   
   quote.innerText=quotes[random].quote;
   person.innerText=quotes[random].person;
   
   })
