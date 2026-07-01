import { injectable } from "inversify";
import { IMockProductRepository } from "../interfaces/IMockProductRepository";
import { Product } from "../models/Product";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 商品リポジトリの実装(モック)
 */
@injectable()
export class MockProductRepository implements IMockProductRepository {

    // テスト用のダミーデータ（モックデータ）を準備
    private mockProducts: Product[] = [
        {
            productUuid: "p-001",
            name: "高性能ノートPC",
            price: 150000,
            category: { categoryUuid: "c-001", name: "パソコン" },
            stock: { stockUuid: "s-001", stock: 15 }
        },
        {
            productUuid: "p-002",
            name: "ワイヤレスマウス",
            price: 3500,
            category: { categoryUuid: "c-002", name: "周辺機器" },
            stock: { stockUuid: "s-002", stock: 120 }
        },
        {
            productUuid: "p-003",
            name: "メカニカルキーボード",
            price: 12000,
            category: { categoryUuid: "c-002", name: "周辺機器" },
            stock: { stockUuid: "s-003", stock: 1 }
        }
    ];

    /**
     * 指定したキーワードで商品を検索して取得する
     * @param keyword 検索キーワード
     * @returns 検索にヒットした商品のリスト(非同期)
     */
    public async searchKeyword(keyword: string): Promise<Product[]> {
        // キーワードが空の場合は、全件を返す
        if (!keyword) {
            return this.mockProducts;
        }
        // キーワードが商品名(name)に含まれているものをフィルタリングする
        const filteredProducts = this.mockProducts.filter(product =>
            product.name.includes(keyword)
        );
        // asyncメソッドなので、自動的にPromiseでラップされて返却される
        return filteredProducts;
    }

    public async updateProduct(
        productUuid: string,
        name: string,
        price: number
    ): Promise<Product | null> {

        const targetProduct = this.mockProducts.find(product =>
            product.productUuid === productUuid
        );

        if (!targetProduct) {
            return null;
        }

        const updatedProduct: Product = {
            ...targetProduct,
            name,
            price
        };

        this.mockProducts = this.mockProducts.map(product =>
            product.productUuid === productUuid
                ? updatedProduct
                : product
        );

        return updatedProduct;
    }

    public async findAll(): Promise<Product[]> {
        return this.mockProducts;
    }

    public async purchaseProduct(
        productUuid: string,
        quantity: number
    ): Promise<Product | null> {
        const targetProduct = this.mockProducts.find(
            product => product.productUuid === productUuid
        );

        if (!targetProduct) {
            return null;
        }

        if (targetProduct.stock.stock < quantity) {
            return null;
        }

        const updatedProduct: Product = {
            ...targetProduct,
            stock: {
                ...targetProduct.stock,
                stock: targetProduct.stock.stock - quantity
            }
        };

        this.mockProducts = this.mockProducts.map(product =>
            product.productUuid === productUuid
                ? updatedProduct
                : product
        );
        return updatedProduct;
    }

}