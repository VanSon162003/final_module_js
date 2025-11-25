import Header from "./components/Header";
import Footer from "./components/Footer";

// ở đây cũng tương tự mọi người cũng khai báo async func để xử lý

// ở những hàm nào cần đợi chờ thì thêm await tương ứng

async function app() {
    return `
            ${await Header()}
            <main id="js-body" class="container mx-auto"></main>
            ${Footer()}
`;
}

export default app;
