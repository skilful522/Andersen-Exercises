/* eslint-disable no-extend-native */
Array.prototype.duplicator = function() {
    return [...this, ...this];
};
