/**
* 演習 6-2 データアクセスとサービスを実装する
* 商品カテゴリインターフェイス
*/
export interface ProductCategory {
    categoryUuid: string;  // 商品カテゴリId(UUID)
    name: string;          // 商品カテゴリ名
}