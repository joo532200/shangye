"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe,
  ShieldCheck,
  Users,
  Workflow,
  Mail,
  Phone
} from "lucide-react";
import { Navbar } from "@/components/navbar";

const services = [
  {
    icon: Globe,
    title: "国际化专业团队",
    desc: "核心成员具备互联网、金融科技与游戏开发背景，能够支持多语言、多区域的协作与交付。"
  },
  {
    icon: Workflow,
    title: "高效项目推进",
    desc: "从需求梳理、方案设计、系统实现到后续优化，建立清晰的执行流程与交付节奏。"
  },
  {
    icon: ShieldCheck,
    title: "稳定与安全",
    desc: "注重系统稳定性、部署效率与安全策略，为业务发展提供可持续的技术支撑。"
  },
  {
    icon: BriefcaseBusiness,
    title: "企业级解决方案",
    desc: "围绕官网展示、客户承接、品牌形象与技术系统搭建，形成完整的企业数字化方案。"
  }
];

const team = [
  { name: "Michael", role: "技术总监 / CTO", tag: "架构与技术决策" },
  { name: "Lisa Chen", role: "设计主管 / Lead Designer", tag: "品牌视觉与交互设计" },
  { name: "Andi", role: "技术经理 / EM", tag: "研发管理与项目协同" },
  { name: "Steven", role: "技术项目经理 / PM", tag: "项目推进与跨部门落地" },
  { name: "William", role: "高级工程师 / Senior Engineer", tag: "核心功能开发" },
  { name: "Sophia", role: "高级工程师 / Senior Engineer", tag: "前端体验优化" },
  { name: "Lee", role: "高级工程师 / Senior Engineer", tag: "系统维护与性能优化" },
  { name: "Jin", role: "高级工程师 / Senior Engineer", tag: "后端开发与接口设计" }
];

const stats = [
  ["国际化", "多领域团队协作"],
  ["企业级", "方案设计与实施"],
  ["高标准", "视觉与系统并重"]
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Page() {
  return (
    <main className="enterprise-bg min-h-screen">
      <Navbar />

      <section id="home" className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
            >
              企业官网 · 品牌展示 · 团队介绍
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl"
            >
              打造专业、稳定、国际化的
              <span className="block text-[#ff4d67]">GLOBITEX 企业官网形象</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-2xl text-lg leading-9 text-white/70"
            >
              我们拥有一支国际化的专业团队，核心成员来自互联网、金融科技与游戏开发领域，
              具备丰富的行业经验与较强的研发能力，能够为企业提供从品牌展示到系统建设的一体化支持。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#team"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff4d67] px-6 py-3 text-sm font-medium text-white"
              >
                查看团队
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85"
              >
                了解更多
              </a>
            </motion.div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {stats.map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft">
                  <div className="text-2xl font-semibold text-white">{title}</div>
                  <div className="mt-2 text-sm leading-7 text-white/60">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-soft"
          >
            <div className="rounded-[1.5rem] border border-[#ff4d67]/20 bg-[#0c1d37] p-8">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff4d67]/15 text-[#ff4d67]">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xl font-semibold text-white">我们的团队</div>
                  <div className="text-sm text-white/55">专业协作 · 高效执行 · 稳定交付</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "国际化成员组成，覆盖设计、研发、管理等关键岗位",
                  "重视品牌形象、交互体验、系统稳定性与项目落地效率",
                  "适用于企业官网、品牌展示站、客户承接型页面与技术系统搭建"
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-7 text-white/70">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
            <div className="text-sm tracking-[0.25em] text-[#ff4d67]">ABOUT GLOBITEX</div>
            <h2 className="mt-4 text-3xl font-bold text-white">关于我们</h2>
            <p className="mt-5 text-base leading-9 text-white/70">
              GLOBITEX 致力于为企业提供更专业的数字化展示与技术支持，
              从品牌官网、视觉升级，到页面搭建与系统交付，帮助企业建立更具信任感与竞争力的线上形象。
            </p>
            <p className="mt-4 text-base leading-9 text-white/70">
              我们强调审美与效率并重，在保证页面视觉表现的同时，兼顾部署、维护与后期扩展，
              让官网不仅好看，更真正具备企业级使用价值。
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0c1d37] p-8 shadow-soft">
            <div className="text-sm tracking-[0.25em] text-[#ff4d67]">OUR ADVANTAGES</div>
            <h2 className="mt-4 text-3xl font-bold text-white">我们的优势</h2>
            <div className="mt-6 space-y-4">
              {[
                "高端视觉风格与企业气质结合",
                "结构清晰，适合品牌展示与客户承接",
                "可快速部署到 Railway，便于上线和维护",
                "支持后续继续增加表单、联系按钮与功能模块"
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/5 px-4 py-4 text-sm text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-10">
          <div className="text-sm tracking-[0.25em] text-[#ff4d67]">CORE CAPABILITIES</div>
          <h2 className="mt-4 text-3xl font-bold text-white">核心能力</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff4d67]/15 text-[#ff4d67]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-xl font-semibold text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-8 text-white/65">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="team" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="text-center">
          <div className="text-sm tracking-[0.25em] text-[#ff4d67]">OUR TEAM</div>
          <h2 className="mt-4 text-4xl font-bold text-[#ff4d67]">我们的团队</h2>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-9 text-white/65">
            我们拥有一支国际化的专业团队，核心成员来自互联网、金融科技与游戏开发领域，
            具备丰富的行业经验和较强的研发能力。
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-8 text-center shadow-soft transition hover:-translate-y-1"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#ff4d67] bg-[linear-gradient(135deg,#20385f,#10213d)] text-2xl font-semibold text-white">
                {initials(member.name)}
              </div>
              <div className="mt-5 text-2xl font-bold text-white">{member.name}</div>
              <div className="mt-2 text-base text-white/75">{member.role}</div>
              <div className="mt-4 rounded-full bg-white/5 px-4 py-2 text-sm text-white/60">
                {member.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft lg:grid-cols-[1fr_420px]">
          <div>
            <div className="text-sm tracking-[0.25em] text-[#ff4d67]">CONTACT US</div>
            <h2 className="mt-4 text-3xl font-bold text-white">联系我们</h2>
            <p className="mt-5 max-w-2xl text-base leading-9 text-white/70">
              这版已经改为 GLOBITEX 企业官网风格。你可以继续替换成自己的真实资料，
              比如公司介绍、团队照片、邮箱、电话、WhatsApp、Telegram 等。
            </p>
            <div className="mt-8 space-y-4 text-white/75">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#ff4d67]" /> contact@globitex.blog</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#ff4d67]" /> +00 000 000 0000</div>
            </div>
          </div>

          <form className="rounded-[1.5rem] border border-white/10 bg-[#0c1d37] p-6">
            <div className="space-y-4">
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30" placeholder="您的姓名" />
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30" placeholder="联系方式" />
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30" placeholder="邮箱地址" />
              <textarea className="min-h-[130px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30" placeholder="请输入您的需求" />
              <button type="button" className="w-full rounded-full bg-[#ff4d67] px-6 py-3 text-sm font-medium text-white">
                提交咨询
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
