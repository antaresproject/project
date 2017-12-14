'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormErrors = function () {
    function FormErrors() {
        _classCallCheck(this, FormErrors);

        this.errors = {};
    }

    _createClass(FormErrors, [{
        key: 'has',
        value: function has(field) {
            return this.errors[field] !== undefined;
        }
    }, {
        key: 'get',
        value: function get(field) {
            return this.has(field) ? this.errors[field][0] : '';
        }
    }, {
        key: 'clear',
        value: function clear(field) {
            if (field) {
                delete this.errors[field];
            } else {
                this.errors = {};
            }
        }
    }, {
        key: 'record',
        value: function record(errors) {
            this.errors = errors;
        }
    }]);

    return FormErrors;
}();