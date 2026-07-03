import React from 'react';
import { 
  CheckCircle, 
  Phone, 
  Clock, 
  Home, 
  Mail, 
  Truck,
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';
import { HappyFamilyIllustration } from './Illustrations';

interface ThankYouPageProps {
  onBackToHome: () => void;
}

export default function ThankYouPage({ onBackToHome }: ThankYouPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="thank-you-page-root">
      
      {/* HEADER */}
      <header className="bg-white border-b border-slate-100 py-4 shadow-3xs" id="thank-header">
        <div className="max-w-xl mx-auto px-4 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="text-slate-500 hover:text-slate-800 flex items-center gap-1 text-xs font-bold transition-colors active:scale-95"
            id="back-to-home-btn"
          >
            <Home className="w-4 h-4" />
            トップに戻る
          </button>
          <Logo size="sm" />
          <div className="w-12"></div> {/* Spacer balance */}
        </div>
      </header>

      {/* THANK YOU CONTENT */}
      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-10" id="thank-main">
        <div className="text-center space-y-6" id="thank-top-block">
          
          {/* Happy Family Illustration celebrating successful resolution */}
          <div className="flex justify-center" id="thank-family-illustration">
            <HappyFamilyIllustration className="w-64 h-36 mx-auto drop-shadow-sm" />
          </div>

          <div className="space-y-2">
            <div className="inline-block border-b-2 border-brand-green pb-1 mb-2">
              <h1 className="text-xl md:text-2xl font-black text-brand-green">
                資料請求ありがとうございました
              </h1>
            </div>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
              受付完了メールをご登録のアドレスにお送りしました。<br />
              お届け先をメールにてご確認いただけます。
            </p>
          </div>

          {/* Delivery estimate box */}
          <div className="bg-slate-100/80 rounded-2xl p-5 border border-slate-200/50 flex items-center gap-4 text-left max-w-sm mx-auto" id="delivery-box">
            <div className="bg-brand-green text-white p-3 rounded-xl shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] bg-brand-green text-white font-extrabold px-2 py-0.5 rounded-sm block w-max mb-1">お届け目安</span>
              <p className="text-xs md:text-sm font-bold text-slate-800 leading-snug">
                通常、3営業日以内にお届けします。<br />
                到着までしばらくお待ちください。
              </p>
            </div>
          </div>

          {/* CRITICAL CONVERSATION TRIGGER CARD (As seen in the thank-you screen) */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/70 shadow-lg space-y-6 text-left" id="fear-resolver-card">
            <div className="text-center border-b border-slate-100 pb-4">
              <h2 className="text-sm md:text-base font-black text-slate-800">
                資料が届くのを待つ間に、<br className="sm:hidden" />
                <span className="bg-brand-yellow/30 px-1 py-0.5 rounded text-brand-green-dark">手続きの不安を解消しませんか？</span>
              </h2>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-slate-600 leading-relaxed">
              <p className="font-semibold text-slate-800">
                「これからどんな手続きが必要？」「少し不安なことがある…」
              </p>
              <p>
                そんな時は、ぜひ一度私たちにお電話ください。相続登記と不動産の専門スタッフがわかりやすくお答えします。
              </p>
              <p className="bg-emerald-50 text-emerald-900 border border-emerald-100 p-3.5 rounded-xl font-medium">
                お電話口で<span className="font-bold underline text-brand-green-dark">「さっき資料を請求したんです」</span>とだけ言っていただければ、あとは私たちがスムーズにご案内いたします！
              </p>
            </div>

            {/* CALL BLOCKS (Optimized responsive presentation matching desktop/mobile specifications) */}
            <div className="space-y-3" id="thank-call-cta-block">
              {/* Toll-Free display */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center space-y-1" id="toll-free-display">
                <span className="text-[10px] text-slate-400 font-extrabold block uppercase tracking-wider">Toll-Free Helpline</span>
                <div className="flex items-center justify-center gap-1 text-brand-green font-black text-2xl md:text-3xl" id="free-dial-container">
                  <span>📞</span>
                  <a href="tel:0120640723" className="hover:underline">0120-640-723</a>
                </div>
                <span className="text-[10px] text-slate-400 font-bold block">受付時間: 平日 10:00 〜 18:00</span>
              </div>

              {/* Direct call button for mobile */}
              <a
                href="tel:0120640723"
                className="w-full bg-brand-light-green hover:bg-brand-light-green-hover text-emerald-950 font-black text-sm md:text-base py-4 px-6 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 text-center"
                id="thank-phone-btn"
              >
                <Phone className="w-5 h-5 text-emerald-900" />
                <span>電話で相談する</span>
              </a>
            </div>
          </div>

          {/* Action button to return to home */}
          <div className="pt-4" id="thank-back-action">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm text-slate-500 hover:text-slate-800 font-black border border-slate-300 px-6 py-3 rounded-full hover:bg-slate-100/50 transition-all duration-300 active:scale-95"
              id="thank-home-btn"
            >
              <span>ホームページに戻る</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 text-xs py-8 border-t border-slate-900 text-center" id="thank-footer">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] md:text-[11px] text-slate-400" id="thank-footer-links">
            <span className="cursor-pointer hover:text-white" onClick={onBackToHome}>運営会社</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white" onClick={onBackToHome}>特定商取引法に関する表記</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white" onClick={onBackToHome}>プライバシーポリシー</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white" onClick={onBackToHome}>情報セキュリティ方針</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white" onClick={onBackToHome}>お問合せ</span>
          </div>
          <p className="text-[10px] text-slate-600">
            &copy; {new Date().getFullYear()} AGE technologies, inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
