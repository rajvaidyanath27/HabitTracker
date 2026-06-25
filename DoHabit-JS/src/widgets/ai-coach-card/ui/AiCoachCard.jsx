import { useNavigate } from "react-router";

function AiCoachCard() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/ai-coach")}
      style={{
        padding: "20px",
        border: "1px solid #333",
        borderRadius: "12px",
        cursor: "pointer",
        marginBottom: "25px",
      }}
    >
      <h2>🤖 AI Habit Coach</h2>

      <p>Create personalized habits using AI.</p>

      <button
        style={{
          marginTop: "15px",
          padding: "10px 18px",
          cursor: "pointer",
        }}
      >
        Launch AI Coach →
      </button>
    </div>
  );
}

export { AiCoachCard };