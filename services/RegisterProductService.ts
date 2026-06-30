import { TYPES } from "@/di/types";
import type { IProductCategoryRepository } from "@/interfaces/IProductCategoryRepository";
import type { IProductRepository } from "@/interfaces/IProductRepository";
import { IRegisterProductService } from "@/interfaces/IRegisterProductService";
import { Product } from "@/models/Product";
import { ProductCategory } from "@/models/ProductCategory";
import { ProductRegistration } from "@/models/ProductRegistration";
import { inject, injectable } from "inversify";

/**
 * 演習 8-10 商品登録サービスを実装してDIコンテナに登録する
 * 商品登録に関する各種データアクセスを統括するFacadeサービス
 */
@injectable()
export class RegisterProductService implements IRegisterProductService {

    /**
     * コンストラクタ
     * @param productRepository 商品リポジトリ
     * @param categoryRepository 商品カテゴリリポジトリ
     */
    constructor(
        @inject(TYPES.IProductRepository) private productRepository: IProductRepository,
        @inject(TYPES.IProductCategoryRepository) private categoryRepository: IProductCategoryRepository
    ) { }

    /**
     * 画面初期表示時: すべての商品カテゴリを取得する
     * @return すべての商品カテゴリのリスト（非同期）
     */
    async getCategories(): Promise<ProductCategory[]> {
        return await this.categoryRepository.findAll();
    }

    /**
     * カテゴリ選択時: 指定したIDの商品カテゴリ詳細を取得する
     * @param id 商品カテゴリId(UUID)
     * @return 商品カテゴリ（非同期）
     */
    async getCategoryById(id: string): Promise<ProductCategory> {
        return await this.categoryRepository.findById(id);
    }

    /**
     * 入力終了時: 商品名の重複を検証する
     * @param name 入力された商品名
     * @throws 商品名が重複している場合はエラーをスローする
     */
    async validateProductName(name: string): Promise<void> {
        await this.productRepository.existsByName(name);
    }

    /**
     * 登録実行時: 商品データを永続化する
     * @param product 登録する商品データ
     * @return 登録された商品（非同期）
     */
    async execute(product: ProductRegistration): Promise<Product> {
        return await this.productRepository.register(product);
    }
}