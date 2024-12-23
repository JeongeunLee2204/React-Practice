import { useNavigate } from 'react-router-dom'

function StartPage() {
  const navigate = useNavigate()
  return (
    <div className="container">
      <h1>고생물 mbti</h1>
      <h2>🦖당신은 무슨 고생물일까요?🦕</h2><br/>
      <button onClick={() => navigate('/test')}>
        시작하기
      </button>
      <br/><br/><br/>
        <small>
        <p>재미로만 봐주세요!</p>
        <p>제작자: CAPS 37.5기 이정은 <br/>오류 제보: palebluedot07@naver.com</p>
        </small>
    </div>

  )
}

export default StartPage
