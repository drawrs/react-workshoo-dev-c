import React from 'react'
//import React, { Component } from 'react' //cara_2 bisa langsung ke Child class
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogList'


const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json"

class App extends React.Component { // cara_2, disini tinggal extends Component
    constructor(){
        super()

        this.state = {
            loading: true,
            search: "",
            blogs: [],
            blogsFiltered: [],
        }
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({loading: false})
        // }, 1000)
        this.handleGetBlogs()
    }

    handleTypeSearch = event => {
        // this.setState({
        //     search: event.target.value
        // })
        // console.log(event.target.value)

        // const blogsFiltered = this.state.blogs.filter((blog) => {
        //     blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        // })
        const blogsFiltered = this.state.blogs.filter(
            blog => blog.title.indexOf(event.target.value) > -1
        )
        this.setState({
            blogsFiltered: blogsFiltered
        })
    }

    handleGetBlogs = () => {
        fetch(link)
        .then(res => res.json())
        .then(res => this.setState({blogs: res, blogsFiltered: res, loading: false}))
    }


    render() {
        console.log(this.state.blogsFiltered)

        if (this.state.loading) {
            return (
                <h1>Loading...</h1>
            )
        }

        return (
            <div>
                <SearchBar 
                search={this.state.search}
                onChangeSearch={this.handleTypeSearch}/>
                {this.state.blogsFiltered.map((blog, index) => (
                    <BlogList
                    key={index}
                    title={blog.title}
                    content={blog.content}
                    author={blog.author}
                    date={blog.created_at}
                    />
                ))}
                
            </div>
        )
    }
}

export default App