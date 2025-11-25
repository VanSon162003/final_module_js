function AudioPlay(
    src,
    title = "Unknown Song",
    artist = "Unknown Artist",
    thumbnail = "/placeholder.jpg"
) {
    return `
    <div class="ytm-player w-full bg-[#1f1f1f] rounded-2xl p-4 flex items-center gap-4 shadow-lg">

        <!-- Thumbnail -->
        <img 
            src="${thumbnail}" 
            class="w-14 h-14 rounded-lg object-cover"
        />

        <div class="flex-1">
            <!-- Tiêu đề + nghệ sĩ -->
            <div class="text-white font-medium text-sm truncate">${title}</div>
            <div class="text-gray-400 text-xs truncate">${artist}</div>

            <!-- Thanh progress -->
            <input 
                id="ytm-progress"
                type="range" 
                min="0" 
                value="0" 
                class="w-full h-[4px] accent-white mt-2 cursor-pointer"
            />

            <!-- thời gian -->
            <div class="flex justify-between text-[10px] text-gray-400 mt-1">
                <span id="ytm-current">0:00</span>
                <span id="ytm-duration">0:00</span>
            </div>
        </div>

        <!-- Nút Play / Pause -->
        <button id="ytm-toggle" class="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:scale-105 transition">
            <svg id="ytm-icon" width="22" height="22" fill="black" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"></path>
            </svg>
        </button>

        <!-- Audio hidden -->
        <audio id="ytm-audio" src="${src}"></audio>
    </div>
    `;
}

export default AudioPlay;
