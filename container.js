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

  put({ productId, qty }) {
    /**
     * Add new item if productId not already exist either way update qty
     */
  }

  delete(productId) {

  }
}

module.exports = Container
