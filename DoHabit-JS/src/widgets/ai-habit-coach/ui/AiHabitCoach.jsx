import { useState } from "react";
import { useHabitsStore } from "@entities/habit";
import styles from "./AiHabitCoach.module.css";

function AiHabitCoach() {
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState([]);
  const habitsDispatch = useHabitsStore((s) => s.habitsDispatch);

  const handleGenerate = async () => {
    if (!goal.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/ai/habit-coach",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ goal }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setPlan(data.plan);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <div className={styles.iconWrap} aria-hidden="true">
          <span className={styles.iconRing} />
          {/* <span className={styles.iconCore}>🤖</span> */}
           <span className={styles.iconCore}>
            <svg viewBox="0 0 24 24" fill="#fff">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
          </span>
        </div>
        <div>
          <h2 className={styles.title}>AI Habit Coach</h2>
          <p className={styles.subtitle}>
            Generate a personalized habit plan using AI.
          </p>
        </div>
      </div>

      <div className={styles.formSection}>
        <textarea
          rows={5}
          placeholder="Example: I want to crack DSA in 6 months."
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className={styles.textarea}
          aria-label="Describe your goal"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          aria-busy={loading}
          className={styles.generateBtn}
        >
          {loading && <span className={styles.spinner} aria-hidden="true" />}
          <span>{loading ? "Generating..." : "Generate Plan"}</span>
        </button>
      </div>

      <div className={styles.planSection}>
        <h3 className={styles.planTitle}>Your Personalized Plan</h3>

        {plan.length === 0 ? (
          <p className={styles.emptyState}>
            Your AI-generated plan will appear here.
          </p>
        ) : (
          <div className={styles.habitList}>
            {plan.map((habit, index) => (
              <div
                key={index}
                className={styles.habitCard}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <h4 className={styles.habitTitle}>{habit.title}</h4>
                <p className={styles.habitDescription}>{habit.description}</p>
                <span className={styles.frequencyBadge}>
                  {habit.frequency}
                </span>

                <div>
                  <button
                    onClick={() => {
                      habitsDispatch({
                        type: "addHabit",
                        payload: {
                          data: {
                            title: habit.title,
                            frequency: 1,
                            colorIndex: 0,
                            iconTitle: "sparkles",
                          },
                        },
                      });
                    }}
                    className={styles.addHabitBtn}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                    Add Habit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { AiHabitCoach };