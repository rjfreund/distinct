var input = document.getElementById('input');
var output = document.getElementById('output');
var ignoreCase = document.getElementById('ignoreCase');

Array.prototype.indexOfIgnoreCase = function(string){
    var index = -1;
    this.some(function(element, i){
        if(string.toLowerCase()!==element.toLowerCase()){ return; }
        index = i; 
        return true;
    });
    return index;
};
input.oninput = function(){ output.value = input.value.split('\n').filter(function(element, index, arr){ 
    input.style.height = 'auto';
    output.style.height = input.style.height;
    input.style.height = input.scrollHeight + 'px';
    output.style.height = input.style.height;
    return (ignoreCase.checked) ? arr.indexOfIgnoreCase(element)===index : arr.indexOf(element)===index; 
}).join('\n'); };
input.onpropertychange = input.oninput;
ignoreCase.onchange = input.onpropertychange;
