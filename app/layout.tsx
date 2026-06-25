import BasicLayout from "./layout/basic";
import { Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 💡 読み込んだレイアウトにページの中身(children)を渡してそのまま返す
  return <BasicLayout>{children}</BasicLayout>;
}