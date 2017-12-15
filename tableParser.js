const CONSTANTS = {
  PushMap:{
"1": [2, 3],
"2": [2, 3, -1],
"3": [],
"4": [4, 5],
"5": [4, 5, -2],
"7": [6, -3],
"6": [],
"8": [6],
"9": [-5, 1, -4],
"10": [-6],
"11": [-7]
  },
  TABLE:[
    // [0, "V",   "^",  "~",  "(",  ")",  "1",  "0",  "$" ,
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 13, 13, 1, 1, 12, 1, 1, 12],
    [0, 2, 13, 13, 13, 3, 13, 13, 3],
    [0, 12, 13, 4, 4, 12, 4, 4, 12],
    [0, 6, 5, 13, 13, 6, 13, 13, 6],
    [0, 12, 12, 7, 8, 12, 8, 8, 12],
    [0, 12, 12, 13, 9, 12, 10, 11, 12]
  ],
  TermSymbol: [-1, -2, -3, -4, -5, -6, -7],
  NonTerm:[1, 2, 3, 4, 5, 7, 6, 8, 9, 10, 11],
  ErrorState:[12, 13]

}

const PushMap = {
  "1": [2, 3],
  "2": [2, 3, -1],
  "3": [],
  "4": [4, 5],
  "5": [4, 5, -2],
  "7": [6, -3],
  "6": [],
  "8": [6],
  "9": [-5, 1, -4],
  "10": [-6],
  "11": [-7]
}

function CheckLanguage() {
  const input = document.getElementById("lang-input").value
  const token = inputConversion(input)

  var stack = []
  var tokenIndex = 0

  stack.push(8)
  stack.push(1)
  var top = stack[stack.length - 1]

  while (true) {
    // if(top == '$' && token == '$')
    if (top == 8 && token[tokenIndex] == 8) {
      //Complete and the language is accepted
      alert('ACCEPTED')
      break;
      // else if (top == TERMINALSymbol)
    } else if (CONSTANTS.TermSymbol.includes(top)) {
      // if (top == token)
      if (top == token[tokenIndex] * -1) {
        stack.pop()
        tokenIndex++
      } else {
        //SYNTAX ERROR
        alert('SYNTAX ERROR')
        break;
      }
    } else {
      // if (TABLE[top][token] is in NonTerm)
      if (CONSTANTS.NonTerm.includes(CONSTANTS.TABLE[top][Number(token[tokenIndex])])) {
        // remove NonTerm from stack place rule for NonTerm on stack
        stack.pop()
        stack = stack.concat(PushMap[CONSTANTS.TABLE[top][Number(token[tokenIndex])]])
      } else if (CONSTANTS.ErrorState.includes(CONSTANTS.TABLE[top][Number(token[tokenIndex])])) {
        if (CONSTANTS.TABLE[top][Number(token[tokenIndex])] == 12) {
          alert('SYNTAX ERROR')
          break;
        } else if (CONSTANTS.TABLE[top][Number(token[tokenIndex])] == 13) {
          alert('SYNTAX ERROR')
          break;
        }
      }
    }
    top = stack[stack.length - 1]
  }
}

function inputConversion(input) {

  var token = input.split('')
  var tokenIndex = 0
  var newToken = []

  while (tokenIndex < token.length) {
    switch (token[tokenIndex]) {
      case 'V':
        newToken.push(1)
        break;
      case 'v':
        newToken.push(1)
        break;
      case '^':
        newToken.push(2)
        break;
      case '~':
        newToken.push(3)
        break;
      case '(':
        newToken.push(4)
        break;
      case ')':
        newToken.push(5)
        break;
      case '1':
        newToken.push(6)
        break;
      case '0':
        newToken.push(7)
        break;
    }
    tokenIndex++
  }
  newToken.push(8)
  return newToken
}