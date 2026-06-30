import { IProductRepository } from "@/interfaces/IProductRepository";
import { ISearchProductService } from "@/interfaces/ISearchProductService";
import { IUpdateProductService } from "@/interfaces/IUpdateProductService";
import { IPurchaseProductService } from "@/interfaces/IPurchaseProductService";
import { Container } from "inversify";
import { TYPES } from "./types";
import { ProductRepository } from "@/infrastructures/ProductRepository";
import { SearchProductService } from "@/services/SearchProductService";
import { UpdateProductService } from "@/services/UpdateProductService";
import { PurchaseProductService } from "@/services/PurchaseProductService";
import { IRegisterUserService } from "@/interfaces/IRegisterUserService";
import { RegisterUserService } from "@/services/RegisterUserService";
import { IUserRepository } from "@/interfaces/IUserRepository";
import { UserRepository } from "@/infrastructures/UserRepository";
import { IProductCategoryRepository } from "@/interfaces/IProductCategoryRepository";
import { ProductCategoryRepository } from "@/infrastructures/ProductCategoryRepository";
import { IRegisterProductService } from "@/interfaces/IRegisterProductService";
import { RegisterProductService } from "@/services/RegisterProductService";

/**
 * 演習 6-2 データアクセスとサービスを実装する
 * DIコンテナの初期化と依存関係の登録
 */
const container = new Container();
// ---------------------------------------------------------
// バインディング（登録）設定
// ---------------------------------------------------------
// リポジトリの登録(モック版を紐付ける)
container.bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository).inSingletonScope();;
// サービス(ユースケース)の登録
container.bind<ISearchProductService>(TYPES.ISearchProductService).to(SearchProductService);
container.bind<IUpdateProductService>(TYPES.IUpdateProductService).to(UpdateProductService);
container.bind<IPurchaseProductService>(TYPES.IPurchaseProductService).to(PurchaseProductService);
/**
 * 演習 8-4 Serviceの実装とDIコンテナへの登録
 */
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<IRegisterUserService>(TYPES.IRegisterUserService).to(RegisterUserService);
/**
 * 演習 8-9 リポジトリの実装を作成する
 */
container.bind<IProductCategoryRepository>(TYPES.IProductCategoryRepository).to(ProductCategoryRepository);
/**
 * 演習 8-10 商品登録サービスを実装してDIコンテナに登録する
 */
container.bind<IRegisterProductService>(TYPES.IRegisterProductService).to(RegisterProductService);

export { container };