import { IProductRepository } from "@/interfaces/IProductRepository";
import { ISearchProductService } from "@/interfaces/ISearchProductService";
import { IUpdateProductService } from "@/interfaces/IUpdateProductService";
import { IPurchaseProductService } from "@/interfaces/IPurchaseProductService";
import { Container } from "inversify";
import { TYPES } from "./types";
import { MockProductRepository } from "@/infrastructures/MockProductRepository";
import { SearchProductService } from "@/services/SearchProductService";
import { UpdateProductService } from "@/services/UpdateProductService";
import { PurchaseProductService } from "@/services/PurchaseProductService";

/**
 * 演習 6-2 データアクセスとサービスを実装する
 * DIコンテナの初期化と依存関係の登録
 */
const container = new Container();
// ---------------------------------------------------------
// バインディング（登録）設定
// ---------------------------------------------------------
// リポジトリの登録(モック版を紐付ける)
container.bind<IProductRepository>(TYPES.IProductRepository).to(MockProductRepository).inSingletonScope();;
// サービス(ユースケース)の登録
container.bind<ISearchProductService>(TYPES.ISearchProductService).to(SearchProductService);
container.bind<IUpdateProductService>(TYPES.IUpdateProductService).to(UpdateProductService);
container.bind<IPurchaseProductService>(TYPES.IPurchaseProductService).to(PurchaseProductService);

export { container };