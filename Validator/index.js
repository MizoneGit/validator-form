export default class Validator {
    _error = {};
    _value = null;

    constructor(input) {
        this._value = input.value;
    }

    required() {
        delete this._error.required;

        if (!this._value.trim()) {
            this._error.required = 'Поле является обязательным';
        }

        return this;
    }

    min(param) {
        delete this._error.min;

        if (this._value >= param) {
            this._error.min = `Поле должно содержать больше ${param} символов`;
        }

        return this;
    }

    max(param) {
        delete this._error.max;

        if (this._value <= param) {
            this._error.min = `Поле не должно содержать больше ${param} символов`;
        }

        return this;
    }

    phone() {
        delete this._error.phone;
        const regPattern = '^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$';
        const regExp = new RegExp(regPattern);

        if (!regExp.test(this._value)) {
            this._error.phone = `Поле не соответствует введенному формату номера`;
        }

        return this;
    }

    validate() {
        return this._error;
    }
}