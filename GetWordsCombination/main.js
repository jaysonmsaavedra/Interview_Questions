var GetWordsCombinations = /** @class */ (function () {
    function GetWordsCombinations(allLetters, listOfRealWords) {
        this.cubeLetters = allLetters;
        this.realWords = listOfRealWords;
    }
    GetWordsCombinations.prototype.getAllPossibleWords = function () {
        //test that there are multiple cubes given to work with
        if (this.cubeLetters.length === 1) {
            return this.cubeLetters;
        }
        else {
            for (var array in this.cubeLetters) {
                for (var word in this.cubeLetters[array]) {
                    this.tempWord += this.cubeLetters[array][word];
                }
                console.log("Word: " + this.tempWord);
                this.tempWord = '';
            }
        }
    };
    GetWordsCombinations.prototype.checkIfWordExists = function () {
        for (var _i = 0, _a = this.listOfWordsBuilt; _i < _a.length; _i++) {
            var word = _a[_i];
            if (this.realWords.indexOf(word) > -1) {
                this.realWordsBuilt.push(word);
            }
        }
        console.log(this.realWordsBuilt);
    };
    return GetWordsCombinations;
}());
var testWords = new GetWordsCombinations([['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']], ['fake', 'notwords']);
testWords.getAllPossibleWords();
