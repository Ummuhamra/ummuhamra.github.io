document.querySelectorAll('nav a').forEach(a=>{
  a.onclick=e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
    .scrollIntoView({behavior:'smooth'});
  }
});

const obs=new IntersectionObserver(e=>{
  e.forEach(x=>{
    if(x.isIntersecting)x.target.classList.add('show');
  });
},{threshold:.2});
document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
