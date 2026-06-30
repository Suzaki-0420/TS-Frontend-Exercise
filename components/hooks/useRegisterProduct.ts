import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { IRegisterProductService } from "@/interfaces/IRegisterProductService";
import { Product } from "@/models/Product";
import { ProductCategory } from "@/models/ProductCategory";
import { ProductRegistration } from "@/models/ProductRegistration";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

/**
 * 演習 8-11 状態管理とサービスを繋ぐカスタムHookを実装する
 * 商品登録画面の状態管理とイベントハンドリングを行うカスタムHook
 */
export const useRegisterProduct = () => {
    // DIコンテナからサービスを取得する
    const service = container.get<IRegisterProductService>(TYPES.IRegisterProductService);
    // --- Stateの定義 ---
    const [formData, setFormData] = useState<ProductRegistration>({
        name: "",
        price: 0,
        stock: 0,
        categoryId: "",
        categoryName: ""
    });
    const [categories, setCategories] = useState<ProductCategory[]>([]);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // 入力フォームと状態を初期化して、入力画面に戻る処理
    const resetForm = useCallback(() => {
        setFormData({
            name: "",
            price: 0,
            stock: 0,
            categoryId: "",
            categoryName: ""
        });
        setErrors({});
        setIsSuccess(false); // モーダルを閉じる
    }, []);

    // --- 画面初期表示時にカテゴリ一覧を取得する ---
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await service.getCategories();
                setCategories(data);
            } catch (error: any) {
                setErrors((prev) => ({ ...prev, system: "カテゴリ一覧の取得に失敗しました。" }));
            }
        };
        fetchCategories();
    }, []);

    // --- 入力の変更イベント ---
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            // priceとstockは数値に変換して保存する
            [name]: name === "price" || name === "stock" ? Number(value) : value
        }));
    }, []);

    // --- カテゴリ選択時に詳細情報を取得する ---
    const handleCategoryChange = useCallback(async (categoryId: string) => {
        try {
            const category = await service.getCategoryById(categoryId);
            if (category) {
                setFormData((prev) => ({
                    ...prev,
                    categoryId: category.categoryUuid,
                    categoryName: category.name
                }));
            }
        } catch (error: any) {
            setErrors((prev) => ({ ...prev, category: "カテゴリ詳細の取得に失敗しました。" }));
        }
    }, []);

    // --- 商品名入力終了時に重複を検証する ---
    const handleNameBlur = useCallback(async () => {
        if (!formData.name) return; // 空の場合は検証しない
        try {
            // 検証前にエラーをクリアする
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors.name;
                return newErrors;
            });
            await service.validateProductName(formData.name);
        } catch (error: any) {
            // 重複エラーなどをStateにセットする
            setErrors((prev) => ({ ...prev, name: error.message }));
        }
    }, [formData.name]);

    // --- [登録]ボタンクリック時にデータを永続化する ---
    const handleSubmit = useCallback(async (): Promise<Product | null> => {
        setIsLoading(true);
        try {
            // サービスの登録処理を実行し、結果を返す
            const result = await service.execute(formData);
            if (result) {
                setIsSuccess(true);
            }
            return result;
        } catch (error: any) {
            setErrors((prev) => ({ ...prev, submit: error.message }));
            return null;
        } finally {
            setIsLoading(false);
        }
    }, [formData, service]);

    // UIコンポーネントに必要なプロパティと関数を返す
    return {
        formData,
        categories,
        errors,
        isLoading,
        isSuccess,
        handleChange,
        handleCategoryChange,
        handleNameBlur,
        handleSubmit,
        resetForm
    };
};