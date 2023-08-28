const fullRate=document.querySelectorAll('.rating .non')
const button=document.querySelector('.button')
const content=document.querySelector('.box')

fullRate.forEach((item,idx)=>
{
    item.addEventListener('click',function(){
        fullRate.forEach(i=>{
            i.classList.replace('rated','rate')
        })
        for(let i=0;i<fullRate.length;i++){
            if(i<= idx){
                fullRate[i].classList.replace('rate','rated')
            
                button.addEventListener('click', (e) => {
                    content.innerHTML = `
                        <Link rel="stylesheet" href="submitted.css">
                        <img src="illustration-thank-you.svg" class>
                        
                        <div class="submit_rating">
                        <span class="text_submit">
                        You selected ${i+1} out of 5
                        </span>
                        </div>
                        <h2>
                        Thank You!
                        </h2>
                        <p>
                        We appreciate you taking the time to give a rating.<br>
                        if you ever need more support,don't hesitate to get<br>
                        in touch.
                        </p>
                    `

                })
            }
            
            
        }
    })
})

