import { useState } from "react";
import { useHabitsStore } from "@entities/habit";

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
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #333",
        borderRadius: "12px",
      }}
    >
      <h2>🤖 AI Habit Coach</h2>

      <p>Generate a personalized habit plan using AI.</p>

      <textarea
        rows={5}
        placeholder="Example: I want to crack DSA in 6 months."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          marginTop: "10px",
        }}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Plan"}
      </button>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          border: "1px solid #444",
          borderRadius: "8px",
        }}
      >
        <h3>Your Personalized Plan</h3>

        {plan.length === 0 ? (
          <p>Your AI-generated plan will appear here.</p>
        ) : (
          plan.map((habit, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #555",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <h4>{habit.title}</h4>

              <p>{habit.description}</p>

              <small>{habit.frequency}</small>

              <br />
              <br />

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
>
  Add Habit
</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { AiHabitCoach };