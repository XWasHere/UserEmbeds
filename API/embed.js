'use strict';

// const { printD, print } = require('.').util;

class embed {
    static defaultTitleV = '';
    static defaultTitleK = 'og:title';
    static EXTRASTUFF = ''
    constructor() {
        this.properties = {};
    }

    setTitle(title) {
        this.properties[defaultTitleK] = title || this.defaultTitleV;
        return
    }

    clearTitle() {
        delete this.properties[defaultTitleK];
        return
    }

    get title() {
        return this.properties.title;
    }

    set title(t) {
        this.properties.title = t;
    }

    get HTML() {
        html = '';
        for (i in this.properties) {
            html += `<meta content='${this.properties[i]}' property='${i}' ${this.EXTRASTUFF}>\n`;
        }
        return html
    }
};

module.exports = embed