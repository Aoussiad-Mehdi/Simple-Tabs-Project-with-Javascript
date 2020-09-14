const allBtn = document.querySelector('.buttons #all');
const carBtn = document.querySelector('.buttons #cars');
const natureBtn = document.querySelector('.buttons #nature');
const allImages = document.querySelectorAll('.content img');
const modal = document.querySelector('.modal');

// Displays all the images.
allBtn.addEventListener('click', ()=>{
    allImages.forEach(img =>{
        img.style.display = 'flex';
    });
});
// Displays all the car images.
carBtn.addEventListener('click', ()=>{
    allImages.forEach(img =>{
           if(img.className !== 'car'){
               img.style.display = 'none';
           }else{
             img.style.display = 'flex';
           }
    });
});
// Displays all the nature images.
natureBtn.addEventListener('click', ()=>{
    allImages.forEach(img =>{
           if(img.className !== 'nature'){
               img.style.display = 'none';
           }else{
            img.style.display = 'flex';
           }
    });
});
// Showing a pop when clicking the images.
allImages.forEach(img =>{
    img.addEventListener('click', (e)=>{
        var clickedImg = e.target;
        modal.style.display = 'flex';
        const modalImg = document.querySelector('.modal img');
        modalImg.src = clickedImg.src;
    });
});
// closing the Popup.
const closeBtn = document.querySelector('.modal #close');
closeBtn.addEventListener('click',()=>{
    modal.style.display = 'none';
});
// closing the Popup.
modal.addEventListener('click', (e)=>{
    const modalImg = document.querySelector('.modal img');
    if(e.target == modalImg){
        modal.style.display = 'flex';
    }else{
        modal.style.display = 'none';
    }
});



























// By Mehdi Aoussiad.
