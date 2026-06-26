import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MenuPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">トップメニュー</h1>
        <p className="text-gray-500">操作したいメニューを選択してください</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* メニュー1：ログイン */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>ログイン</CardTitle>
            <CardDescription>システムにログインします</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/api/auth/login">ログイン画面へ</Link>
            </Button>
          </CardContent>
        </Card>

        {/* メニュー2：ログアウト */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>ログアウト</CardTitle>
            <CardDescription>システムから安全にログアウトします</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/api/auth/logout">ログアウトする</Link>
            </Button>
          </CardContent>
        </Card>

        {/* メニュー3：ユーザー登録 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>ユーザー登録</CardTitle>
            <CardDescription>新しいユーザーをシステムに登録します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/api/users/register">ユーザー登録画面へ</Link>
            </Button>
          </CardContent>
        </Card>


        {/* メニュー4：商品キーワード検索 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>商品キーワード検索</CardTitle>
            <CardDescription>登録されている商品をキーワードで検索します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/api/products/search">検索画面へ</Link>
            </Button>
          </CardContent>
        </Card>

        {/* メニュー5：商品登録 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>商品の登録</CardTitle>
            <CardDescription>新しい商品をシステムに登録します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/api/products/register">登録画面へ進む</Link>
            </Button>
          </CardContent>
        </Card>

        {/* メニュー5：商品変更 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>商品の変更</CardTitle>
            <CardDescription>登録済みの商品情報を変更・更新します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/api/products/update">変更画面へ進む</Link>
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}