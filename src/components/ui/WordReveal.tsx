'use client';

import { motion } from 'framer-motion';

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function WordReveal({ text, className, delay = 0 }: WordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}>
          <motion.span
            initial={{ translateY: '100%' }}
            whileInView={{ translateY: '0%' }}
            transition={{
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + i * 0.1,
            }}
            viewport={{ once: true }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
