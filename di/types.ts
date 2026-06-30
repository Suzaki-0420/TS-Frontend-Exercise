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
    IPurchaseProductService: Symbol.for("IPurchaseProductService"),
    /**
 * 演習 8-4 Serviceの実装とDIコンテナへの登録
 */
    IUserRepository: Symbol.for("IUserRepository"),
    IRegisterUserService: Symbol.for("IRegisterUserService"),
    /**
     * 演習 8-9 リポジトリの実装を作成する
     */
    IProductCategoryRepository: Symbol.for("IProductCategoryRepository"),
    /**
     * 演習 8-10 商品登録サービスを実装してDIコンテナに登録する
     */
    IRegisterProductService: Symbol.for("IRegisterProductService")
};