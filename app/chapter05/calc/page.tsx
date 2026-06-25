"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CalcPage() {
    // 💡入力中は文字列として扱うため初期値を空文字("")にする
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<number>(0);

    // 計算を実行する関数
    const handleCalculate = () => {
        // 💡計算するときにNumber()で数値に変換して足し算する
        setResult(Number(num1) + Number(num2));
    };

    return (
        <div className="p-8 max-w-sm mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center">スタイリッシュ計算機</h2>

            {/* 入力エリア 1 */}
            <div className="space-y-2">
                <Label htmlFor="num1">値-1</Label>
                <Input
                    id="num1"
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)} // そのまま文字列としてセット
                    placeholder="数字を入力..."
                />
            </div>

            <div className="text-center font-bold text-xl">＋</div>

            {/* 入力エリア 2 */}
            <div className="space-y-2">
                <Label htmlFor="num2">値-2</Label>
                <Input
                    id="num2"
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)} // そのまま文字列としてセット
                    placeholder="数字を入力..."
                />
            </div>

            {/* 計算ボタン */}
            <Button onClick={handleCalculate} className="w-full">
                計算する
            </Button>

            {/* 結果表示エリア */}
            <div className="p-4 bg-muted rounded-lg text-center">
                <Label>計算結果</Label>
                <p className="text-3xl font-bold text-primary mt-2">{result}</p>
            </div>
        </div>
    );
}