"use client";
/**
 * 演習4-2 計算の種類をプルダウンで選択可能にする
 * 選択専用コンポーネント
 */
// 選択肢データのルール（🌟 valueをnumber型にする）
type NumberOption = {
    value: number;
    label: string;
};

// コンポーネントが受け取るPropsのルール
type NumberSelectInputProps = {
    label: string;
    options: NumberOption[];
    value: number;                     // 選択されている値を数値として受け取る
    onChange: (value: number) => void; // 変更された値を数値として親に返す
};

export default function NumberSelectInput({ label, options, value, onChange }: NumberSelectInputProps) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <select
                value={value}
                // HTMLからは文字列で渡ってくるので、Number()で数値に変換して親に返す！
                onChange={(e) => onChange(Number(e.target.value))}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white">
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}