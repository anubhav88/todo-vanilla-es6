"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Data struncture for the todo instance.
 * @param {String} text   Text user entered for a particular todo
 * @param {String} status Status of a todo
 */
var Todo = function Todo(text, status) {
    _classCallCheck(this, Todo);

    this.text = text;
    this.status = status;
};

exports.default = Todo;