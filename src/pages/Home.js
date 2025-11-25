import PlaylistTags from "../components/PlaylistTags";
import WrapContent from "../components/WrapContent";
import albumsService from "../service/albumsService";
import homeService from "../service/homeService";

async function Home() {
    const moods = await homeService.getMoods();
    const albums = await homeService.getAlbum();
    const albumDetail = await albumsService.getOne();

    return `
    <div id="wrapper-content" class="mt-[50px] ml-[220px]">
      <div class="flex  flex-nowrap gap-[10px] ">
        ${moods
            .map((element) => {
                return PlaylistTags(element.name);
            })
            .join("")}
        
      </div>

      <div class="mt-[50px]">
            ${await WrapContent(albums)}
      </div>

      <div class="mt-[50px]">
            ${await WrapContent(albumDetail)}
      </div>
    </div>
    `;
}

export default Home;
