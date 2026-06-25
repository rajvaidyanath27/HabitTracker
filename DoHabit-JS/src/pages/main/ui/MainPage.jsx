import styles from "./MainPage.module.css";
import { motion } from "framer-motion";
import { variants } from "../model/page.animations";
import { AppHeader } from "@widgets/app-header";
import { HabitList } from "@widgets/habit-list";
import { AiHabitCoach } from "@widgets/ai-habit-coach";
import { AiCoachCard } from "@widgets/ai-coach-card";

function MainPage() {
  return (
    <motion.div
      className={styles.mainPage}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AppHeader />

      {/* <div className={styles.content}>
  <AiHabitCoach />
</div> */}

<div className={styles.content}>
  <AiCoachCard />
  <HabitList />
</div>
    </motion.div>
  );
}

export { MainPage };