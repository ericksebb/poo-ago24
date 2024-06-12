export function hey(message: string): string {
  message = message.trim();
  if (isEmpty(message)) {
    return "Fine. Be that way!";
  }
  if (isAllCaps(message)) {
    if (isQuestion(message)) {
      return "Calm down, I know what I'm doing!";
    }
    return "Whoa, chill out!";
  } else {
    if (isQuestion(message)) {
      return "Sure.";
    }
  }
  return "Whatever.";
}

function isAllCaps(message: string): boolean {
  return message === message.toUpperCase() && !onlyNoLetters(message);
}
function isQuestion(message: string): boolean {
  return message.indexOf("?") === message.length - 1;
}
function isEmpty(message: string): boolean {
  return "" === message;
}
function onlyNoLetters(message: string): boolean {
  return message === message.replace(/[A-Za-z]/g, "");
}
