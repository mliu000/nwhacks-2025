import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="font-bold text-8xl flex flex-row gap-7">
        <img
          src="https://www.jacquelynmarcella.com/blackjack/img/pile-chip.png"
          alt="chips stacking"
          className="h-24"
        />{" "}
        BrainJack!{" "}
        <img
          src="https://www.jacquelynmarcella.com/blackjack/img/pile-chip.png"
          alt="chips stacking"
          className="h-24"
        />
      </h1>
      <p className="font-bold text-lg my-3">
        Blackjack with a twist - play, win, and double your winnings by
        answering study questions!
      </p>
      <button
        className="bg-[#a2b288] px-2 py-3 rounded-lg m-5 w-80 text-xl"
        onClick={() => navigate("/place-bets")}
      >
        Play Game!
      </button>
    </div>
  );
}

export default HomePage;
