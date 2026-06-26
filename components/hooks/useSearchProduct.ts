import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { ISearchProductService } from "@/interfaces/ISearchProductService";
import { Product } from "@/models/Product";
import { useState } from "react";
/**
 *  演習 6-3 Reactコンポーネントを実装してUIを確認する
 * 商品検索のState(状態)と操作を提供するカスタムフック
 * カスタムフック：ページに対応する「伝える」機能をまとめたもの
 * 大きさ関係なくわける→実装方法がそろうと誰が見てもわかりやすくなる
 */
export const useSearchProduct = () => {
    // 状態(State)の定義
    // 検索結果の商品データを配列として保持するState
    const [products, setProducts] = useState<Product[]>([]);
    // 検索処理中(通信中)であるかを判定するためのフラグState
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // DIコンテナからユースケース(Service)を取得する
    const searchService = container.get<ISearchProductService>(TYPES.ISearchProductService);

    // UIから呼び出される実行関数
    const search = async (keyword: string) => {
        // 処理開始時にローディング状態をオンにする(UI側でボタンを無効化するなどの制御に使用)
        setIsLoading(true);
        try {
            // Serviceを呼び出してデータを取得する
            const result = await searchService.execute(keyword);
            // 取得したデータをStateに保存(これにより画面が再描画される)
            setProducts(result);
        } catch (error) {
            // 検索処理中に例外が発生した場合は、エラー内容をコンソールに出力する
            console.error("検索中にエラーが発生しました", error);
        } finally {
            // 処理の成功・失敗に関わらず、必ずローディング状態をオフに戻す
            setIsLoading(false);
        }
    };

    // UI層に対して、State(データ)と関数を公開する
    return {
        products,   // コンポーネント側で表示するための商品リスト
        isLoading,  // コンポーネント側でローディング表示を切り替えるための状態
        search      // コンポーネント側で検索処理を実行するための関数
    };
};