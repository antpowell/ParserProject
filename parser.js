/* Grammer:
  <STATEMENT> -> <OPERATION>$~
  <OPERATION> -> <ANDCHECK><OR>
  <OR>        -> v <ANDCHECK><OR> | E
  <ANDCHECK>  -> <DIGITCHECK><AND>
  <AND>       -> ^ <DIGITCHECK><AND> | E
  <DIGITCHECK>-> NOT<DIGIT> | <DIGIT>
  <DIGIT>     -> (<OPERATION>) | 1 | 0 
  */

/* This program will check if a given language is accepted by the grammer rules above.
  This program should take a string as input and return a boolean as output as well as display the steps
  taken to check if the language is accepted. 
*/
(function () {
  var stack = []
  var top = stack[stack.length - 1]

  function reader() {

  }

  function printer() {

  }

  function statement() {

    operation()
    stack.push('$')

  }

  function operation() {
    andcheck()
    or()
  }

  function or() {

  }

  function andCheck() {

  }

  function and() {

  }

  function digitCheck() {

  }

  function digit() {

  }
})()