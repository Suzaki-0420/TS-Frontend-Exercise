import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { IUpdateProductService } from "@/interfaces/IUpdateProductService";
import { Product } from "@/models/Product";
import { useState } from "react";
/**
 *  演習 6-3 Reactコンポーネントを実装してUIを確認する
 * 商品検索のState(状態)と操作を提供するカスタムフック
 * カスタムフック：ページに対応する「伝える」機能をまとめたもの
 * 大きさ関係なくわける→実装方法がそろうと誰が見てもわかりやすくなる
 */

/**
 * 商品更新のState(状態)と操作を提供するカスタムフック
 */
export const useUpdateProduct = () => {
    // 商品一覧を保持するState
    const [products, setProducts] = useState<Product[]>([]);

    // 現在選択中の商品を保持するState
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // 編集中の商品名を保持するState
    const [editName, setEditName] = useState<string>("");

    // 編集中の価格を保持するState
    const [editPrice, setEditPrice] = useState<string>("");

    // 更新・取得処理中かどうかを判定するState
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // モーダルが表示されているかどうかを判定するState
    const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
    // 成功メッセージを表示するためのState
    const [successMessage, setSuccessMessage] = useState("");

    const openConfirm = () => {
        setIsConfirmOpen(true);
    };

    const closeConfirm = () => {
        setIsConfirmOpen(false);
    };

    const confirmUpdate = async () => {
        await update();
        setIsConfirmOpen(false);
    };

    // DIコンテナから商品更新Serviceを取得する
    const updateService = container.get<IUpdateProductService>(
        TYPES.IUpdateProductService
    );

    // 商品一覧を取得する関数
    const findAll = async () => {
        setIsLoading(true);

        try {
            const result = await updateService.findall();
            setProducts(result);
        } catch (error) {
            console.error("商品一覧取得中にエラーが発生しました", error);
        } finally {
            setIsLoading(false);
        }
    };

    // 変更対象の商品を選択する関数
    const selectProduct = (product: Product) => {
        setSelectedProduct(product);
        setEditName(product.name);
        setEditPrice(product.price.toString());
    };

    // 商品を更新する関数
    const update = async () => {
        if (!selectedProduct) {
            return;
        }

        setIsLoading(true);

        try {
            await updateService.update(
                selectedProduct.productUuid,
                editName,
                Number(editPrice)
            );

            const result = await updateService.findall();
            setProducts(result);

            setSelectedProduct(null);
            setEditName("");
            setEditPrice("");

            // 成功メッセージ
            setSuccessMessage("商品情報の変更が完了しました");
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } catch (error) {
            console.error("商品更新中にエラーが発生しました", error);
        } finally {
            setIsLoading(false);
        }
    };

    // UI層に対して、State(データ)と関数を公開する
    return {
        products, //商品一覧（List<Product>）
        selectedProduct, //選択された商品（Product）
        editName, //選択された商品の元の名前（string）
        editPrice, //選択された商品の元の値段（string）
        isLoading, // 処理中か否かの判定（boolean）
        isConfirmOpen, // モーダルウィンドウが開いているかの判定（boolean）
        successMessage, // 成功メッセージ（string）

        setEditName, //商品を書き換えるための関数
        setEditPrice, //値段を書き換えるための関数

        findAll, //商品一覧を取得する関数
        selectProduct, // 変更対象の商品を選択する関数
        update, //更新する関数
        openConfirm, // モーダルウィンドウを開く関数
        closeConfirm, //モーダルウィンドウを閉じる関数
        confirmUpdate, // モーダルでOKをしたら更新関数を実行するための関数
    };
};