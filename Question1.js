// Problem 1:
//
// Write a JavaScript function that accepts a sentence of words all in lowercase, and returns every other word in all caps. Hint: see toUppercase()
//
// ex. in a galaxy far far away -> in A galaxy FAR far AWAY


function replaceEO(str) {
    var phrase = str.split(' ');
    //  console.log(phrase);
    for (var i = 0; i < phrase.length; i++) {

        let word = phrase[i];

        if(i%2===0)
        {
            word = word.toUpperCase();
        }

        console.log(word);
    }

}
replaceEO("Lets be best friends");
