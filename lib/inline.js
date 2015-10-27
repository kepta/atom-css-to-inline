'use babel';
let processLeft = (item) => {
    let temp = item.slice(0);
    let ret = '';
    if (temp.length > 0) {
        // guard char
        temp += 'z';
        for (var i = 0; i < temp.length - 1; i++) {
            if (temp[i] === '-') {
                ret += temp[i + 1].toUpperCase();
                i++;
            } else {
                ret += temp[i];
            }
        }
        return ret;
    }
    return '';
};

let processRight = (item) => {
    if (item.length > 0 && item[0] !== '\'') {
        return '\'' + item.replace(';','') + '\'';
    }
    return item;
};
let validCssLine = (item) => {
    if ((item.match(/:/g) || []).length == 1) {
        return true;
    }
    return false;
};
let cssToInline = (item) => {
    let position = item.indexOf(':');
    let left = item.slice(0, position);
    let right = position !== item.length - 1 ? item.slice(position + 1) : '';
    let whiteShift = left.indexOf(left.trim())+1;
    return processLeft(Array(whiteShift).join(' ') + left.trim()) + ': ' + processRight(right.trim());
};
module.exports = function inline(s) {
    let grid = s.split('\n');
    grid = grid.map((item) => {
        if (validCssLine(item)) {
            let x = cssToInline(item);
            return x;
        }
        return item;
    });
    return grid.join(',\n');
};
