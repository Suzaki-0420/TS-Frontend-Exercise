import { injectable, inject } from "inversify";
import type { IUpdateProductService } from "../interfaces/IUpdateProductService";
import type { IProductRepository } from "../interfaces/IProductRepository";
import type { Product } from "@/models/Product";
import { TYPES } from "@/di/types";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 商品キーワード検索サービスインターフェイスの実装
 */
@injectable()
export class UpdateProductService implements IUpdateProductService {

    /**
     * コンストラクタ
     * @param productRepository IProductRepositoryの実装をインジェクションする
     */
    constructor(
        @inject(TYPES.IProductRepository) private productRepository: IProductRepository
    ) { }

    /**
     * 商品検索を実行する
     * @param keyword 検索キーワード
     * @returns 検索結果の商品のリスト
     */
    public async findall(): Promise<Product[]> {
        // ユースケース固有のビジネスロジックをここに記述可能
        return await this.productRepository.findAll();
    }

    public async update(
        productUuid: string,
        name: string,
        price: number
    ) {
        return await this.productRepository.updateProduct(productUuid, name, price);
    }
}