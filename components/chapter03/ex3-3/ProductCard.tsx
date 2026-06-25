/**
 * 演習 3-3 データ受け渡しできるコンポーネントを作成する
 * 商品カードコンポーネント
 */
// 受け取るデータのルール（商品名、価格）を決める
type ProductCardProps = {
    title: string;
    price: number;
};

// 引数でデータを受け取る
export default function ProductCard({ title, price }: ProductCardProps) {
    return (
        <div className="border border-gray-300 p-4 rounded-md shadow-sm mb-4 bg-white flex justify-between items-center">
            <h2 className="text-lg font-bold text-blue-700">{title}</h2>
            <p className="text-xl font-semibold text-gray-800">¥{price.toLocaleString()}</p>
        </div>
    );
}