"use client";

// 選択肢1つ分のデータのルール（型）
type RadioOption = {
    value: string;
    label: string;
};

// コンポーネントが受け取るPropsのルール
type RadioGroupInputProps = {
    label: string;
    name: string;                      // HTMLとしてラジオボタンをグループ化するための名前
    options: RadioOption[];            // 選択肢の配列データ
    value: string;                     // 現在選択されている値
    onChange: (value: string) => void; // 値が変更された時に実行する関数
};

export default function RadioGroupInput({ label, name, options, value, onChange }: RadioGroupInputProps) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            {/* 選択肢を横並び（flex）で配置 */}
            <div className="flex gap-4">
                {options.map((opt) => (
                    <label key={opt.value} className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name={name}          // 全ての選択肢に同じnameを指定してグループ化
                            value={opt.value}
                            // 現在のState(value)と、このラジオボタンのvalueが同じならON(true)にする
                            checked={value === opt.value}
                            onChange={(e) => onChange(e.target.value)}
                            className="mr-2 cursor-pointer"
                        />
                        <span className="text-gray-700">{opt.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}