let content = document.querySelector('.content')
content.addEventListener('mouseenter', function(event) {
    event.target.style.color = '#6C72FF';

    setTimeout(function() {
        event.target.style.color = '#6C72FF';  
    }, 100);
}, false);

content.addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});

let content2 = document.querySelector('.content2')
content2.addEventListener('mouseenter', function(event) {
    event.target.style.color = '#6C72FF';

    setTimeout(function() {
        event.target.style.color = '#6C72FF';  
    }, 100);
}, false);

content2.addEventListener('mouseleave', function(event) {
  event.target.style.color = 'black';
});

