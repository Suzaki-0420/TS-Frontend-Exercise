import { User } from "@/models/User";
/**
 * 演習 8-2 ユーザー登録用のモデルとインターフェイスを作成する
 * ユーザー登録サービスインターフェイス
 */
export interface IRegisterUserService {
    /**
     * ユーザー名またはメールアドレスが既に存在するかチェックする
     * @param username ユーザー名
     * @param email メールアドレス
     */
    checkExists(username: string, email: string): Promise<void>;
    /**
     * ユーザーを登録する
     * @param user 登録ユーザー
     */
    register(user: User): Promise<void>;
}