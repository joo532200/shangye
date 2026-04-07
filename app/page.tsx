"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Users,
  Mail,
  Phone
} from "lucide-react";
import { Navbar } from "@/components/navbar";

const features = [
  {
    icon: TrendingUp,
    title: "实时黄金走势解读",
    desc: "围绕 XAUT / 国际黄金市场，结合趋势、结构、支撑阻力与节奏，输出更直观的分析观点。"
  },
  {
    icon: BarChart3,
    title: "每日策略推送",
    desc: "盘前计划、盘中提醒、晚间复盘，帮助用户更清晰地理解关键点位与交易逻辑。"
  },
  {
    icon: ShieldCheck,
    title: "风险控制框架",
    desc: "不只给方向，更重视仓位管理、止损思路与交易纪律，减少情绪化操作。"
  },
  {
    icon: Users,
    title: "新手也能看懂",
    desc: "用更容易理解的表达和结构，把复杂分析整理成用户能直接消化的内容。"
  }
];

const team = [
  { name: "Michael", role: "首席分析总监", tag: "趋势结构研究" },
  { name: "Lisa", role: "策略内容主管", tag: "内容策划与解读" },
  { name: "Andi", role: "市场分析经理", tag: "盘面追踪与策略执行" },
  { name: "Steven", role: "研究平台主管", tag: "节奏规划与日内复盘" }
];

