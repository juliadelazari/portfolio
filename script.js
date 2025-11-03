
// Simple bilingual toggle
document.addEventListener('DOMContentLoaded', function(){
  const btnPt = document.getElementById('btn-pt');
  const btnEn = document.getElementById('btn-en');
  const allTrans = document.querySelectorAll('[data-pt]');
  const title = document.querySelector('.site-title');

  function setLang(lang){
    allTrans.forEach(el=>{
      const pt = el.getAttribute('data-pt');
      const en = el.getAttribute('data-en');
      if(lang === 'pt') el.innerText = pt;
      else el.innerText = en;
    });
    // update active state
    if(lang === 'pt'){
      btnPt.classList.add('active'); btnEn.classList.remove('active');
      document.documentElement.lang = 'pt-BR';
    } else {
      btnEn.classList.add('active'); btnPt.classList.remove('active');
      document.documentElement.lang = 'en';
    }
  }

  btnPt.addEventListener('click', ()=>setLang('pt'));
  btnEn.addEventListener('click', ()=>setLang('en'));

  // initialize PT
  setLang('pt');

  // smooth scroll for nav anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        window.scrollTo({top: target.offsetTop - 60, behavior:'smooth'});
      }
    });
  });

  // Placeholder GitHub link handler - user can update DOM or replace href in file
  const gh = document.getElementById('github-link');
  gh.addEventListener('click', function(e){
    e.preventDefault();
    const newUrl = prompt('Cole aqui o link do seu repositório GitHub (ex: https://github.com/seunome):');
    if(newUrl){
      this.href = newUrl;
      this.innerText = newUrl;
      this.target = '_blank';
    }
  });

});
