/**
* 演習 6-2 データアクセスとサービスを実装する
* 商品在庫インターフェイス
*/
export interface ProductStock {
    stockUuid: string;  // 商品在庫Id(UUID)
    stock: number;      // 商品在庫数
}