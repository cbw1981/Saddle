import SongsList from "../components/SongsList";
import Playlists from "../components/Playlists";
import Player from "../components/Player";
import bg from "../assets/bg.jpg"

function Home() {
  return (
    <>
    <div
    className="w-full min-h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex gap-5">
        <div className="w-1/2">
          <SongsList />
        </div>
        <div className="w-1/2">
          <Playlists />
        </div>
      </div>
      <Player />
      </div>
    </>
  );
}

export default Home;