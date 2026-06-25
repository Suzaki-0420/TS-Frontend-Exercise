"use client";

// 選択肢1つ分のデータのルール(型)
type CheckboxOption = {
    value: string;
    label: string;
};

// コンポーネントが受け取るPropsのルール
type CheckboxGroupInputProps = {
    label: string;
    options: CheckboxOption[];
    values: string[];                    // 複数選択のため、文字列の配列で受け取る
    onChange: (values: string[]) => void; // 変更された配列を親に返す
};

export default function CheckboxGroupInput({ label, options, values, onChange }: CheckboxGroupInputProps) {

    // チェックボックスがクリックされた時の専用処理
    const handleCheckboxChange = (optionValue: string, isChecked: boolean) => {
        if (isChecked) {
            // ONにされたら、今の配列(values)の中身を展開し、最後に新しい値を追加した新配列を作る
            onChange([...values, optionValue]);
        } else {
            // OFFにされたら、配列の中からその値だけを除外(filter)した新配列を作る
            onChange(values.filter((v) => v !== optionValue));
        }
    };

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            {/* 選択肢を縦並び(flex-col)で配置し、少し隙間(gap-2)を空ける */}
            <div className="flex flex-gal gap-2">
                {options.map((opt) => (
                    <label key={opt.value} className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value={opt.value}
                            // 現在の配列(values)の中に、自分の値が含まれているか(includes)でON/OFFを判定
                            checked={values.includes(opt.value)}
                            onChange={(e) => handleCheckboxChange(opt.value, e.target.checked)}
                            className="mr-2 cursor-pointer"
                        />
                        <span className="text-gray-700">{opt.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}