export default function Page() {
  return (
    <main className="enterprise-bg min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section id="home" className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
        <div className="glow-orb left-[-100px] top-[40px] h-[260px] w-[260px] bg-[rgba(245,197,66,0.14)] animate-pulseGlow" />
        <div className="glow-orb right-[-120px] top-[160px] h-[320px] w-[320px] bg-[rgba(245,197,66,0.10)] animate-pulseGlow" />
       
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex rounded-full border border-[rgba(245,197,66,0.18)] bg-[#111111] px-4 py-2 text-sm text-[#f5c542]"
            >
              黑金高级分析服务页面
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl"
            >
              专注 XAUT / 国际黄金市场分析
              <span className="block text-[#f5c542]">
                提供趋势判断、点位策略与风险控制
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-2xl text-lg leading-9 text-[#b3b3b3]"
            >
              围绕黄金波动结构、关键支撑阻力、日内节奏与策略执行，
              为用户提供更直观、更清晰、更具实战参考价值的分析服务。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#f5c542] px-6 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(245,197,66,0.25)] transition hover:scale-[1.05] hover:shadow-[0_0_50px_rgba(245,197,66,0.45)]"
              >
                立即领取今日策略
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="rounded-full border border-[rgba(245,197,66,0.18)] bg-[#111111] px-6 py-3 text-sm text-white transition hover:border-[#f5c542] hover:shadow-[0_0_20px_rgba(245,197,66,0.25)]"
              >
                查看服务内容
              </a>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-[rgba(245,197,66,0.12)] bg-[#111111] px-4 py-2 text-sm text-white/70">
                日内短线策略
              </div>
              <div className="rounded-full border border-[rgba(245,197,66,0.12)] bg-[#111111] px-4 py-2 text-sm text-white/70">
                波段布局思路
              </div>
              <div className="rounded-full border border-[rgba(245,197,66,0.12)] bg-[#111111] px-4 py-2 text-sm text-white/70">
                关键点位提醒
              </div>
              <div className="rounded-full border border-[rgba(245,197,66,0.12)] bg-[#111111] px-4 py-2 text-sm text-white/70">
                风险控制框架
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="relative rounded-[2rem] border border-[rgba(245,197,66,0.14)] bg-[#111111] p-6 shadow-[0_10px_40px_rgba(245,197,66,0.10)]"
          >
              iframe
  src="https://s.tradingview.com/widgetembed/?symbol=OANDA:XAUUSD&interval=60&theme=dark"
  className="w-full h-[400px] rounded-xl"
/>

<div className="absolute right-[-80px] top-[60px] w-[200px] bg-[#111111] border border-[#f5c542]/20 rounded-xl p-4 shadow-[0_0_30px_rgba(245,197,66,0.15)]">
  <div className="text-white text-sm">Cross</div>
  <div className="text-[#f5c542] mt-2 text-lg font-bold">20X</div>

  <div className="mt-4 text-xs text-gray-400">Available</div>
  <div className="text-white text-sm">18982 USDT</div>

  <button className="mt-4 w-full bg-[#f5c542] text-black py-2 rounded-lg">
    Buy
  </button>
</div>
            

          
                 
                  
                
    

              
              
              
          
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="text-center">
          <div className="text-sm tracking-[0.25em] text-[#f5c542]">核心价值</div>
          <h2 className="mt-4 text-4xl font-bold text-white">
            为什么用户会选择你的黄金分析服务
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#a3a3a3]">
            不只是展示“会分析”，而是把专业度、可信度和转化路径都做出来。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[rgba(245,197,66,0.14)] bg-[#111111] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,197,66,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(245,197,66,0.10)] text-[#f5c542]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-xl font-semibold text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-8 text-[#a3a3a3]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-[rgba(245,197,66,0.14)] bg-[linear-gradient(90deg,rgba(245,197,66,0.10),rgba(17,17,17,1))] p-8 shadow-[0_10px_40px_rgba(245,197,66,0.10)] lg:grid-cols-[1fr_420px]">
          <div>
            <div className="text-sm tracking-[0.25em] text-[#f5c542]">转化模块</div>
            <h2 className="mt-4 text-4xl font-bold text-white">
              立即获取今日黄金策略与入场思路
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-9 text-[#b3b3b3]">
              适合用于 WhatsApp、Telegram、Facebook 广告、私域引流页，
              帮助访客快速留下联系方式并进入转化流程。
            </p>
          </div>

          <form className="rounded-[1.5rem] border border-[rgba(245,197,66,0.14)] bg-[#111111] p-6">
            <div className="space-y-4">
              <input
                className="w-full rounded-xl border border-[rgba(245,197,66,0.10)] bg-[#1a1a1a] px-4 py-3 text-white outline-none placeholder:text-white/30"
                placeholder="请输入您的称呼"
              />
              <input
                className="w-full rounded-xl border border-[rgba(245,197,66,0.10)] bg-[#1a1a1a] px-4 py-3 text-white outline-none placeholder:text-white/30"
                placeholder="请输入您的 WhatsApp / Telegram"
              />
              <textarea
                className="min-h-[120px] w-full rounded-xl border border-[rgba(245,197,66,0.10)] bg-[#1a1a1a] px-4 py-3 text-white outline-none placeholder:text-white/30"
                placeholder="您更关注的是短线、波段，还是点位提醒？"
              />
              <button
                type="button"
                className="w-full rounded-full bg-[#f5c542] px-6 py-3 text-sm font-medium text-black"
              >
                免费领取分析策略
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="team" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="text-center">
          <div className="text-sm tracking-[0.25em] text-[#f5c542]">团队支持</div>
          <h2 className="mt-4 text-4xl font-bold text-white">专业团队支持</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#a3a3a3]">
            从内容策划、市场分析到策略整理，形成更有执行力的分析服务体系。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-[2rem] border border-[rgba(245,197,66,0.14)] bg-[#111111] p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,197,66,0.12)]"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#f5c542] bg-[linear-gradient(135deg,#1b1b1b,#0d0d0d)] text-2xl font-semibold text-white">
                {member.name.slice(0, 1)}
              </div>
              <div className="mt-5 text-2xl font-bold text-white">{member.name}</div>
              <div className="mt-2 text-base text-white/75">{member.role}</div>
              <div className="mt-4 rounded-full bg-[rgba(245,197,66,0.10)] px-4 py-2 text-sm text-[#f5c542]">
                {member.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-[rgba(245,197,66,0.14)] bg-[#111111] p-8 shadow-[0_10px_40px_rgba(245,197,66,0.08)] lg:grid-cols-[1fr_420px]">
          <div>
            <div className="text-sm tracking-[0.25em] text-[#f5c542]">联系信息</div>
            <h2 className="mt-4 text-3xl font-bold text-white">联系我们</h2>
            <p className="mt-5 max-w-2xl text-base leading-9 text-[#b3b3b3]">
              你可以继续把这里替换成自己的真实联系方式，
              比如 WhatsApp、Telegram、邮箱、客服入口等。
            </p>

            <div className="mt-8 space-y-4 text-white/75">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#f5c542]" />
                contact@globitex.blog
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#f5c542]" />
                +00 000 000 0000
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[rgba(245,197,66,0.12)] bg-[#0b0b0b] p-6">
            <div className="text-sm leading-8 text-[#a3a3a3]">
              黑金风格更适合：
              <br />
              1. 黄金分析服务
              <br />
              2. 高端投顾页面
              <br />
              3. 私域转化型落地页
              <br />
              4. 金融策略展示页
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
