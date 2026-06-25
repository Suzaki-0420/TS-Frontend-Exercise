"use client";
/**
 * 演習 4-1 計算機を作成する(加算機能のみ)
 * Buttonコンポーネント
 */
type ActionButtonProps = {
    label: string;
    onClick: () => void;
    isRounded?: boolean; // 丸くするかどうか(?は省略可能という意味)
};

export default function ActionButton({ label, onClick, isRounded }: ActionButtonProps) {
    // isRoundedがtrueなら丸く、指定がなければ普通の角丸にする
    const shapeClass = isRounded ? "rounded-full" : "rounded-md";

    return (
        <button
            onClick={onClick}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 ${shapeClass}`}
        >
            {label}
        </button>
    );
}