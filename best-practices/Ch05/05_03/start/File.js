class JFile {
    constructor(path) {
        this.path = path;

    }

    get text() {
        return this.contents();
    }

    get lines() {
        return this.toList();
    }


    contents() {
        return JFile.fs().readFileSync(this.path).toString();
    }
    toList() {
        return this.contents().split('\n');
    }

    grep(word, withIndex) {

        if (withIndex) {
            let origin = this.lines.map((e, i) => {
                return {
                    i: i,
                    line: e
                }
            });
            if (word.constructor === RegExp) {
                return origin.filter((e, i) => word.test(e.line))
            } else if(typeof word ==='string') {
                return origin.filter((e, i) => e.line.toLowerCase().indexOf(word.toLowerCase()) >= 0)
            }else if(typeof word ==='function'){
                origin.filter((e,i)=> word.call(this,e.line,e.i));
            }

        } else {
            if (word.constructor === RegExp) {
                return this.lines.filter((e, i) => word.test(e));
            } else if(typeof word ==='string'){
                return this.lines.filter((e, i) => e.toLowerCase().indexOf(word.toLowerCase()) >= 0);
            }else if(typeof word ==='function'){
                 this.lines.filter((e,i)=> word.call(this,e,i))
            }
        }
        return [];

    }

    static fs() {
        return require('fs');
    }
}
module.exports = JFile;
//20211114
