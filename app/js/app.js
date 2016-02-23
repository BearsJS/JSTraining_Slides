(function() {
  'use strict';

  activate();

  function supportsImports() {
    return 'import' in document.createElement('link');
  }

  function importPartials() {
    var slideContainer = document.querySelector('#slides'),
        link           = document.querySelectorAll('link[rel="import"][role="slide"]'),
        content, i;

    if (link) {
      for (i=0; i<link.length; i++) {
        if(link[i].import) {
          content = link[i].import.querySelector('.partial');
          if (slideContainer && content) {
            slideContainer.appendChild(content.cloneNode(true));
          }
        }
      }
    }
  }

  function activate() {
    if (supportsImports()) {
      console.log('HTML Import supported!');
    } else {
      console.log('HTML Import not supported!');
      return;
    }

    importPartials();


    Reveal.initialize({

      controls: true,
      progress: true,
      history: true,
      center: true,

      // Transition style
      transition : 'slide', // none/fade/slide/convex/concave/zoom

      // Optional reveal.js plugins
      dependencies : [
        {
          src       : 'vendor/reveal.js/lib/js/classList.js',
          condition : function() {
            return !document.body.classList;
          }
        },
        {
          src       : 'vendor/reveal.js/plugin/markdown/marked.js',
          condition : function() {
            return !!document.querySelector('[data-markdown]');
          }
        },
        {
          src       : 'vendor/reveal.js/plugin/markdown/markdown.js',
          condition : function() {
            return !!document.querySelector('[data-markdown]');
          }
        },
        {
          src       : 'vendor/reveal.js/plugin/highlight/highlight.js',
          async     : true,
          condition : function() {
            return !!document.querySelector('pre code');
          },
          callback  : function() {
            hljs.initHighlightingOnLoad();
          }
        },
        {
          src   : 'vendor/reveal.js/plugin/zoom-js/zoom.js',
          async : true
        },
        {
          src   : 'vendor/reveal.js/plugin/notes/notes.js',
          async : true
        }
      ]
    });
  }
})();
