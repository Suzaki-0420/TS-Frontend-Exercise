/**
 * 演習 8-2 ユーザー登録用のモデルとインターフェイスを作成する
 * ユーザーインターフェイス
 */
export interface User {
    username: string; // ユーザー名
    email: string; // メールアドレス
    password: string; // パスワード
}