function lengthOfLastWord(s) {
  const modefiedWord = s.trim().split(" ");

  return modefiedWord[modefiedWord.length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon   "));
