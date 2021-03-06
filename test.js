const Container = require('./container');
/**
 * Unit test goes below
 * We Use Jest https://jestjs.io/ to help us for the test runner
 */

describe('Test class container', () => {
  test('testing Class Container import', () => {
    const c = new Container([
      { productId: '01', qty: 1 }
    ]);
    console.log(c);
    expect(c).toBeTruthy;
  });

  /**
   * test container.get()
   * test if we have instant of Container which contain item of {productId: '01', 1}
   * when we call get, assert it returning equal {productId: '01', 1}
   */



  /**
  * test container.put()
  * test if we put item of {productId: '01', 1}
  * assert it returning equal to {productId: '01', 1}
  */


  /**
  * test container.delete()
  */
});
