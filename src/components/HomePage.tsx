import React, { useState } from 'react';
import { 
  Phone, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  CheckCircle, 
  Calendar, 
  AlertTriangle, 
  Trash2, 
  Home, 
  DollarSign, 
  MapPin, 
  HelpCircle,
  FileCheck,
  Send,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { FAQItem } from '../types';
import { 
  MascotLogo, 
  ThinkingCouple, 
  TransferIcon, 
  YenIcon, 
  HouseInHandsIcon, 
  HouseClockIllustration, 
  WomanThinkingIllustration, 
  StressedDeskIllustration, 
  AdvisorIllustration, 
  ConsultationIllustration, 
  HappyFamilyIllustration 
} from './Illustrations';

interface HomePageProps {
  onNavigate: (page: 'home' | 'form') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  // States for accordions and overlays
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  // FAQ Items from design mock
  const faqItems: FAQItem[] = [
    {
      question: 'サービス料金は、本当に一律？',
      answer: 'はい、基本のフルサポートプランは一律8.5万円（税込93,500円）で、戸籍の収集から登記申請まで全て含まれております。相続登記の対象となる土地や建物の数が極端に多い場合や、特殊な持分変更が発生する場合のみ、事前のお見積もりで追加費用をお伝えいたします。勝手に追加請求が発生することはございませんのでご安心ください。'
    },
    {
      question: 'サービス料金以外に、かかる費用はある？',
      answer: '登記時に法務局へ直接納める「登録免許税」（固定資産評価額の0.4%）および、役所で戸籍謄本や登記事項証明書を取得する際の実費（1通数百円程度）が必要となります。これらはどの専門家に依頼しても必ず発生する実費で、事前にお見積りとしてクリアにご提示します。'
    },
    {
      question: '料金はいつ支払えばいい？',
      answer: 'お申し込み時に費用は発生しません。必要書類が揃い、登記申請を行う準備が整った段階、あるいは登記完了証明書を納品させていただくタイミング（プランによって決定）でのお支払いとなります。事前の分割相談なども可能です。'
    },
    {
      question: '家族が離れて暮らしているけど申し込んでもいい？',
      answer: 'はい、もちろん大歓迎です。ご実家と相続人様がそれぞれ遠方に住んでいらっしゃる場合でも、お電話・郵送・オンラインシステム（LINEや電子サイン等）を活用し、全国どこからでも書類回収や手続きの代理をスムーズに行うことが可能です。'
    },
    {
      question: '名義人がかなり前に亡くなったけど、今から手続きできますか？',
      answer: 'はい、可能です。おじい様やおばあ様の名義のまま数十年放置されているようなケースでも、戸籍を過去数代に遡って相続人を特定し、名義変更の手続きを行います。戸籍収集の代行もプランに含まれているため、お客様自身で何枚も戸籍を集める必要はございません。'
    },
    {
      question: '山林や畑がたくさんあるけど、料金は変わらない？',
      answer: 'はい、実家の建物や土地に加えて、複数の山林や畑が同じエリアにあれば一律プラン内でカバー可能です。不動産の筆数（個数）が10筆を超えるような大規模なケースは、別途お見積りをさせていただきます。お気軽にご相談ください。'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-brand-green selection:text-white" id="home-page-root">
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-xs border-b border-slate-100" id="main-header">
        <div className="max-w-4xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="header-logo-click">
            <Logo size="md" />
          </div>
          <button
            onClick={() => onNavigate('form')}
            className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-4 py-2 rounded-full text-xs md:text-sm shadow-md transition-all duration-300 flex items-center gap-1 active:scale-95"
            id="header-cta-btn"
          >
            <FileText className="w-3.5 h-3.5" />
            資料請求
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="bg-brand-green text-white relative overflow-hidden" id="hero-section">
        {/* Background ambient elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#b0f566]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 pt-10 pb-16 text-center relative z-10">
          <div className="inline-block bg-white text-brand-green text-[11px] md:text-xs font-black px-4 py-1 rounded-full mb-6 tracking-wider shadow-sm animate-pulse">
            親の家を相続した方へ
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
            相続した<span className="text-brand-yellow">実家</span><br className="md:hidden" />どうする？
          </h1>

          {/* Brand Mascot Representation */}
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto my-8 bg-white rounded-3xl p-4 flex items-center justify-center border border-slate-100/10 shadow-lg hover:rotate-6 transition-transform duration-300" id="hero-house-graphic">
            <MascotLogo className="w-16 h-16 md:w-20 md:h-20" />
          </div>

          <p className="text-sm md:text-lg text-emerald-50 leading-relaxed max-w-xl mx-auto mb-8 font-medium">
            親から受け継いだ実家。手をつけられないまま、時間だけが過ぎていっていませんか？
          </p>

          <div className="flex flex-col items-center gap-2 text-emerald-100" id="scroll-indicator">
            <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
            <div className="w-0.5 h-8 bg-emerald-300 animate-bounce rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="bg-gradient-to-b from-brand-green to-emerald-800 text-white pb-16" id="intro-cta-section">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white text-slate-900 rounded-3xl p-6 md:p-8 shadow-xl text-center border border-slate-100" id="intro-card">
            <div className="flex justify-center mb-4">
              <ThinkingCouple className="w-44 h-28" />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-brand-green mb-4 leading-normal">
              実家のこと、<br />まずは話してみませんか？
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-8">
              何から始めればいいか、一緒に整理します。<br />
              決めるのは、そのあとで大丈夫。<br />
              <span className="font-bold text-brand-green underline decoration-wavy">相談も資料請求も無料です。</span>
            </p>

            <div className="flex flex-col gap-4" id="hero-button-group">
              {/* Main yellow button */}
              <button
                onClick={() => onNavigate('form')}
                className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-slate-950 font-black text-sm md:text-base py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 active:scale-95 group"
                id="hero-yellow-cta"
              >
                <FileText className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>無料で資料を請求する</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              {/* Light green phone button */}
              <button
                onClick={() => setShowPhoneModal(true)}
                className="w-full bg-brand-light-green hover:bg-brand-light-green-hover text-emerald-950 font-black text-sm md:text-base py-4 px-6 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                id="hero-phone-cta"
              >
                <Phone className="w-5 h-5 text-emerald-900" />
                <span>電話で相談する</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 PAIN POINTS SECTION WITH IMAGES */}
      <section className="py-16 bg-slate-100/50 border-y border-slate-200/40" id="pain-points-section">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-brand-green text-xs font-black bg-white shadow-3xs px-4 py-1 rounded-full mb-3 inline-block">相続した実家のお悩み</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-2">
              こんなお悩み、ありませんか？
            </h2>
            <div className="w-12 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-3" id="pain-points-grid">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-xs text-center flex flex-col justify-between" id="pain-card-1">
              <div>
                <HouseClockIllustration className="w-32 h-32 mx-auto mb-4" />
                <h3 className="font-black text-sm md:text-base text-slate-900 mb-2 leading-snug">
                  親の家が空き家のまま、<br />もう何年も経っている
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mt-2 pt-2 border-t border-slate-100">
                誰も住んでいないのに、毎年の固定資産税や庭の管理費だけがかかり続けている状態。
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-xs text-center flex flex-col justify-between" id="pain-card-2">
              <div>
                <WomanThinkingIllustration className="w-32 h-32 mx-auto mb-4" />
                <h3 className="font-black text-sm md:text-base text-slate-900 mb-2 leading-snug">
                  使う予定はないけれど、<br />売るか残すか迷っている
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mt-2 pt-2 border-t border-slate-100">
                思い出の実家を手手放す寂しさや、家族間での意見の不一致、最適な活用方法に悩む日々。
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-xs text-center flex flex-col justify-between" id="pain-card-3">
              <div>
                <StressedDeskIllustration className="w-32 h-32 mx-auto mb-4" />
                <h3 className="font-black text-sm md:text-base text-slate-900 mb-2 leading-snug">
                  名義変更などの手続きが<br />難しそうで、つい後回し
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mt-2 pt-2 border-t border-slate-100">
                必要書類の多さや複雑な法務局での手続きに直面し、義務化期限が迫る中ストレスを抱える。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT IS MEIHEN */}
      <section className="py-16 bg-white" id="what-is-meihen-section">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Logo size="md" className="justify-center mb-3" />
            <span className="text-2xl md:text-3xl font-black block mt-2 text-slate-950">とは？</span>
            <div className="w-16 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
            <p className="text-sm md:text-base font-bold text-brand-green mt-6">
              相続した実家の<span className="bg-brand-yellow/30 px-1 py-0.5 rounded">名義変更</span>に特化したサービスです！
            </p>
          </div>

          <div className="grid gap-6" id="features-grid">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-xs" id="feature-card-1">
              <div className="w-16 h-16 rounded-full bg-brand-green/5 flex items-center justify-center shrink-0 self-start md:self-center">
                <TransferIcon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="font-black text-base md:text-lg text-slate-900 mb-1 flex items-center gap-2">
                  名義変更は手間なし！
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  役所への戸籍や不動産情報の収集代行、法務局への提出書類作成・代行など、複雑で面倒な手続きをすべてワンストップでお任せいただけます。
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-xs" id="feature-card-2">
              <div className="w-16 h-16 rounded-full bg-brand-green/5 flex items-center justify-center shrink-0 self-start md:self-center">
                <YenIcon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="font-black text-base md:text-lg text-slate-900 mb-1">
                  安心の一律料金。
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  一般的に司法書士に依頼すると20万円〜30万円が相場となる名義変更手続きを、無駄を徹底排除した仕組みにより、最安1.5万円〜（一律8.5万円プラン等）の安心価格でご提供。
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-xs" id="feature-card-3">
              <div className="w-16 h-16 rounded-full bg-brand-green/5 flex items-center justify-center shrink-0 self-start md:self-center">
                <HouseInHandsIcon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="font-black text-base md:text-lg text-slate-900 mb-1">
                  実家のその後もご相談ください！
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  「残す」「売る」「手放す」など、相続の専門知識を活かして最適な選択肢を広げ、ご実家がご家族の重荷にならないよう総合的にアドバイス・支援します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE CRITICAL REASON SECTION */}
      <section className="py-16 bg-slate-950 text-white" id="regulatory-warning-section">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-brand-light-green font-extrabold text-sm tracking-wider uppercase mb-2">その前に、避けて通れない手続き</p>
          <div className="inline-block bg-brand-light-green text-slate-950 font-black px-6 py-2 rounded-lg text-xl md:text-2xl mb-6">
            「不動産の名義変更」
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
            は、お済みですか？
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 max-w-xl mx-auto mb-10 text-left flex flex-col md:flex-row gap-6 items-center" id="unavoidable-notice-box">
            <AdvisorIllustration className="w-20 h-24 shrink-0" />
            <p className="text-sm leading-relaxed text-slate-300">
              「売る・残す・手放す」どの選択肢を選ぶにも、<span className="text-brand-light-green font-bold">実家の名義が亡くなったご両親のまま</span>では、不動産の処分や活用、売却手続きを進めることは法律上できません。
            </p>
          </div>

          <div className="border-t border-white/10 pt-10" id="deadline-highlight">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold bg-rose-600/20 text-rose-400 border border-rose-500/30 px-4 py-1.5 rounded-full mb-4">
              <Calendar className="w-4 h-4" />
              <span>相続登記は2024年4月から義務化されました</span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold mb-4 text-rose-500">
              名義変更には期限があります！
            </h3>
            <div className="bg-rose-600 inline-block text-white font-black text-xl md:text-3xl px-8 py-3 rounded-full mb-6 shadow-md shadow-rose-900/30">
              2027年3月末まで
            </div>

            <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
              過去に相続した未登記の不動産も、<span className="text-white font-bold">2027年3月末</span>が義務化の経過措置期限となります。正当な理由なく放置すると、<span className="text-rose-400 font-bold underline">10万円以下の過料（罰則）</span>の対象となるおそれがあります。
            </p>

            <div className="grid gap-4 md:grid-cols-3 text-left mt-8" id="consequences-grid">
              <div className="bg-white/5 border border-white/5 rounded-xl p-5" id="consequence-1">
                <div className="text-brand-light-green font-black text-xs mb-2">① 税金は毎年かかる</div>
                <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                  誰も住んでいなくても固定資産税は発生し続けます。名義変更をしないまま放置していても税金は自動的に請求されます。
                </p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-5" id="consequence-2">
                <div className="text-brand-light-green font-black text-xs mb-2">② 売値は下がり続ける</div>
                <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                  管理されない建物は急速に老朽化が進みます。傷むほど買い手がつきにくくなり、不動産の価値は暴落してしまいます。
                </p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-5" id="consequence-3">
                <div className="text-brand-light-green font-black text-xs mb-2">③ 「特定空家」の重い負担</div>
                <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                  自治体に危険な「特定空家」と見なされると、土地にかかる固定資産税の優遇措置が解除され、税金が最大6倍になることがあります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THREE OPTIONS FOR THE HOME */}
      <section className="py-16 bg-brand-green/5" id="three-choices-section">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-brand-green text-sm font-bold tracking-widest block mb-2">＼ 実家をどうするか ／</span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900">
              3つの選択肢
            </h2>
            <div className="w-12 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-12" id="choices-details">
            {/* OPTION 1: 売る */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md" id="choice-1">
              <div className="bg-brand-green text-white px-6 py-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] md:text-xs bg-brand-yellow text-slate-900 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-1 inline-block">選択肢①</span>
                  <h3 className="text-xl md:text-2xl font-black">売る</h3>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg text-right">
                  <span className="text-[10px] md:text-xs text-emerald-100 block">使う予定がない</span>
                  <span className="text-xs md:text-sm font-bold text-brand-yellow">現金化したい方に</span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="inline-block bg-emerald-50 text-brand-green font-bold text-xs px-3 py-1 rounded-md mb-3">良い点 (メリット)</span>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-0.5">➕</span>
                      <span>まとまった現金が手に入り、相続人間の遺産分割もしやすい。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-0.5">➕</span>
                      <span>売却後は固定資産税や草むしりなどの管理の手間から解放される。</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <span className="inline-block bg-amber-50 text-amber-700 font-bold text-xs px-3 py-1 rounded-md mb-3">気をつけたい点 (注意点)</span>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">⚠️</span>
                      <span>幼少期を過ごした、家族の思い出が詰まった実家を失う寂しさがある。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">⚠️</span>
                      <span>親が存命だが認知症等で判断能力が低下している場合、そのままでは売れず、成年後見人の選任等が必要となる。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* OPTION 2: 手放す */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md" id="choice-2">
              <div className="bg-brand-green text-white px-6 py-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] md:text-xs bg-brand-yellow text-slate-900 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-1 inline-block">選択肢②</span>
                  <h3 className="text-xl md:text-2xl font-black">手放す</h3>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg text-right">
                  <span className="text-[10px] md:text-xs text-emerald-100 block">売れない土地・建物</span>
                  <span className="text-xs md:text-sm font-bold text-brand-yellow">とにかく負担を無くしたい方に</span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                  <span className="block font-black text-xs md:text-sm text-brand-green mb-2">主な手段は3つ：</span>
                  <div className="grid gap-2 text-xs md:text-sm text-slate-700 font-bold" id="options-methods">
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-100 shadow-3xs">
                      <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px]">1</span>
                      <span>不動産会社に引き取ってもらう（有償引取サービス）</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-100 shadow-3xs">
                      <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px]">2</span>
                      <span>国に返す（相続土地国庫帰属制度）</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-100 shadow-3xs">
                      <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px]">3</span>
                      <span>家庭裁判所へ「相続放棄」を申し立てる（期限あり）</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="inline-block bg-emerald-50 text-brand-green font-bold text-xs px-3 py-1 rounded-md mb-3">良い点 (メリット)</span>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-0.5">➕</span>
                      <span>売却が不可能な「負の遺産（地方の限界集落や崖地）」であっても、管理コストを恒久的に断ち切れる。</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <span className="inline-block bg-amber-50 text-amber-700 font-bold text-xs px-3 py-1 rounded-md mb-3">気をつけたい点 (注意点)</span>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">⚠️</span>
                      <span>手段によってクリアすべき条件が厳格で、費用も別途必要。国に返す制度は審査に通らないことも非常に多い。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">⚠️</span>
                      <span>「相続放棄」は、自分が相続の開始を知ってから「原則3ヶ月以内」に家裁で手続きを踏まなければならない。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* OPTION 3: 空き家のまま残す */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md" id="choice-3">
              <div className="bg-brand-green text-white px-6 py-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] md:text-xs bg-brand-yellow text-slate-900 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-1 inline-block">選択肢③</span>
                  <h3 className="text-xl md:text-2xl font-black">空き家のまま残す</h3>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg text-right">
                  <span className="text-[10px] md:text-xs text-emerald-100 block">思い出を残したい</span>
                  <span className="text-xs md:text-sm font-bold text-brand-yellow">将来移住する・誰かに貸すかも</span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="inline-block bg-emerald-50 text-brand-green font-bold text-xs px-3 py-1 rounded-md mb-3">良い点 (メリット)</span>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-0.5">➕</span>
                      <span>思い出の実家を手元に残し、法事や帰省の際に家族の集まる拠点として活用できる。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-0.5">➕</span>
                      <span>将来的にセカンドハウスとしてリフォームして住む、あるいは賃貸に出して副収入を得る資産価値にできる。</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <span className="inline-block bg-amber-50 text-amber-700 font-bold text-xs px-3 py-1 rounded-md mb-3">気をつけたい点 (注意点)</span>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">⚠️</span>
                      <span>利用していなくても、毎年必ず「固定資産税」や「都市計画税」が発生する。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">⚠️</span>
                      <span>建物の老朽化や庭木の繁茂に対する管理責任が生じ、近隣トラブルや倒壊事故の賠償リスクが生じる。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEIHEN FULL SUPPORT PLAN */}
      <section className="py-16 bg-white" id="plan-section">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-brand-green to-emerald-900 text-white rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden" id="plan-card">
            <div className="absolute top-0 right-0 bg-brand-yellow text-slate-950 text-xs font-black px-4 py-2 rounded-bl-2xl">
              一番選ばれています
            </div>

            <Logo size="sm" light={true} className="mb-4" />

            <h2 className="text-2xl md:text-4xl font-black mb-2 text-white">
              フルサポートプラン
            </h2>
            <div className="w-12 h-1 bg-brand-yellow mb-6 rounded-full"></div>

            <div className="flex items-baseline gap-2 mb-6" id="plan-price-block">
              <span className="text-sm text-emerald-100">一律</span>
              <span className="text-4xl md:text-6xl font-black text-brand-yellow tracking-tight">8.5</span>
              <span className="text-2xl font-black text-brand-yellow">万円</span>
              <span className="text-xs text-emerald-200">（税込93,500円）</span>
            </div>

            <p className="text-xs md:text-sm text-emerald-50 leading-relaxed mb-8 border-b border-white/10 pb-6">
              戸籍の代行収集・不動産特定・登記関係の書類作成・法務局への申請書類提出代行まで、相続登記（名義変更）に必要なすべての工程をカバーした完全パッケージプランです。
            </p>

            <div className="grid gap-4 sm:grid-cols-2 text-left mb-8" id="plan-features">
              <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs block text-white">戸籍謄本の取得代行</span>
                  <span className="text-[11px] text-emerald-100">全国どこの役所からでも代理で一括収集。</span>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs block text-white">登記申請書の作成＆提出</span>
                  <span className="text-[11px] text-emerald-100">専門システムで正確に書類を作成し法務局へ提出。</span>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs block text-white">遺産分割協議書の作成サポート</span>
                  <span className="text-[11px] text-emerald-100">相続人全員が合意するための書面を雛形提供・サポート。</span>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs block text-white">安心のオンライン完結</span>
                  <span className="text-[11px] text-emerald-100">来店不要。郵便やスマホ連絡のみで手続き可能。</span>
                </div>
              </div>
            </div>

            {/* Custom Interactive Collapse: メイヘンが対応できないこと */}
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5" id="disclaimer-accordion">
              <button
                onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
                className="w-full px-5 py-4 flex items-center justify-between text-xs md:text-sm font-bold text-slate-100 hover:bg-white/5 transition-colors"
                id="disclaimer-trigger"
              >
                <span>メイヘンが対応できないこと</span>
                {isDisclaimerOpen ? <ChevronUp className="w-4 h-4 text-brand-yellow" /> : <ChevronDown className="w-4 h-4 text-brand-yellow" />}
              </button>

              {isDisclaimerOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-300 border-t border-white/10 text-xs leading-relaxed" id="disclaimer-content">
                  遺産分割において、相続人間で取り分の争い（紛争）がある場合や、互いに合意が不可能な状態である場合、メイヘンは司法書士法または弁護士法の規定に基づき、交渉の代理や仲裁に入ることはできません。
                  その場合は、まず相続人間での話し合い（遺産分割の合意）を完了していただくか、専門の弁護士への相談を推奨いたします。争いがなく、単に「手続きだけを簡単に済ませたい」というケースであれば、一律プランで問題なくご対応いただけます。
                </div>
              )}
            </div>

            {/* Large Buttons in Plan */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8" id="plan-buttons">
              <button
                onClick={() => onNavigate('form')}
                className="flex-1 bg-brand-yellow hover:bg-brand-yellow-hover text-slate-950 font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-transform duration-300 active:scale-95"
                id="plan-cta-yellow"
              >
                <FileText className="w-5 h-5" />
                <span>無料で資料を請求する</span>
              </button>
              <button
                onClick={() => setShowPhoneModal(true)}
                className="flex-1 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-colors duration-300 active:scale-95"
                id="plan-cta-phone"
              >
                <Phone className="w-5 h-5 text-brand-light-green" />
                <span>電話で相談する</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. AFTER TITLE TRANSFER: WE SUPPORT THAT TOO */}
      <section className="py-16 bg-slate-100" id="after-transfer-section">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-black text-brand-green bg-white shadow-3xs px-4 py-1 rounded-full mb-3 inline-block">名義を移したあともお任せ！</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-2">
              名義変更はゴールではなく<br />新しい「選択」のスタートです。
            </h2>
            <p className="text-xs md:text-sm text-slate-500 max-w-md mx-auto mt-4 leading-relaxed">
              メイヘンなら、名義変更が終わった後の実家の売却、処分、買取まで、引き続き一気通貫でサポートいたします。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3" id="after-transfer-grid">
            {/* Sub-card 1: 売却 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs flex flex-col justify-between" id="sub-service-1">
              <div>
                <span className="text-[10px] font-extrabold bg-brand-green/10 text-brand-green px-3 py-1 rounded-full uppercase mb-3 inline-block">
                  売りたい方へ
                </span>
                <h3 className="font-black text-base text-slate-900 mb-2">メイヘンの不動産売却</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  メイヘン独自のネットワークと専門提携業者から最適な不動産買主を募集。市場価値の高い物件はもちろん、地方都市物件でも丁寧に売却まで伴走いたします。
                </p>
              </div>
              <button onClick={() => onNavigate('form')} className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-lg text-xs border border-slate-200 transition-colors mt-2">
                詳細を聞いてみる
              </button>
            </div>

            {/* Sub-card 2: 引き取り */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs flex flex-col justify-between" id="sub-service-2">
              <div>
                <span className="text-[10px] font-extrabold bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded-full uppercase mb-3 inline-block">
                  手放したい方へ
                </span>
                <h3 className="font-black text-base text-slate-900 mb-2">メイヘンの不動産引き取り</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  他の不動産会社で「売れない」「タダでも引き取れない」と断られたような地方の山林や、老朽化が進みすぎた実家物件でも、条件に沿ってメイヘンが引き取りを行います。
                </p>
              </div>
              <button onClick={() => onNavigate('form')} className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-lg text-xs border border-slate-200 transition-colors mt-2">
                詳細を聞いてみる
              </button>
            </div>

            {/* Sub-card 3: 買取 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs flex flex-col justify-between" id="sub-service-3">
              <div>
                <span className="text-[10px] font-extrabold bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full uppercase mb-3 inline-block">
                  即座に現金化したい方へ
                </span>
                <h3 className="font-black text-base text-slate-900 mb-2">メイヘンの不動産買取</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  買い手が現れるのを待つ時間がない方へ。弊社自身または提携買取パートナーが即座に査定を行い、最短1〜2週間でのスピーディーな現金買取に対応します。
                </p>
              </div>
              <button onClick={() => onNavigate('form')} className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-lg text-xs border border-slate-200 transition-colors mt-2">
                詳細を聞いてみる
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-16 bg-white" id="faq-section">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              よくある質問
            </h2>
            <div className="w-12 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-4" id="faq-accordion-group">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200" id={`faq-item-${idx}`}>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100/50 transition-colors font-bold text-slate-900 text-sm md:text-base"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-xs shrink-0">Q</span>
                    <span className="leading-snug">{item.question}</span>
                  </div>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-brand-green shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-6 py-5 bg-white border-t border-slate-200 text-slate-600 text-xs md:text-sm leading-relaxed" id={`faq-answer-${idx}`}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ONBOARDING FLOW SECTION */}
      <section className="py-16 bg-slate-50" id="onboarding-flow-section">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2">
              <Logo size="sm" />
              <span className="text-slate-900 text-lg md:text-xl font-bold">の始め方</span>
            </div>
            <div className="w-12 h-1 bg-brand-green mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-green/30" id="flow-steps">
            {/* Step 1 */}
            <div className="flex gap-4 relative" id="flow-step-1">
              <div className="w-12 h-12 rounded-full bg-brand-green text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md z-10">
                1
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 flex-1">
                <span className="text-brand-green text-xs font-black block mb-1">STEP 01</span>
                <h4 className="font-black text-slate-900 text-base mb-2">まずは無料資料請求！</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  パンフレットと一緒に、お申し込み用の書類セットもお届けいたします。こちらの画面から1分でお申し込みいただけます。
                </p>
                <button
                  onClick={() => onNavigate('form')}
                  className="bg-brand-yellow hover:bg-brand-yellow-hover text-slate-950 font-black text-xs px-4 py-2 rounded-lg flex items-center gap-1 shadow-xs transition-colors"
                  id="step-1-btn"
                >
                  <FileText className="w-3.5 h-3.5" />
                  無料で資料を請求する
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative" id="flow-step-2">
              <div className="w-12 h-12 rounded-full bg-brand-green text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md z-10">
                2
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 flex-1">
                <span className="text-brand-green text-xs font-black block mb-1">STEP 02</span>
                <h4 className="font-black text-slate-900 text-base mb-2">書類をご記入</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  お届けした資料内の記入フォームに必要事項を明記ください。ご家族を代表して書類確認やメール対応ができる窓口の方がご記入ください。
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative" id="flow-step-3">
              <div className="w-12 h-12 rounded-full bg-brand-green text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md z-10">
                3
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 flex-1">
                <span className="text-brand-green text-xs font-black block mb-1">STEP 03</span>
                <h4 className="font-black text-slate-900 text-base mb-2">ポストに投函</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  同封の料金受取人払（返信用）封筒に入れ、お近くのポストへ投函するだけ。書類が届き次第、弊社で内容を確認し1営業日以内にご連絡いたします。
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative" id="flow-step-4">
              <div className="w-12 h-12 rounded-full bg-brand-green text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md z-10">
                4
              </div>
              <div className="bg-brand-green text-white p-6 rounded-2xl shadow-md flex-1">
                <span className="text-brand-yellow text-xs font-black block mb-1">STEP 04</span>
                <h4 className="font-black text-base mb-2">これで申込は完了！</h4>
                <p className="text-xs text-emerald-50 leading-relaxed">
                  あとは、必要書類の提出に関するご案内や完了報告を、お客様専用ポータルまたはメールの案内に従って進めていくだけで、自宅にいながら登記手続きが完了します！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. BOTTOM DOUBLE CTA BUTTON WITH CONSULTATION IMAGE */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800" id="bottom-cta-section">
        <div className="max-w-xl mx-auto px-4 text-center">
          
          {/* Custom generated professional consulting team illustration */}
          <div className="mb-6 max-w-sm mx-auto bg-white/5 rounded-3xl p-4 border border-white/10 flex items-center justify-center" id="bottom-consult-wrapper">
            <ConsultationIllustration className="w-56 h-auto mx-auto" />
          </div>

          <Logo size="md" className="justify-center mb-6" light={true} />
          <p className="text-xs md:text-sm text-slate-300 mb-8 leading-relaxed">
            「実家の相続、これからどうすれば？」という不安の解消からお手伝いします。<br />
            1分程度のかんたんな資料請求、またはお電話にてお気軽にご相談ください。
          </p>

          <div className="flex flex-col gap-4" id="bottom-btn-group">
            <button
              onClick={() => onNavigate('form')}
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-slate-950 font-black text-sm md:text-base py-4 px-6 rounded-2xl shadow-lg transition-transform duration-300 active:scale-95 flex items-center justify-center gap-2"
              id="bottom-yellow-cta"
            >
              <FileText className="w-5 h-5 text-slate-950" />
              <span>無料で資料を請求する</span>
            </button>

            <button
              onClick={() => setShowPhoneModal(true)}
              className="bg-brand-light-green hover:bg-brand-light-green-hover text-emerald-950 font-black text-sm md:text-base py-4 px-6 rounded-2xl shadow-md transition-transform duration-300 flex items-center justify-center gap-2 active:scale-95"
              id="bottom-phone-cta"
            >
              <Phone className="w-5 h-5" />
              <span>電話で相談する</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 text-xs py-8 border-t border-slate-900 text-center" id="main-footer">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] md:text-xs font-medium text-slate-400" id="footer-links">
            <a href="#brand-logo-container" className="hover:text-white transition-colors">運営会社</a>
            <span className="text-slate-800">|</span>
            <a href="#brand-logo-container" className="hover:text-white transition-colors">特定商取引法に関する表記</a>
            <span className="text-slate-800">|</span>
            <a href="#brand-logo-container" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <span className="text-slate-800">|</span>
            <a href="#brand-logo-container" className="hover:text-white transition-colors">情報セキュリティ方針</a>
            <span className="text-slate-800">|</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('form')}>お問合せフォーム</span>
          </div>
          <p className="text-[10px] text-slate-600 pt-2">
            &copy; {new Date().getFullYear()} AGE technologies, inc. All rights reserved.
          </p>
        </div>
      </footer>

      {/* PHONE MODAL OVERLAY */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4" id="phone-modal-overlay">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl border border-slate-100 text-center relative" id="phone-modal-box">
            <button
              onClick={() => setShowPhoneModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold p-1 w-8 h-8 rounded-full hover:bg-slate-50"
              id="close-phone-modal-btn"
            >
              &times;
            </button>

            <div className="w-16 h-16 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 stroke-[2]" />
            </div>

            <h3 className="text-lg font-black text-slate-900 mb-2">電話でお悩み相談</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              専門スタッフが親切丁寧にお答えします。<br />
              通話料・相談料ともに無料です。
            </p>

            <a
              href="tel:0120640723"
              className="bg-brand-green hover:bg-brand-green-dark text-white font-black text-lg py-4 px-6 rounded-2xl shadow-lg block transition-colors duration-300"
              id="call-tel-link"
            >
              0120-640-723
            </a>

            <div className="text-[10px] text-slate-400 mt-3 font-semibold">
              受付時間: 平日 10:00 〜 18:00
            </div>
            <button
              onClick={() => setShowPhoneModal(false)}
              className="text-xs text-slate-400 hover:text-slate-600 underline font-bold mt-6 inline-block"
              id="close-modal-link"
            >
              戻る
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
