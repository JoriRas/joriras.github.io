// const variables for items needed for the bluring
const loadingtxt = document.querySelector('.loadingtxt');
const bg = document.querySelector('.bg');

// variables for the loading %
var load = 0;
var int = setInterval(blurring, 30)


// the function for blurring effect and loading %
function blurring () {
    load++;
    if(load >99){
        clearInterval(int);
    }
    
    loadingtxt.innerHTML = `${load}%`;
    loadingtxt.style.opacity=scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}

//variable for the blur
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }