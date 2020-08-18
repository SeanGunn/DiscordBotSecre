function HanganManScaffold(guesses, wd){
    var scaf;
    if(guesses == 0){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 1){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 2){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n|    | ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 3){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n|   \| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 4){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n|   \|/ ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 5){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n    0";
        scaf = scaf + "\n|   \|/ ";
        scaf = scaf + "\n|    | ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 6){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n|   \|/ ";
        scaf = scaf + "\n|    | ";
        scaf = scaf + "\n|   / ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 7){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n|   \|/ ";
        scaf = scaf + "\n|    | ";
        scaf = scaf + "\n|   / \\";
        scaf = scaf + "\n|--------";
        scaf = scaf + "\n";
        scaf = scaf + "The word was "+wd;
        return scaf;
    }
}