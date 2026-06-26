import { Product } from "@/models/Product";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 商品キーワード検索サービスインターフェイス
 */
export interface IUpdateProductService {
    /**
     * すべての商品情報の取得を実行する
     * @returns 検索結果の商品のリスト
     */
    findall(): Promise<Product[]>;

    /**
     * 商品情報の更新を行う
     * @returns 検索結果の商品のリスト
     */
    update(
        productUuid: string,
        name: string,
        price: number
    ): Promise<Product | null>;
}