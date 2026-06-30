/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのヘッダー
 */
"use client";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useSession, signOut } from "next-auth/react";


export default function Header() {
    /**
  * 演習 7-4 ログインUIを作成し、ログイン可能にする
  * 追加
  */
    // 追加: セッションの認証状態(status)のみを取得
    const { status } = useSession();
    return (
        <header className="border-b border-rose-200 bg-rose-50 p-4 shadow-sm">
            <div className="container mx-auto flex items-center justify-between">

                <h1 className="text-xl font-bold text-rose-900">
                    <Link href="/">商品管理システム</Link>
                </h1>

                <NavigationMenu>
                    {/* 💡 項目が増えたため、スマホなどの狭い画面でも綺麗に折り返せるよう flex-wrap をこっそり付けておくと安全です */}
                    <NavigationMenuList className="flex flex-wrap justify-end">

                        {/* 追加：💡 ログイン中のみステータスを表示 */}
                        {status === "authenticated" && (
                            <span className="text-sm font-bold text-yellow-800 bg-yellow-200 px-3 py-1 rounded-full">
                                ログイン中
                            </span>
                        )}

                        {/* メニュー1：ログイン */}
                        {/* 追加：未ログイン時のみ「ログイン」を表示 */}
                        {status === "unauthenticated" && (
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-rose-900 bg-transparent hover:bg-rose-200`}>
                                    <Link href="/api/auth/login">ログイン</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}
                        {/* メニュー2：ログアウト */}
                        {/* ログイン中のみ[ログアウト]を表示 */}
                        {status === "authenticated" && (
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-rose-900 bg-transparent hover:bg-rose-200`}>
                                    {/* Linkからbuttonに変更して、signOut()関数を呼び出す */}
                                    <button onClick={() => signOut({ callbackUrl: "/" })}>ログアウト</button>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}

                        {/* メニュー3：ユーザー登録 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-rose-900 bg-transparent hover:bg-rose-200`}>
                                <Link href="/api/users/register">ユーザー登録</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* メニュー4：商品キーワード検索 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-rose-900 bg-transparent hover:bg-rose-200`}>
                                <Link href="/api/products/search">商品キーワード検索</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* メニュー5：商品登録 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-rose-900 bg-transparent hover:bg-rose-200`}>
                                <Link href="/api/products/register">商品登録</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* メニュー6：商品変更 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-rose-900 bg-transparent hover:bg-rose-200`}>
                                <Link href="/api/products/update">商品変更</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* メニュー7（追加練習）：商品購入 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-rose-900 bg-transparent hover:bg-rose-200`}>
                                <Link href="/api/products/purchase">商品購入</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}