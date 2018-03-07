class GetWordsCombinations {
  cubeLetters: string[][];
  realWords: string[];
  listOfWordsBuilt: string[];
  realWordsBuilt: string[];
  tempWord: string;
  currentLetter: number;
  currentArray: number;

  constructor(allLetters: string[][], listOfRealWords: string[]) {
    this.cubeLetters = allLetters;
    this.realWords = listOfRealWords;
  }

  getAllPossibleWords():any {
    //test that there are multiple cubes given to work with
    if(this.cubeLetters.length === 1) {
      return this.cubeLetters;
    } else {
      this.currentLetter = 0;
      this.currentArray = 0;
      for(let array in this.cubeLetters) {
        for(let letter in this.cubeLetters[this.currentArray]) {
          this.tempWord += this.cubeLetters[this.currentArray][this.currentLetter]
          this.currentArray++;
        }
        console.log(`Word: ${this.tempWord}`);
        this.tempWord = '';
      }
    }
  }

  checkIfWordExists() {
    for(let word of this.listOfWordsBuilt) {
      if(this.realWords.indexOf(word) > -1) {
        this.realWordsBuilt.push(word);
      }
    }
    console.log(this.realWordsBuilt)
  }
}

let testWords = new GetWordsCombinations([['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']], ['fake', 'notwords'])
testWords.getAllPossibleWords()