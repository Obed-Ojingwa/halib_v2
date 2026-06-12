// C:\Users\Melody\Documents\haliberrycake\frontend\src\components\about\ValuesSection.tsx
import { motion } from 'framer-motion'
import { Heart, Star, Sparkles, Users, Leaf, Shield } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'

const VALUES = [
  {
    icon: <Heart size={28} />,
    title: 'Made with Love',
    description: 'Every cake is crafted with genuine care and emotional investment. Baking is our love language.',
    iconBg: 'rgba(212, 163, 115, 0.12)',
    iconColor: '#D4A373',
  },
  {
    icon: <Star size={28} />,
    title: 'Uncompromising Quality',
    description: 'We use only the finest ingredients — locally sourced where possible — and never cut corners on artistry.',
    iconBg: 'rgba(212, 163, 115, 0.12)',
    iconColor: '#D4A373',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Creativity as Medicine',
    description: 'We believe the act of creating is healing. Baking taught us this — and we pass it on through every class.',
    iconBg: 'rgba(212, 163, 115, 0.12)',
    iconColor: '#D4A373',
  },
  {
    icon: <Users size={28} />,
    title: 'Community First',
    description: 'Haliberry CIC exists because no one should be left behind. We invest in women and communities.',
    iconBg: 'rgba(212, 163, 115, 0.12)',
    iconColor: '#D4A373',
  },
  {
    icon: <Leaf size={28} />,
    title: 'Thoughtful Sourcing',
    description: 'From free-range eggs to fairtrade chocolate — we care about where our ingredients come from.',
    iconBg: 'rgba(212, 163, 115, 0.12)',
    iconColor: '#D4A373',
  },
  {
    icon: <Shield size={28} />,
    title: 'Trust & Transparency',
    description: 'We honour every commitment. Delivery times, pricing, ingredients — always clear, always honest.',
    iconBg: 'rgba(212, 163, 115, 0.12)',
    iconColor: '#D4A373',
  },
]

export default function ValuesSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-white border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={fadeUp} className="font-sans text-xs font-medium tracking-[0.22em] uppercase mb-3 block" style={{ color: 'var(--peach)' }}>
            What We Stand For
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif font-semibold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1', color: 'var(--text-primary)' }}
          >
            Our Core
            <em className="not-italic" style={{ color: 'var(--peach)' }}> Values</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans font-light mt-4"
            style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}
          >
            Built on principles of quality, community, and creativity — these values guide everything we make and do.
          </motion.p>
        </motion.div>

        {/* Values grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {VALUES.map(({ icon, title, description, iconBg, iconColor }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-2xl p-8 flex flex-col gap-5 border border-black/5"
              style={{
                background: '#FAFAF8',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                style={{ background: iconBg, color: iconColor }}
              >
                {icon}
              </div>
              <div>
                <h3 className="font-serif font-semibold mb-3" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  {title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}