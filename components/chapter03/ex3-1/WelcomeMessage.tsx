/**
 * 演習 3-1 WelcomeMessageコンポーネントを作成する
 */
export default function WelcomeMessage() {
    return (
        <div>
            <h1>ようこそ！</h1>
            <p>
                初めての
                <a href="https://ja.react.dev/" style={{ color: "blue" }} target="blank">React</a>コンポーネントです。
            </p>
        </div>
    );
}