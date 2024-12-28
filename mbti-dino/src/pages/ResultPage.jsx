import { useLocation, useNavigate } from "react-router-dom"
import { questionData } from "../data/questionData"
import { mbtiData } from "../data/mbtiData"
import { useEffect } from "react"

function ResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const answers = location.state?.answers || []
  let sumEI = 0
  let sumSN = 0
  let sumTF = 0
  let sumJP = 0

  questionData.forEach((q) => {
    if (q.type === "EI") sumEI += answers[q.id]
    if (q.type === "SN") sumSN += answers[q.id]
    if (q.type === "TF") sumTF += answers[q.id]
    if (q.type === "JP") sumJP += answers[q.id]
  })

  const ei = sumEI >= 0 ? "E" : "I"
  const sn = sumSN >= 0 ? "N" : "S"
  const tf = sumTF >= 0 ? "F" : "T"
  const jp = sumJP >= 0 ? "P" : "J"
  const resultMbti = ei + sn + tf + jp
  const resultData = mbtiData.find((m) => m.mbti === resultMbti)
  console.log(resultMbti);

  return (
    <div style={{ padding: 20, display:"flex", flexDirection: "column", alignItems:"center"}}>
      <h1>당신은 {resultData.nickname} 입니다!</h1>
      <button onClick={() => window.open(resultData.relateURL)}>고생물 더 알아보기</button>
      <div
        style={{
            height: "300px",
            maxWidth: "400px",
            width: "100%",
            backgroundImage: `url(${resultData.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            margin: "20px",
        }}
        ></div>

      <button onClick={() => navigate("/")}>처음으로</button>
    </div>
  )
}

export default ResultPage
