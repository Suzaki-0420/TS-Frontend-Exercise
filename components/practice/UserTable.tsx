"use client";

// 1人分のユーザーデータ
export type User = {
    id: number;
    name: string;
    department: string;
    role: string;
};

// コンポーネントが受け取るPropsのルール(配列データを受け取る)
type UserTableProps = {
    users: User[];
};

export default function UserTable({ users }: UserTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden text-sm">
                {/* 見出し部分（固定で1回だけ表示） */}
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="py-3 px-4 text-left border-b font-bold">ID</th>
                        <th className="py-3 px-4 text-left border-b font-bold">名前</th>
                        <th className="py-3 px-4 text-left border-b font-bold">部署</th>
                        <th className="py-3 px-4 text-left border-b font-bold">権限</th>
                    </tr>
                </thead>

                {/* データ部分（配列の件数分だけループして行を生成） */}
                <tbody>
                    {users.map((user) => (
                        /* ループで生成する行(tr)に対してkeyを設定する */
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-gray-500">{user.id}</td>
                            <td className="py-3 px-4 font-bold text-gray-800">{user.name}</td>
                            <td className="py-3 px-4 text-gray-600">{user.department}</td>
                            <td className="py-3 px-4">
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    {user.role}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}