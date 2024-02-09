
export class SecureStorage {
    storage: any;
    hash: Function | any;
    encrypt: Function | any;
    decrypt: Function | any;

    constructor(storage: any, options?: {
        hash: Function;
        encrypt: Function;
        decrypt: Function;
    }) {
        this.storage = storage;
        if (options) {
            this.hash = options.hash;
            this.encrypt = options.encrypt;
            this.decrypt = options.decrypt;
        }
    }

    getItem(key: any) {
        key = this.hash(key);

        let value = this.storage.getItem(key);

        if (typeof value !== 'string') {
            return value;
        }

        value = this.decrypt(value);

        return JSON.parse(value);
    }

    setItem(key: any, value: any) {
        key = this.hash(key);

        value = JSON.stringify(value);

        value = this.encrypt(value);

        return this.storage.setItem(key, value);
    }

    removeItem(key: any) {
        key = this.hash(key);

        return this.storage.removeItem(key);
    }

    clear() {
        return this.storage.clear();
    }

    key(id: number) {
        return this.storage.key(id);
    }

    get length() {
        return this.storage.length;
    }
}