import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const News = (props) => {
    const router = useRouter();
    const [page,setPage] = useState(0);
    const pagesref = useRef(new Array());
    const postsperpage = 6; // posts per page

    const pageHandler = (i) => {
        pagesref.current[page].classList.remove('active');
        setPage(i);
        pagesref.current[i].classList.add('active');
        router.push('blog', `/blog?page=${i}`, { shallow: true })
    }
    
    const pagePagintation = () => {
        pagesref.current = [];
        let links = []
        for (let index = 1; index < props.allPosts.length; index++) {
            if (index === 1){
                links.push(<a href="#blog-head" key={index+'tab'} className="active" ref={(e) => pagesref.current[0] = (e)} onClick={() => pageHandler(0)}>1</a>)
            }
            else if (index % postsperpage === 0){
                links.push(<a href="#blog-head" key={index+'tab'}ref={(e) => pagesref.current[index/6] = (e)} onClick={() => pageHandler(index / postsperpage )}>{index / postsperpage+1}</a>)
            }
        }
        return links;
    }

    const blogPosts = () => {
        let posts = [];
        page === 0 ? posts = [0,postsperpage] : posts = [postsperpage*page,postsperpage*(page+1)];
        const pages = props.allPosts.slice(posts[0],posts[1]);
        return pages.map ((e,index) => {
            return(
                    <div key={e.slug+index} className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="blog-one__single">
                        <div className="blog-one__image">
                            <img src={e.coverImage} style={{width: '100%',height: '282px',objectFit: 'cover',objectPosition: 'center'}} alt="" />
                            <Link href={'/blog/'+e.slug}>
                                <a className="blog-one__more-link"><i
                                    className="fa fa-link"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="blog-one__content">
                            <ul className="list-unstyled blog-one__meta">
                                <li><a href="#">{new Date(e.date).toLocaleDateString()}</a></li>
                            </ul>
                            <h3 className="blog-one__title">
                                <Link href={`/blog/${e.slug}`}>
                                <a>{e.title}</a>
                                </Link>
                            </h3>
                            <Link href={`/blog/${e.slug}`}>
                                <a className="blog-one__link">קרא עוד</a>
                            </Link>
                        </div>
                    </div>
                </div>
                )
            })
    }
        return (
            <section id="blog-head" className="blog-one">
                <div className="container">
                    <div className="row flex-row-reverse justify-content-center">
                        { blogPosts() }
                    </div>
                    <div className="post-pagination">
                        <a><i className="fa fa-angle-double-left"></i></a>
                        { pagePagintation() }
                        <a><i className="fa fa-angle-double-right"></i></a>
                    </div>
                </div>
            </section>
        )
}
export default News;
