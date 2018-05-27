let combinations = toCombine => {
    let addSpace = toCombine.split('');
    addSpace.splice(1, 0, " ");
    let noName = addSpace;
    let saveCombinations = [];
    let combCount = 0;
    let comb = toCombine.length - 2;

    while (comb != 1) {
        var lastIndex = noName[noName.length - 1];
        noName[1] = lastIndex;
        noName[noName.length - 1] = "";
        noName.pop();
        noName.unshift(noName[0]);
        noName[1] = "";
        saveCombinations.push([noName.join("")]);
        --comb;
        if (comb == 1) {
            var first = noName[0];
            noName[0] = noName[noName.length - 1];
            noName[noName.length - 1] = first;
            comb = toCombine.length - 2;
            ++combCount;
        }
        if (combCount == noName.length - 1) {
            saveCombinations.unshift([`Combinations from :${toCombine}`]);
            break;
        }
    }
    console.log(saveCombinations);
};

combinations("ABCDEFGH");