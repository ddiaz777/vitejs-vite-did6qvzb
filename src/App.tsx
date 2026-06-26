import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [movie, setMovie] = useState("");

  const [noPos, setNoPos] = useState({ x: 150, y: -80 });

  const movies = [
    { name: "Toy Story", icon: "🤠🚀" },
    { name: "Scary Movie", icon: "👻" },
    { name: "Spiderman", icon: "🕷️" }
  ];

  const moveNo = () => {
    const x = Math.random() * 600 - 300;
    const y = Math.random() * 400 - 200;
    setNoPos({ x, y });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fce7f3",
        fontFamily: "Arial"
      }}
    >
      <div style={{ textAlign: "center", position: "relative", width: "420px" }}>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h1 style={{ fontSize: "30px", marginBottom: "40px" }}>
              🍿 ¿Quieres ir al cine conmigo?
            </h1>

            <div style={{ display: "flex", justifyContent: "center", gap: "80px" }}>
              
              <button
                onClick={() => setStep(2)}
                style={{
                  background: "#22c55e",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: "16px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Sí ❤️
              </button>

              <button
                onMouseEnter={moveNo}
                onClick={moveNo}
                style={{
                  position: "absolute",
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                  background: "#ef4444",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: "16px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                No 😅
              </button>

            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h2>🥹 Gracias por decir que sí 💖</h2>

            <button
              onClick={() => setStep(3)}
              style={{ marginTop: "20px" }}
            >
              Continuar
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h3>Escoge fecha y jornada 📅</h3>

            <select onChange={(e) => setSelectedDate(e.target.value)}>
              <option value="">Día</option>
              <option value="Viernes">Viernes</option>
              <option value="Sábado">Sábado</option>
            </select>

            <br />

            <select onChange={(e) => setSelectedTime(e.target.value)}>
              <option value="">Jornada</option>
              <option value="Mañana">Mañana 🌞</option>
              <option value="Noche">Noche 🌙</option>
            </select>

            <br />

            <button
              disabled={!selectedDate || !selectedTime}
              onClick={() => setStep(4)}
              style={{ marginTop: "15px" }}
            >
              Siguiente
            </button>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div>
            <h3>Escoge la película 🎬</h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginTop: "20px"
              }}
            >
              {movies.map((m) => (
                <div
                  key={m.name}
                  onClick={() => {
                    setMovie(m.name);
                    setStep(5);
                  }}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "20px",
                    cursor: "pointer",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                  }}
                >
                  <div style={{ fontSize: "42px" }}>{m.icon}</div>
                  <div>{m.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div>
            <h2>💖 Plan confirmado 💖</h2>

            <p>Escogiste <b>{movie}</b> 🎬</p>
            <p>
              Nos vemos el <b>{selectedDate}</b> en{" "}
              <b>{selectedTime}</b>
            </p>

            <p style={{ marginTop: "15px" }}>Te amo ❤️</p>
            <p>No sabes lo feliz que me hace esto 🥹</p>
            <p>Será especial, solo tú y yo ✨</p>
            <p>Ya quiero verte 😍</p>
          </div>
        )}

      </div>
    </div>
  );
} 