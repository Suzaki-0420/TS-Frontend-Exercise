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

export default function Header() {
    return (
        <header className="border-b border-green-200 bg-green-100 p-4 shadow-sm">
            <div className="container mx-auto flex items-center justify-between">

                <h1 className="text-xl font-bold text-green-900">
                    <Link href="/">商品管理システム</Link>
                </h1>

                <NavigationMenu>
                    {/* 💡 項目が増えたため、スマホなどの狭い画面でも綺麗に折り返せるよう flex-wrap をこっそり付けておくと安全です */}
                    <NavigationMenuList className="flex flex-wrap justify-end">

                        {/* メニュー1：ログイン */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
                                <Link href="/api/auth/login">ログイン</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* メニュー2：ログアウト */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
                                <Link href="/api/auth/logout">ログアウト</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* メニュー3：ユーザー登録 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
                                <Link href="/api/users/register">ユーザー登録</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* メニュー4：商品キーワード検索 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
                                <Link href="/api/products/search">商品キーワード検索</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* メニュー5：商品登録 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
                                <Link href="/api/products/register">商品登録</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* メニュー6：商品変更 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
                                <Link href="/api/products/update">商品変更</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}