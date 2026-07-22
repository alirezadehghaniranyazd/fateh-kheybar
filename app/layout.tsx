import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "باشگاه ورزشی فاتح خیبر",
  description:
    "وب‌سایت رسمی باشگاه ورزشی فاتح خیبر | نیو کونگ‌فو، بدنسازی، دفاع شخصی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} font-sans bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}