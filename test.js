const Container = require('./container');
/**
 * Unit test goes below
 * We Use Jest https://jestjs.io/ to help us for the test runner
 */

describe('Test class container', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.clearAllTimers();
  });

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

  test('testing method get', done => {
    const productData = {productId: '01', qty: 1}
    const container = new Container([productData]);

    expect(container).toBeInstanceOf(Container);
    expect(container).toHaveProperty('storage');

    const callback = (data) => {
      try {
        expect(data).toMatchObject(productData)
        done();
      } catch (error) {
        done(error);
      }
    };

    container.get('01', callback);

    jest.advanceTimersByTime(1000);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

  });


  /**
  * test container.put()
  * test if we put item of {productId: '01', 1}
  * assert it returning equal to {productId: '01', 1}
  */
  test('testing method put', done => {
    const container = new Container([{productId: '01', qty: 1}]);
    const productId = '01';
    const qty = 2;
    const newProduct = {productId, qty};

    expect(container).toBeInstanceOf(Container);
    expect(container).toHaveProperty('storage');

    const callback = data => {
      try {        
        expect(data).toMatchObject(newProduct);
        done();
      } catch (error) {
        done(error);
      }
    }

    container.put({productId, qty, callback});

    jest.advanceTimersByTime(1000);

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });


  /**
  * test container.delete()
  */
  test('testing method delete', done => {
    const container = new Container([{productId: '01', qty: 1}, {productId: '02', qty: 3}]);
    const productId = '01';

    expect(container).toBeInstanceOf(Container);
    expect(container).toHaveProperty('storage');

    const callback = data => {
      try {
        expect(data).toBeTruthy();
        expect(container.storage).toHaveLength(1);
        done();
      } catch (error) {
        done(error);
      }
    }

    container.delete(productId, callback);

    jest.advanceTimersByTime(1000);

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
