import {motion} from 'framer-motion'
export default function Home() {
  return <main>
    <motion.h1
    initial={{opacity: 0, y: -200}}
    animate={{opacity: 1, y: 0}}
    >
      This is framer
    </motion.h1>


  </main>;
}
