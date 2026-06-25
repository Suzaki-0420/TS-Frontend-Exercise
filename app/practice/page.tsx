"use client";
/**
 * 練習用 リストの内容を実装する
 */
import TransitionButton from "@/components/practice/TransitionButton";
import ActionButton from "@/components/chapter04/ex4-1/button/ActionButton";
import { useRouter } from "next/navigation";

export default function TransitionPage() {
    const router = useRouter();
    return (
        <div className="flex gap-4">
            <ActionButton
                label="リスト4-5"
                onClick={() => router.push("/practice/practice4-5")}
                isRounded={true}
            />
            <ActionButton
                label="リスト4-6"
                onClick={() => router.push("/practice/practice4-6")}
            />
            <ActionButton
                label="リスト4-7"
                onClick={() => router.push("/practice/practice4-7")}
            />
            <ActionButton
                label="リスト4-8"
                onClick={() => router.push("/practice/practice4-8")}
            />
            <ActionButton
                label="フォーム練習"
                onClick={() => router.push("/practice/formpractice")}
            />
        </div>
    );
}