export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-emerald-950 text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          باشگاه <span className="text-emerald-300">فاتح خیبر</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          قدرت، سلامتی و نظم را در کنار بهترین مربیان تجربه کنید.
          محیطی حرفه‌ای برای تمام سنین و تمام سطوح.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-emerald-400 text-black px-7 py-3 rounded-xl font-bold hover:scale-105 transition">
            ثبت نام
          </button>

          <button className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-black transition">
            ارتباط با ما
          </button>
        </div>
      </section>

      {/* Sports */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          رشته‌های ورزشی
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 hover:bg-purple-700/30 transition">
            <div className="text-5xl mb-4">🏋️</div>
            <h3 className="text-2xl font-bold mb-3">بدنسازی</h3>
            <p className="text-gray-300">
              برنامه تمرینی تخصصی، افزایش حجم، کاهش وزن و تناسب اندام.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 hover:bg-blue-700/30 transition">
            <div className="text-5xl mb-4">🥋</div>
            <h3 className="text-2xl font-bold mb-3">نیو کونگ فو</h3>
            <p className="text-gray-300">
              آموزش اصولی هنرهای رزمی همراه با آمادگی جسمانی و دفاع شخصی.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 hover:bg-emerald-700/30 transition">
            <div className="text-5xl mb-4">💪</div>
            <h3 className="text-2xl font-bold mb-3">کراس فیت</h3>
            <p className="text-gray-300">
              تمرینات قدرتی و استقامتی برای افزایش عملکرد بدنی.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 hover:bg-purple-700/30 transition">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold mb-3">چربی‌سوزی</h3>
            <p className="text-gray-300">
              برنامه‌های اختصاصی کاهش وزن و تناسب اندام.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 hover:bg-blue-700/30 transition">
            <div className="text-5xl mb-4">🏃</div>
            <h3 className="text-2xl font-bold mb-3">تمرینات فانکشنال</h3>
            <p className="text-gray-300">
              افزایش قدرت، تعادل، انعطاف و عملکرد روزانه.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 hover:bg-emerald-700/30 transition">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold mb-3">فیتنس بانوان</h3>
            <p className="text-gray-300">
              کلاس‌های تخصصی همراه با برنامه غذایی و تمرینی.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-purple-900/40 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-emerald-300">+500</h3>
            <p className="mt-2 text-gray-300">عضو فعال</p>
          </div>

          <div className="bg-blue-900/40 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-emerald-300">10+</h3>
            <p className="mt-2 text-gray-300">مربی حرفه‌ای</p>
          </div>

          <div className="bg-emerald-900/40 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-emerald-300">7</h3>
            <p className="mt-2 text-gray-300">روز هفته</p>
          </div>

          <div className="bg-purple-900/40 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-emerald-300">100%</h3>
            <p className="mt-2 text-gray-300">انگیزه و پیشرفت</p>
          </div>

        </div>

      </section>

      {/* Trainers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          مربیان حرفه‌ای
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 rounded-2xl p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-purple-600 mx-auto mb-4"></div>
            <h3 className="text-2xl font-bold">مربی بدنسازی</h3>
            <p className="text-gray-300 mt-2">
              برنامه تخصصی افزایش حجم و کاهش وزن.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-blue-600 mx-auto mb-4"></div>
            <h3 className="text-2xl font-bold">استاد نیو کونگ فو</h3>
            <p className="text-gray-300 mt-2">
              مربی رسمی هنرهای رزمی.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-emerald-600 mx-auto mb-4"></div>
            <h3 className="text-2xl font-bold">مربی کراس فیت</h3>
            <p className="text-gray-300 mt-2">
              تمرینات قدرتی و استقامتی حرفه‌ای.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-black/30">

        <h2 className="text-5xl font-bold mb-5">
          آماده شروع هستی؟
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          همین امروز به خانواده بزرگ باشگاه فاتح خیبر بپیوند.
        </p>

        <button className="bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-400 px-10 py-4 rounded-xl text-xl font-bold hover:scale-105 transition">
          ثبت نام آنلاین
        </button>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        © 2026 باشگاه فاتح خیبر | تمامی حقوق محفوظ است.
      </footer>

    </main>
  );
}