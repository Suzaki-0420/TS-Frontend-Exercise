"use client";

import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import type { IPurchaseProductService } from "@/interfaces/IPurchaseProductService";
import type { Product } from "@/models/Product";
import { useState } from "react";

type CartItem = {
    product: Product;
    quantity: number;
};

/**
 * 商品購入のState(状態)と操作を提供するカスタムフック
 */
export const usePurchaseProduct = () => {
    // 商品一覧
    const [products, setProducts] = useState<Product[]>([]);

    // 商品かご
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // 処理中かどうか
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 確認モーダル表示状態
    const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);

    // 成功メッセージ
    const [successMessage, setSuccessMessage] = useState<string>("");

    // エラーメッセージ
    const [errorMessage, setErrorMessage] = useState<string>("");

    // DIコンテナから購入Serviceを取得
    const purchaseService = container.get<IPurchaseProductService>(
        TYPES.IPurchaseProductService
    );

    // 商品一覧を取得する
    const findAll = async () => {
        setIsLoading(true);

        try {
            const result = await purchaseService.findall();
            setProducts(result);
        } catch (error) {
            console.error("商品一覧取得中にエラーが発生しました", error);
            setErrorMessage("商品一覧の取得に失敗しました");
        } finally {
            setIsLoading(false);
        }
    };

    // 商品かごに追加する
    const addCart = (product: Product) => {
        setErrorMessage("");
        setSuccessMessage("");

        if (product.stock.stock <= 0) {
            setErrorMessage("在庫がないため商品かごに追加できません");
            return;
        }

        setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find(
                (item) => item.product.productUuid === product.productUuid
            );

            if (existingItem) {
                if (existingItem.quantity >= product.stock.stock) {
                    setErrorMessage("在庫数を超えて商品かごに追加できません");
                    return prevCartItems;
                }

                return prevCartItems.map((item) =>
                    item.product.productUuid === product.productUuid
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );
            }

            return [
                ...prevCartItems,
                {
                    product,
                    quantity: 1,
                },
            ];
        });
    };

    // 商品かごから削除する
    const removeCart = (productUuid: string) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter(
                (item) => item.product.productUuid !== productUuid
            )
        );
    };

    // 商品かごを空にする
    const clearCart = () => {
        setCartItems([]);
    };

    // 合計金額
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    // 確認モーダルを開く
    const openConfirm = () => {
        setErrorMessage("");

        if (cartItems.length === 0) {
            setErrorMessage("商品かごに商品がありません");
            return;
        }

        setIsConfirmOpen(true);
    };

    // 確認モーダルを閉じる
    const closeConfirm = () => {
        setIsConfirmOpen(false);
    };

    // 購入確定
    const confirmPurchase = async () => {
        setIsLoading(true);

        try {
            await purchaseService.purchase(
                cartItems.map((item) => ({
                    productUuid: item.product.productUuid,
                    quantity: item.quantity,
                }))
            );

            const result = await purchaseService.findall();
            setProducts(result);

            setCartItems([]);
            setIsConfirmOpen(false);

            setSuccessMessage("商品の購入が完了しました");
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } catch (error) {
            console.error("商品購入中にエラーが発生しました", error);
            setErrorMessage("在庫が不足している商品があります");
            setIsConfirmOpen(false);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        products,
        cartItems,
        totalPrice,
        isLoading,
        isConfirmOpen,
        successMessage,
        errorMessage,

        findAll,
        addCart,
        removeCart,
        clearCart,
        openConfirm,
        closeConfirm,
        confirmPurchase,
    };
};