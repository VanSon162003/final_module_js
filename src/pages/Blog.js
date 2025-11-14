import authSevice from "../service/authSevice";
import postsService from "../service/postsService";

async function Blog() {
    const posts = await postsService.getAll();

    await authSevice.currentUser();
    await authSevice.currentUser();
    await authSevice.currentUser();
    await authSevice.currentUser();

    return `
        <div class="text-3xl text-red-500">
        ${posts.map((post) => post.title).join("")}
        </div>
    `;
}

export default Blog;
