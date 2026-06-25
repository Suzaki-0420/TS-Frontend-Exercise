"use client";
/**
 * 演習 4-1 計算機を作成する(加算機能のみ)
 * 数値入力専用入力コンポーネント
 */
// 受け取るデータのルール(型)
type NumberInputProps = {
    label: string;
    value: number;                     // 文字列ではなく数値として受け取る
    onChange: (value: number) => void; // 数値を親に返す関数
};

export default function NumberInput({ label, value, onChange }: NumberInputProps) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                type="number" // HTMLの機能で数値入力専用(スマホ等で数字キーボードが出る）にする
                value={value}
                // 入力された値(文字列)を、Number()関数で数値に変換してから親に渡す
                onChange={(e) => onChange(Number(e.target.value))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
}