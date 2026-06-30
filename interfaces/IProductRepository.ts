import { Product } from "../models/Product";
import { ProductRegistration } from "../models/ProductRegistration";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 商品リポジトリインターフェース
 */
export interface IProductRepository {
    /**
     * 指定したキーワードで商品を検索して取得する
     * @param keyword 検索キーワード
     * @returns 検索にヒットした商品のリスト（非同期）
     */
    searchKeyword(keyword: string): Promise<Product[]>;

    /**
     * 演習 8-8 リポジトリとDTOインターフェイスを実装する
     * 商品の重複を検証する
     * @param name 検証する商品名
     */
    existsByName(name: string): Promise<void>;
    /**
     * 演習 8-8 リポジトリとDTOインターフェイスを実装する
     * 商品を登録する
     * @param product 登録する商品
     * @returns 登録された商品（非同期）
     */
    register(product: ProductRegistration): Promise<Product>;
    /*
    updateProduct(
        productUuid: string,
        name: string,
        price: number
    ): Promise<Product | null>;

    findAll(): Promise<Product[]>*/

    /**
     * 購入された分だけ商品の在庫を減らす関数
     * @param productUuid 商品のUUID
     * @param quantity 商品の在庫数
     * @returns 在庫変更後の商品情報
     */
    /*purchaseProduct(
        productUuid: string,
        quantity: number
    ): Promise<Product | null>;*/
}