"use client";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useUpdateProduct } from "@/components/hooks/useUpdateProduct";

/**
 * 演習 6-3 Reactコンポーネントを実装してUIを確認する
 * ユーザーからの入力を受け付け、カスタムフック経由で検索処理を呼び出す
 */
export const ProductUpdate = () => {

    const {
        products,
        selectedProduct,
        editName,
        editPrice,
        isLoading,
        isConfirmOpen,
        successMessage,
        setEditName,
        setEditPrice,
        findAll,
        selectProduct,
        openConfirm,
        closeConfirm,
        confirmUpdate,
    } = useUpdateProduct();

    useEffect(() => {
        findAll();
    }, []);

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center border-b pb-4">
                変更可能な商品一覧
            </h2>

            {/*商品の一覧をテーブルで表示する*/}
            <div>
                <div className="text-rose-900 font-semibold text-center mb-4">
                    {successMessage}
                </div>
                <Table>
                    {/*テーブルの一行目（カラム名表示）*/}
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead className="font-semibold text-foreground">商品名</TableHead>
                            <TableHead className="font-semibold text-foreground ">価格</TableHead>
                            <TableHead className="font-semibold text-foreground">カテゴリ</TableHead>
                            <TableHead className="font-semibold text-foreground">在庫</TableHead>
                            <TableHead className="font-semibold text-foreground">変更</TableHead>
                        </TableRow>
                    </TableHeader>

                    {/*テーブルの中身*/}
                    <TableBody>
                        {products.map((product) =>
                            <TableRow key={product.productUuid}>
                                <TableCell>
                                    {product.name}
                                </TableCell>
                                <TableCell className="text-right">
                                    {product.price.toLocaleString()}円
                                </TableCell>
                                <TableCell >
                                    {product.category.name}
                                </TableCell>
                                <TableCell >
                                    {product.stock.stock}
                                </TableCell>
                                <TableCell >
                                    <Button
                                        className="w-full bg-rose-900"
                                        onClick={() => {
                                            selectProduct(product);
                                            setEditName(product.name);
                                            setEditPrice(product.price.toString());
                                        }}
                                    >
                                        変更する
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/*何か商品が選択されたときだけ表示する*/}
            {selectedProduct && (
                <div className="mt-8 p-3 border rounded-lg bg-white space-y-4 text-center">
                    <h3 className="text-xl font-bold">
                        商品情報を変更
                    </h3>

                    <div>
                        <label className="bg-white block mb-1 font-semibold">変更後の商品名に修正してください</label>
                        <Input
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="bg-white block mb-1 font-semibold">変更後の価格に修正してください</label>
                        <Input
                            value={editPrice}
                            onChange={(e) => setEditPrice(e.target.value)}
                        />
                    </div>

                    <Button className="w-full bg-rose-900" onClick={openConfirm} disabled={isLoading}>
                        修正内容を保存する
                    </Button>
                </div>
            )}
            <AlertDialog open={isConfirmOpen} onOpenChange={closeConfirm}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            商品情報を変更しますか？
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-left">
                            変更後の商品名：{editName}
                            <br />
                            変更後の価格　：{Number(editPrice).toLocaleString()}円
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={closeConfirm}>
                            キャンセル
                        </AlertDialogCancel>

                        <AlertDialogAction onClick={confirmUpdate} className="bg-rose-900">
                            変更する
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}