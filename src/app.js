import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

// ở đây cũng tương tự mọi người cũng khai báo async func để xử lý

// ở những hàm nào cần đợi chờ thì thêm await tương ứng

async function app() {
    return `
            ${Header()}
            ${Home()}
            ${await Blog()} 
            ${Footer()}
`;
}

export default app;
