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
      onMouseMove={moveNo}
    >
      <div style={{ textAlign: "center", position: "relative", width: "420px" }}>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h1 style={{ fontSize: "30px", marginBottom: "50px" }}>
              ¿Quieres ir al cine conmigo? 🍿
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
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
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
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
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
            <h2 style={{ marginBottom: "20px" }}>
              🥹 Gracias por decir que sí 💖
            </h2>

            <button
              onClick={() => setStep(3)}
              style={{
                background: "#ec4899",
                color: "white",
                padding: "12px 24px",
                borderRadius: "14px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Continuar
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h3>Escoge fecha y jornada 📅</h3>

            <select
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ margin: "10px", padding: "10px" }}
            >
              <option value="">Día</option>
              <option value="Viernes">Viernes</option>
              <option value="Sábado">Sábado</option>
            </select>

            <select
              onChange={(e) => setSelectedTime(e.target.value)}
              style={{ margin: "10px", padding: "10px" }}
            >
              <option value="">Jornada</option>
              <option value="Mañana">Mañana 🌞</option>
              <option value="Noche">Noche 🌙</option>
            </select>

            <br />

            <button
              disabled={!selectedDate || !selectedTime}
              onClick={() => setStep(4)}
              style={{
                background: "#8b5cf6",
                color: "white",
                padding: "12px 24px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
                opacity: selectedDate && selectedTime ? 1 : 0.5
              }}
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
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = -(y - centerY) / 10;
                    const rotateY = (x - centerX) / 10;

                    e.currentTarget.style.transform =
                      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "rotateX(0deg) rotateY(0deg) scale(1)";
                  }}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "20px",
                    cursor: "pointer",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    transition: "transform 0.2s ease"
                  }}
                >
                  <div style={{ fontSize: "42px", marginBottom: "10px" }}>
                    {m.icon}
                  </div>
                  <div>{m.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5 💘 */}
        {step === 5 && (
          <div>
            <h2 style={{ fontSize: "24px" }}>
              💖 Plan confirmado 💖
            </h2>

            <p style={{ marginTop: "10px" }}>
              Escogiste <b>{movie}</b> 🎬
            </p>

            <p style={{ marginTop: "10px" }}>
              Nos vemos el <b>{selectedDate}</b> en la jornada de{" "}
              <b>{selectedTime}</b> 💫
            </p>

            <p style={{ marginTop: "15px" }}>
              Te amo ❤️
            </p>

            <p style={{ marginTop: "10px" }}>
              No sabes lo feliz que me hace poder compartir esto contigo 🥹✨ 
            </p>

            <p style={{ marginTop: "10px" }}>
              Va a ser un momento especial, solo tú y yo ✨
            </p>

            <p style={{ marginTop: "10px" }}>
              Ya quiero que llegue ese día para verte 😍✨ 
            </p>
          </div>
        )}

      </div>
    </div>
  );
}