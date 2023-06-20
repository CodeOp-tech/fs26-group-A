import "./stylesheets/ArtistQuiz.css";
import Chip from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ScoreFeedbackForHookQuiz({ score }) {
  //
  const navigate = useNavigate();

  const exploreAllArtists = () => {
    navigate(`/lectures/artists`);
  };

  const returnToHomePage = () => {
    navigate(`/`);
  };

  const takeTheQuizAgain = () => {
    navigate(`/hook_quiz`);
  };

  const shareWithFriends = () => {
    alert("Hang in there! This feature is in development 🎨");
  };

  //next
  return (
    <div className="mainContainer">
      <p className="questionText">Quiz completed!</p>
      <div className="scoreContainer">
        <h3 className="score">{score}/5</h3>
      </div>

      {score === 5 && (
        <p className="scoreFeedback">Amazing! You are an expert!</p>
      )}
      {score === 4 && <p className="scoreFeedback">Impressive!</p>}
      {score === 3 && (
        <p className="scoreFeedback">Well done! You are doing great!</p>
      )}
      {score === 2 && (
        <p className="scoreFeedback">
          Well done! You will be an expert in no time!
        </p>
      )}
      {score === 1 && (
        <p className="scoreFeedback">Nice effort! Keep up the good work!</p>
      )}
      {score === 0 && (
        <p className="scoreFeedback">
          Keep exploring! Remember, each step forward is a success!
        </p>
      )}

      {/* CTAs */}
      <section className="ctaBigContainer">
        <div className="ctaContainer">
          <div className="chip">
            <Chip
              label="Clickable"
              variant="contained"
              color="info"
              onClick={() => shareWithFriends()}
            >
              Spread the word: share results with friends
            </Chip>
          </div>

          <div className="chip">
            <Chip
              label="Clickable"
              variant="contained"
              color="info"
              onClick={() => takeTheQuizAgain()}
            >
              Take the quiz again
            </Chip>
          </div>

          <div className="chip">
            <Chip
              label="Clickable"
              variant="contained"
              color="info"
              onClick={() => exploreAllArtists()}
            >
              Explore other artists
            </Chip>
          </div>
          <div className="chip">
            <Chip
              label="Clickable"
              variant="contained"
              color="info"
              onClick={() => returnToHomePage()}
            >
              Return to home page
            </Chip>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScoreFeedbackForHookQuiz;