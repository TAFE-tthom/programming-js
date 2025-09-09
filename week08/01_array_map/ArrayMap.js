

class ArrayMap {

  constructor() {
    this.all_keys = [];
    this.all_values = [];
  }


  static withArrays(keys, values) {
    let m = new ArrayMap();
    m.all_keys = keys;
    m.all_values = values;
    return m;
  }

  getElement(key) {
    // TODO: Logic to retrieve an element
    const index = this.all_keys.findIndex((e) => e === key);
    if(index >= 0) {
      return this.all_values[index];
    }
    return null;
  }

  setElement(key, value) {
    // TODO: Logic to set an element associated with a key
    const index = this.all_keys.findIndex((e) => e === key);
    if(index >= 0) {
      this.all_values[index] = value;
    } else {
      this.all_keys.push(key);
      this.all_values.push(value);
    }
  }

  removeElement(key) {

    const index = this.all_keys.findIndex((e) => e === key);
    let obj = null;
    if(index >= 0) {
      obj = this.all_values[index];
      this.all_keys.splice(index, 1);
      this.all_values.splice(index, 1);
    }
    return obj;
  }

  keys() {
    return this.all_keys;
  }


  values() {
    return this.all_values;
  }
  
}

module.exports = ArrayMap;
