import React from 'react'
import Header from '../header/header'
import Footer from '../components/Footer/Footer'
import BlogLanding from '../components/Blog/BlogLanding'
import BlogPageThree from '../components/Blog Page/BlogPageThree'
import { useEffect } from 'react'
const BlogPageThreeMain = () => {
  useEffect(() => {
    document.title = 'Blogs';
  }, []);
  return (
    <div>
        <Header/>
        <BlogLanding/>
        <BlogPageThree/>
        <Footer/>
    </div>
  )
}

export default BlogPageThreeMain