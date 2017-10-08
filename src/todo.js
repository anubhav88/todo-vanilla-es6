/**
 * Data struncture for the todo instance.
 * @param {String} text   Text user entered for a particular todo
 * @param {String} status Status of a todo
 */
var Todo = function(text, status) {
  this.text = text;
  this.status = status;
};