'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  Vikky Shostak <vikkyshostak@gmail.com>
 *  Copyright (c) 2016 Koddr https://koddr.me
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  goodshare.js
 *
 *  Delicious (https://delicious.com) provider.
 */

var Delicious = function () {
  function Delicious() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.location.href;
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.title;

    _classCallCheck(this, Delicious);

    this.url = encodeURIComponent(url);
    this.title = encodeURIComponent(title);
  }

  _createClass(Delicious, [{
    key: 'shareWindow',
    value: function shareWindow() {
      var share_url = 'https://del.icio.us/save?url=' + this.url + '&title=' + this.title;

      document.body.querySelectorAll("[data-social=delicious]").forEach(function (item) {
        item.addEventListener('click', function (event) {
          event.preventDefault();
          return window.open(share_url, 'Share window', 'width=400, height=400');
        });
      });
    }
  }]);

  return Delicious;
}();

var delicious_share = exports.delicious_share = new Delicious().shareWindow();