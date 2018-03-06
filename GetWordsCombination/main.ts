class GetWordsCombinations {
  cubeLetters: string[][];
  realWords: string[];
  listOfWordsBuilt: string[];
  realWordsBuilt: string[];
  tempWord: string;

  constructor(allLetters: string[][], listOfRealWords: string[]) {
    this.cubeLetters = allLetters;
    this.realWords = listOfRealWords;
  }

  getAllPossibleWords():any {
    //test that there are multiple cubes given to work with
    if(this.cubeLetters.length === 1) {
      return this.cubeLetters;
    } else {
      for(let array in this.cubeLetters) {
        for(let word in this.cubeLetters[array]) {
          this.tempWord += this.cubeLetters[array][word]
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