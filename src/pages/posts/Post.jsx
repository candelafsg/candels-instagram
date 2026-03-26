
import "./post.css"
import { Button } from "../../components/button/Button"

import { Footer } from "../../components/footer/Footer"

export const Post = () => {
    return (
        <div className="post-container">

            <div className="line top"></div>
            <div className="line bottom"></div>
            <div className="line left"></div>
            <div className="line right"></div>



            <section className="post-content">

                <div className="post-title-animation">
                    <div className="post-title">
                        <p className="title">LET ME TRY.</p>
                        <p className="subtitle">MC5</p>
                    </div>
                </div>
                {/* <Button /> */}
            </section>
            <Footer />
        </div>
    );
}