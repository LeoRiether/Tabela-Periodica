(function (doc, $$) {
'use strict';

var strings = {
  langtext: {
    en: 'Language',
    pt: 'Língua'
  },
  title: {
    en: 'Periodic Helper',
    pt: 'Tabela Periódica'
  },
  desc: {
    en: 'Learn the periodic table in no time!',
    pt: 'Aprenda a tabela periódica em pouco tempo!'
  },
  by: {
    en: 'Created by: Leonardo Riether',
    pt: 'Criado por Leonardo Riether'
  },
  gitproj: {
    en: 'This project on github',
    pt: 'Este projeto no github'
  }
};

window.langtext = '';
window.lang = function (v) {
  if (v) {
    window.langtext = v;
    localStorage.setItem('lang', v);
  } else {
    return window.langtext;
  }
} 

window.langtext = (function () {
  var l = localStorage.getItem('lang');
  if (l !== null) { return l; }
  else {
    localStorage.setItem('lang', 'en');
    return 'en';
  }
})();

function localize(){
  [].forEach.call($$('[string]'), function (e) {
    e.textContent = strings[e.getAttribute('string')][lang()];
  });
}

window.localize = localize;
window.strings = strings;

})(document, document.querySelectorAll.bind(document));
