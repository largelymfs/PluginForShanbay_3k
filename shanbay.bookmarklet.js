javascript: (function() {
  if (!location.href.includes('shanbay.com/bdc/review')) {
    alert('The script can only work on shanbay.com/bdc/review');
    return;
  }
  　　
  if (!window.jQuery) {　　　　
    var script = document.createElement('script');　　　　
    script.onload = bar;
    script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';　　　　
    document.body.appendChild(script);
  } else {
    bar();　　
  }

  function bar() {

    $.ajax({
      url: "https://raw.githubusercontent.com/jt-wang/shanbay_gre_helper/master/shanbay_gre_3k.json",
      type: "GET",
      dataType: "text",
      async: true
    }).done(function(res) {
      alert('success');

      $('#main-navbar').css('display', 'none');
      $('.container.main-body.new-main-body').css({
        'position': 'absolute',
        'margin': 'auto',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'overflow': 'auto'
      });

      var is_iphone = navigator.userAgent.toLowerCase().includes('iphone');

      function Dict() {
        this.elements = {};
        this.get = function(key) {
          return this.elements[key] || null;
        }
      }

      var dict = new Dict();
      try {
        dict.elements = JSON.parse(res);
      } catch (e) {
        alert(e);
      }


      function fetch_word() {
        var h1 = $('h1');
        if (h1.length > 0) {
          return $('h1').html();
        } else {
          return null;
        }
      }

      function do_it() {
        var word = fetch_word();
        if (word !== null) {
          var explanation = dict.get(word);
          if (explanation !== null) {
            var s = $('#definition-cn-hint');
            var html1 = '<div class="span10 offset1"><div class="hint-content">'+explanation +'</div></div>';
            s.html(html1);
            var s2 = $('.text');
            s2.html(explanation);
          }
        } else {
          var table = $('[id^=summary][data-id]');
          if (table.length > 0) {
            table.each(function(i) {
              var item_word = $(this).children('.word').html();
              var item_explanation = dict.get(item_word);
              if (item_explanation !== null) {
                $(this).children('[class^=definition]').html(item_explanation);
              }
            });
          }
        }
        if(is_iphone){
          var continue_button = $('a.continue.continue-button');
          if (continue_button.length > 0){
            continue_button.attr('style', 'left: 75%25; top: 50%25');
          }
        }
      }


var shouldMutate = true;
var target = $('#review')[0];



var observer = new MutationObserver(function (mutations) {
  if (shouldMutate) {
    shouldMutate = false;
    mutations.forEach(function (mutation) {
      do_it();
    });
    shouldMutate = true;
  }
});


var config = {attributes: true, childList: true, characterData: true };

observer.observe(target, config);



    }).fail(function(err) {
      alert(err.responseText);
    });


  }

})();
