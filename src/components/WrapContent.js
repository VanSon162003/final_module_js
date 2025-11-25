import formatSeconds from "../utils/formatSecond";
import AudioPlay from "./AudioPlay";

export const handleClickPlayAudio = async () => {
    const wrapperContent = document.querySelector("#wrapper-content");
    const audioPlay = document.querySelector("#audio-play");

    wrapperContent.querySelectorAll("img, p").forEach((el) => {
        el.addEventListener("click", () => {
            const url = el.dataset.srcaudio;
            const type = el.dataset.type;

            if (type === "song") {
                audioPlay.innerHTML = AudioPlay(url);
            }
        });
    });
};

async function WrapContent(content) {
    return `
        <div  class="flex gap-[20px] overflow-auto dark:text-white">
            ${content
                .map((item) => {
                    return `
                        <div class="w-[160px] shrink-0">
                            <img 
                                src="${item?.thumbnails[0]}" 
                                alt="" 
                                class="w-full object-cover rounded-lg cursor-pointer"
                                data-srcAudio="${item.audioUrl || ""}"
                                data-type="${item.type || ""}"
                            />
                            <p class="mt-[10px] cursor-pointer"
                                 data-srcAudio="${item.audioUrl}"
                                data-type="${item.type || ""}"
                            >${item?.title}</p>
                            <p class="mt-[10px]">${
                                item?.artists[0] ||
                                (item?.duration
                                    ? formatSeconds(item?.duration)
                                    : "")
                            }</p>
                        </div>
                    `;
                })
                .join("")}

                
        </div>

        <div id="audio-play">
        </div>
    `;
}

export default WrapContent;
