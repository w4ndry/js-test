class Container {
  /**
   * 
   * Hint, choose proper data type for storing product item
   */
  constructor(data) {
    this.storage = data; 
  }


  get(productId = null, callback) {
    /**
     * Dont remove this setTimeout, assume there is an I/O delay to get the result of querying the storarage.
     * Offcourse you can modify the code, but the return value must be call inside setTimeout.
     */
    setTimeout(() => {
      const product = this.storage
        .find(product => product.productId === productId);

      callback(product);
      return product;
    }, 1000)
  }

  put({ productId, qty, callback }) {
    /**
     * Add new item if productId not already exist either way update qty
     */
    setTimeout(() => {
      const product = this.storage
        .find(product => product.productId === productId);

      if (!product) {
        this.storage = [...this.storage, {productId, qty}]
      } else {
        this.storage = this.storage.filter(data => {
          if (data.productId === productId) {
            return Object.assign(data, {qty});
          }

          return data;
        })
      }

      const newProduct = this.storage
        .find(product => product.productId === productId);

      callback(newProduct);
      return newProduct;
    }, 1000);
  }

  delete(productId, callback) {
    setTimeout(() => {
      this.storage = this.storage.filter(product => product.productId !== productId);

      const product = this.storage.find(product => product.productId === productId);

      if (!product) {
        callback(true);
        return true;
      }
      callback(true);
      return true;
    }, 1000);
  }
}

module.exports = Container
