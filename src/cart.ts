import type { Product } from './product';

export class Cart {
	private items: Product[] = [];
	private static readonly DISCOUNT_THRESHOLD = 100;
	private static readonly DISCOUNT_RATE = 0.1;

	add(product: Product) {
		if (product.price < 0) {
			throw new Error('Product price cannot be negative');
		}
		this.items.push(product);
	}

	total(): number {
		const sum = this.items.reduce((s, p) => s + p.price, 0);
		const totalAfterDiscount = sum > Cart.DISCOUNT_THRESHOLD ? sum * (1 - Cart.DISCOUNT_RATE) : sum;
		return Cart.roundToTwo(totalAfterDiscount);
	}

	count(): number {
		return this.items.length;
	}

	clear() {
		this.items = [];
	}

	private static roundToTwo(value: number): number {
		return Math.round((value + Number.EPSILON) * 100) / 100;
	}
}
