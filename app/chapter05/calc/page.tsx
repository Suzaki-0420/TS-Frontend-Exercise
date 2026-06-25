"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function CalcPage() {
    // 💡入力中は文字列として扱うため初期値を空文字("")にする
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [operator, setOperator] = useState<string>("1");
    const [result, setResult] = useState<number>(0);

    // 計算を実行する関数
    const handleCalculate = () => {
        const n1 = Number(num1);
        const n2 = Number(num2);

        switch (operator) {
            case "1": // 加算
                setResult(n1 + n2);
                break;
            case "2": // 減算
                setResult(n1 - n2);
                break;
            case "3": // 乗算
                setResult(n1 * n2);
                break;
            case "4": // 除算
                setResult(n1 / n2);
                break;
            case "5": // 剰余
                if (n2 === 0) {
                    setResult(0); // 0で割る場合は結果を0にする（エラー回避）
                } else {
                    setResult(n1 % n2);
                }
                break;
            default:
                setResult(0);
        }
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

            {/* プルダウン（Selectコンポーネント） */}
            <div className="flex justify-center my-4">
                <Select value={operator} onValueChange={setOperator}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="計算方法" />
                    </SelectTrigger>
                    <SelectContent>
                        {/* 💡 ポイント: valueの値を "1" 〜 "5" の数字（文字列型）に変更 */}
                        <SelectItem value="1">+ (加算)</SelectItem>
                        <SelectItem value="2">- (減算)</SelectItem>
                        <SelectItem value="3">× (乗算)</SelectItem>
                        <SelectItem value="4">÷ (除算)</SelectItem>
                        <SelectItem value="5">% (剰余)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

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
                <p className="text-3xl font-bold text-primary mt-2"><span style={{ color: "red" }}>{result}</span></p>
            </div>
        </div>
    );
}
