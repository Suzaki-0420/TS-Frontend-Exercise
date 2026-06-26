/**
* 演習 6-2 データアクセスとサービスを実装する
* DIコンテナ用の識別子(Symbol)定義
*/
export const TYPES = {
    // インフラストラクチャ層
    IProductRepository: Symbol.for("IProductRepository"),
    // サービス(ユースケース)層
    ISearchProductService: Symbol.for("ISearchProductService"),
    IUpdateProductService: Symbol.for("IUpdateProductService"),
    IPurchaseProductService: Symbol.for("IPurchaseProductService")
};