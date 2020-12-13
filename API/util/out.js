'use strict';

function print(...data) {
    console.log(data);
    return;
}

function printIf(exp, ...data) {
    let p = exp;
    if (p) {
        print(data);
    };
    return p;
};

function debugPrint(...data) {
    printIf((DEBUG == true) || false, ...data);
    return
};

module.exports = {print, printIf, debugPrint}