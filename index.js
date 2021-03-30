"use strict";



function insert(num) {
    document.form.textview.value =
    document.form.textview.value + num;
}

function equal() {
    const exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
}

function clean() {
    document.form.textview.value = '';
}

function cleanSymbol() {
    const exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}

function sqr() {
    document.form.textview.value = Math.sqrt(document.form.textview.value);
}

