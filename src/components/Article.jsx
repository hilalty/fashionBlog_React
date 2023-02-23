import blogImage1 from "./blog-image-1.png";
import blogImage2 from "./blog-image-2.png";

export function Article() {
    return (
        <div className="main">
        <article>
            <h2 className="date">11/12/20</h2>
            <h2>On the Street in Brooklyn</h2>
            <img src={blogImage1} alt="a woman with a red dress standing in a blue wall"/>
            <p className="article">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam inventore iste molestias sequi fugit, iure voluptate explicabo quod iusto debitis expedita laborum quas sint labore officiis libero deserunt voluptates. Asperiores impedit alias dicta non, deserunt explicabo veniam aperiam rerum suscipit nisi dolores optio inventore aliquam sint consequuntur ab. Aperiam, voluptatum id. Vitae praesentium aperiam omnis, voluptas voluptatum unde odio laudantium vero repellendus, facilis et, similique magnam amet reiciendis doloremque!</p>
            <p className="continues">Continues...</p>
        </article>
        <article>
            <h2 className="date">11/11/20</h2>
            <h2>Vintage in Vogue</h2>
            <img src={blogImage2} alt="three people with vintage clothes"/>
            <p className="article">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita, in ipsa voluptatum iure ipsam omnis fuga quos numquam placeat delectus adipisci ea earum sunt nesciunt ad cumque quas nam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, similique, recusandae aperiam soluta velit qui necessitatibus deleniti odio hic officiis ex minima modi ab, eius fugit maiores nobis quis. Fuga!</p>

            <p className="continues">Continues...</p>
        </article>
        </div>

    );
}