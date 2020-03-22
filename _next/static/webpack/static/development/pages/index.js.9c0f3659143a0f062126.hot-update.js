webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: fetchJson, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchJson", function() { return fetchJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/defaults */ "./node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/groupBy */ "./node_modules/lodash/groupBy.js");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);





 // eslint-disable-line import/no-unassigned-import

var SOURCE_PRIORITIES = {
  'ministere-sante': 1,
  'sante-publique-france': 2,
  'agences-regionales-sante': 3,
  prefectures: 4,
  'lperez-historical-data': 5
};
function fetchJson(url) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchJson$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url));

        case 2:
          response = _context.sent;

          if (!(response && response.ok)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", response.json());

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

function consolidate(records) {
  var territoriesGroups = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(records, function (r) {
    return "".concat(r.date, "-").concat(r.code);
  });

  return Object.keys(territoriesGroups).map(function (id) {
    return lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(lodash_sortBy__WEBPACK_IMPORTED_MODULE_3___default()(territoriesGroups[id], function (r) {
      return SOURCE_PRIORITIES[r.sourceType];
    }).reduce(function (acc, row) {
      lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default()(acc, row);

      return acc;
    }, {}), ['casConfirmes', 'deces', 'reanimation', 'hospitalises', 'gueris', 'date', 'code', 'nom']);
  });
}

var GOUV_START_DATE = '2020-03-02';

function filterRecords(records, isGouv) {
  if (!isGouv) {
    return records.filter(function (r) {
      return r.date >= GOUV_START_DATE;
    });
  }

  return records.filter(function (r) {
    return ['ministere-sante', 'sante-publique-france'].includes(r.sourceType);
  }).filter(function (r) {
    return r.date >= GOUV_START_DATE;
  });
}

var getData = function getData(isGouv) {
  var records;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchJson('https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json'));

        case 2:
          records = _context2.sent;
          return _context2.abrupt("return", consolidate(filterRecords(records, isGouv)));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

/***/ })

})
//# sourceMappingURL=index.js.9c0f3659143a0f062126.hot-update.js.map