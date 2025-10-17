import { Cart } from '../src/cart';
import { createProduct } from '../src/product';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('panier commence vide', () => {
    expect(cart.count()).toBe(0);
    expect(cart.total()).toBe(0);
  });

  test('ajoute des produits et calcule le total', () => {
    cart.add(createProduct('apple', 1.2));
    cart.add(createProduct('banana', 0.8));
    expect(cart.count()).toBe(2);
    expect(cart.total()).toBe(2.0);
  });

  test('applique une réduction de 10 % lorsque le total dépasse 100€', () => {
    cart.add(createProduct('expensive', 60));
    cart.add(createProduct('expensive2', 50)); // total 110
    // discounted total = 110 * 0.9 = 99
    expect(cart.total()).toBe(99);
  });

  test('n\'applique pas de réduction lorsque le total est égal à 100€', () => {
    cart.add(createProduct('a', 40));
    cart.add(createProduct('b', 60)); // total 100
    expect(cart.total()).toBe(100);
  });

  test('arrondit correctement à deux décimales', () => {
    cart.add(createProduct('item1', 33.333));
    cart.add(createProduct('item2', 33.333));
    cart.add(createProduct('item3', 33.334)); // sum 100.0
    expect(cart.total()).toBe(100);

    cart.add(createProduct('tiny', 0.005)); // now 100.005 -> discount applies -> 90.0045 -> rounds to 90.00
    expect(cart.total()).toBe(90);
  });
});
