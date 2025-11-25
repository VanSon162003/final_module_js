import Navigo from "navigo";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Library from "../pages/Library";
import ChannelDetail from "../pages/ChannelDetail";
import { handleClickPlayAudio } from "../components/WrapContent";

const router = new Navigo("/", {
    hash: false,
    linksSelector: "a",
});

const initRouter = async () => {
    const page = document.querySelector("#js-body");
    router
        .on("/", async () => {
            page.innerHTML = await Home();
            await handleClickPlayAudio();
        })
        .on("/explore", () => {
            page.innerHTML = Explore();
        })
        .on("/library", () => {
            page.innerHTML = Library();
        })
        .on("/channel/:slug", async () => {
            page.innerHTML = ChannelDetail();
        })
        .resolve();
};

export default initRouter;
