import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { questionData } from "../data/questionData"

function TestPage() {
  const navigate = useNavigate()
  const [page, setPage] = useState(0)
  const [answers, setAnswers] = useState(Array(questionData.length).fill(0))
  const scale = [-2, -1, 0, 1, 2]
  const scaleLabel = ["매우 아니다", "아니다", "보통", "그렇다", "매우 그렇다"]

  const startIndex = page * 7
  const endIndex = page * 7 + 7
  const currentQuestions = questionData.slice(startIndex, endIndex)

  const handleChange = (qid, value) => {
    const updated = [...answers]
    updated[qid] = Number(value)
    setAnswers(updated)
  }

  const handleNext = () => {
    if (page < 3) setPage(page + 1)
    else navigate("/result", { state: { answers } })
  }

  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: "center"}}>
      {currentQuestions.map((q) => (
        <div key={q.id} style={{ margin: "20px 0" }}>
          <p>{q.question}</p>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          {scale.map((val, i) => (
            <label key={val} style={{ marginRight: 10 }}>
              <input
                type="radio"
                name={`q_${q.id}`}
                value={val}
                checked={answers[q.id] === val}
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
              {scaleLabel[i]}
            </label>
          ))}</div>
        </div>
      ))}
      <button onClick={handleNext}>{page < 3 ? "다음" : "결과 보기"}</button>
    </div>
  )
}

export default TestPage
