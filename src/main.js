import "./style.css";
import app from "./app";

// mọi người khai báo async func để xử lý bất đồng bộ
const render = async () => {
    document.querySelector("#app").innerHTML = await app();
};

render();
