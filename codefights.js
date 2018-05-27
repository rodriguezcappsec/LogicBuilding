let matrixElementsSum = (matrix) => {

    var position = 0;
    let saver = [];
    let array = [];
    for (var value = 0; value < matrix.length; ++value) {

        saver.push(matrix[value][position]);

        if (value == 2) {
            (saver[0] == 0) ? (saver[0] = 0, saver[1] = 0, saver[2] = 0) : saver;
            (saver[1] == 0) ? (saver[2] = 0) : saver;
            array.push(saver), saver = [], value = -1, ++position;
        }
        if (position == matrix[0].length) {
            var sum = 0;
            var newArray = array.toString().split(",").join("").split("0").join("");
            for (let index = 0; index < newArray.length; index++) {
                sum += Number(newArray[index]);
            }
            break;
        }

    }
    if (matrix.length == 1) {
        var _sum = 0;
        var justOne = matrix.toString().split(",").join("");
        for (let index = 0; index < justOne.length; index++) {
            _sum += Number(justOne[index]);
        }
        return _sum;
    }
    if (sum == null) {
        return 0;
    }
    return sum;

}