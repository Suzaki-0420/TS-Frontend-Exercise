/**
 * 演習 3-3 データ受け渡しできるコンポーネントを作成する
 * 商品一覧ページ
 */
import ProductCard from "@/components/chapter03/ex3-3/ProductCard";

export default function ProductListPage() {
    return (
        <main className="max-w-md mx-auto mt-8 p-4 bg-gray-50 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-6 text-center border-b pb-2">
                今週のおすすめ商品
            </h1>

            {/* 同じ部品に、別々の商品データを渡して使い回す */}
            <ProductCard title="高性能ノートPC" price={145000} />
            <ProductCard title="ワイヤレスイヤホン" price={12800} />
            <ProductCard title="メカニカルキーボード" price={8500} />
        </main>
    );
}