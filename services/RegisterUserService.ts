import { injectable, inject } from "inversify";
import { IRegisterUserService } from "@/interfaces/IRegisterUserService";
import { User } from "@/models/User";
import type { IUserRepository } from "@/interfaces/IUserRepository";
import { TYPES } from "@/di/types";
/**
 * 演習 8-4 Serviceの実装とDIコンテナへの登録
 * ユーザー登録サービス実装クラス
 */
@injectable()
export class RegisterUserService implements IRegisterUserService {
    private userRepository: IUserRepository;
    /**
     * コンストラクタ
     * @param userRepository UserRepository のインスタンスを注入する
     */
    constructor(
        @inject(TYPES.IUserRepository) userRepository: IUserRepository
    ) {
        this.userRepository = userRepository;
    }

    /**
     * ユーザー名またはメールアドレスが既に存在するかチェックする
     * @param username ユーザー名
     * @param email メールアドレス
     */
    async checkExists(username: string, email: string): Promise<void> {
        // リポジトリの処理をそのまま呼び出す
        console.log("★checkExists開始", username, email);
        await this.userRepository.checkExists(username, email);
    }

    /**
     * ユーザーを登録する
     * @param user 登録ユーザー
     */
    async register(user: User): Promise<void> {
        // リポジトリの処理をそのまま呼び出す
        await this.userRepository.register(user);
    }
}