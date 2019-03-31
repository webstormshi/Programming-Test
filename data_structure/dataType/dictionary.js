function Dictionatry() {
    var items = {};

    this.set = function(key, value) {
        if(!this.has(key)) {
            items[key] = value;
            return true;
        }
        return false;
    }

    this.remove = function(key) {
        if(this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.has = function(key) {
        return items.hasOwnProperty(key);
        // return key in items
    }

    this.get = function(key) {
        if(this.has(key)) {
            return items[key]
        }
        return null;
    }

    this.clear = function() {
        items = {};
    }

    this.size = function() {
        return Object.keys(items).length;
    }

    this.keys = function() {
        // return Object.keys(items);
        var keys = [];
        for (const key in items) {
            if (items.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    }

    this.values = function() {
        return Object.values(items);
        // var values = [];
        // for (const key in items) {
        //     if (items.hasOwnProperty(key)) {
        //         values.push(items[key]);
        //     }
        // }
        // return values;
    }

    this.getItems = function() {
        return items;
    }
}

var dict = new Dictionatry();
dict.set('shi', 'yong');
dict.set('sh234i', 'sdfghjyong');
console.log(dict.get('shi'));