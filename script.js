let text = document.getElementById('text');
let hill3 = document.getElementById('hill3');
let hill2 = document.getElementById('hill2');
let hill1 = document.getElementById('hill1');
let sun1 = document.getElementById('sun1');
let tree= document.getElementById('tree');
let poster=document.getElementById('poster');

window.addEventListener('scroll',() =>{
    let value= window.scrollY;
      let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      let scrollPercentage = value / maxScroll;
  
      text.style.marginTop = scrollPercentage * 500 + 'px'; 
      hill3.style.marginTop = scrollPercentage *400 + 'px';
      hill2.style.marginLeft = scrollPercentage * 200 + 'px';
      hill2.style.marginTop = scrollPercentage * 200 + 'px';
      hill1.style.marginLeft = scrollPercentage * -200 + 'px';
      hill1.style.marginTop = scrollPercentage * 200 + 'px';
      tree.style.marginTop = scrollPercentage * 150 + 'px';
      sun1.style.marginTop = scrollPercentage * 500 + 'px';
      // poster.style.marginLeft = scrollPercentage * -1000 + 'px';
});

alert("hi")