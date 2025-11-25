import logo from "../assets/icons/logo.svg";

function SideBar() {
    // const user = authSevice.currentUser();

    const randomSlug = Math.random();

    return `
        <div class="fixed  w-60 h-full border-r border-r-[#292929]">
            <div class="flex gap-[24px] items-center pl-[20px] h-[64px] ">
                <button class="cursor-pointer size-[24px]">
                     <i class="fa-solid fa-bars dark:text-white text-[20px] size-full "></i>
                 </button>
    
                <a href="#">
                    <img src=${logo} alt="music" class="object-cover">
                </a>
            </div>

            <div class="flex flex-col gap-[10px]">
                <a class="dark:text-white mx-[10px] text-[18px] bg-[#1d1d1d] px-[10px] py-[5px] rounded-[8px]" href="/">Trang chủ</a>
                <a class="dark:text-white mx-[10px] text-[18px]  px-[10px] py-[5px] rounded-[8px]" href="/explore">Khám phá</a>
                <a class="dark:text-white mx-[10px] text-[18px]  px-[10px] py-[5px] rounded-[8px]" href="/library">Thư viện</a>
            </div>
        </div>
    `;
}

export default SideBar;
