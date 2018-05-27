let trainingData = [
    [5, 10],
    [0, 0],
    [8, 2],
    [9, -1],
    [5, 2],
    [15, -1]
];

let posKey = 0;
let posValue = 1;
let sumKey = 0;
let sumValue = 0;

for (let key = 0; key < trainingData.length; ++key) {
    for (let value = 0; value < trainingData.length; ++value) {

        trainingData[key][value] == -1 ?
            (trainingData[key][value] = 0, trainingData[key][value - 1] = 0) :
            trainingData[key][value];
    }
}
// console.log(trainingData);
for (let index = 0; index < trainingData.length; index++) {
    sumKey += trainingData[index][posKey];
    sumValue += trainingData[index][posValue];
    if (posValue > trainingData.length - 1) {
        break;
    }
}
if ((sumKey == 0 && sumValue == 0)) {
    // console.log(0)
} else {
    // console.log((sumKey / sumValue));
}
