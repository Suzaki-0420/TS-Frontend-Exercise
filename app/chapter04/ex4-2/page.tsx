"use client";
/**
 * 演習4-2 計算の種類をプルダウンで選択可能にする
 */
import ActionButton from "@/components/chapter04/ex4-1/button/ActionButton";
import NumberInput from "@/components/chapter04/ex4-1/input/NumberInput";
import NumberSelectInput from "@/components/chapter04/ex4-2/select/NumberSelectInput";
import { useState } from "react";

export default function CalculatorPage() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    // プルダウンのStateも数値の1で初期化
    const [operation, setOperation] = useState(1);

    const [result, setResult] = useState(0);

    // 選択肢のvalueもすべて数値(整数)で定義
    const operationOptions = [
        { value: 1, label: "加算 (+)" },
        { value: 2, label: "減算 (-)" },
        { value: 3, label: "乗算 (×)" },
        { value: 4, label: "除算 (÷)" },
        { value: 5, label: "剰余 (%)" },
    ];

    // 計算だけを行う専用の関数(opもnumber型として受け取る)
    const calculate = (n1: number, n2: number, op: number) => {
        switch (op) {
            case 1: return n1 + n2;
            case 2: return n1 - n2;
            case 3: return n1 * n2;
            case 4:
                if (n2 === 0) {
                    return 0;
                }
                return n1 / n2;
            case 5: return n1 % n2;
            default: return 0;
        }
    };

    const handleCalculate = () => {
        // 完全に数値のみで完結する美しい処理！
        const calcResult = calculate(num1, num2, operation);
        setResult(calcResult);
    };

    return (
        <main className="p-4 max-w-sm mx-auto mt-10 border rounded shadow-sm bg-white">
            <h1 className="text-xl font-bold mb-4 border-b pb-2">本格・計算機アプリ</h1>

            <NumberInput label="数値1" value={num1} onChange={(val) => setNum1(val)} />

            {/* 数値専用のプルダウンを配置 */}
            <NumberSelectInput
                label="計算の種類"
                options={operationOptions}
                value={operation}
                onChange={(val) => setOperation(val)}
            />

            <NumberInput label="数値2" value={num2} onChange={(val) => setNum2(val)} />

            <div className="mt-4 mb-6">
                <ActionButton label="計算する" onClick={handleCalculate} isRounded={true} />
            </div>

            <p className="text-gray-700 font-bold text-lg p-4 bg-gray-100 rounded text-center">
                計算結果：<span className="text-blue-600 ml-2 text-2xl">{result}</span>
            </p>
        </main>
    );
}