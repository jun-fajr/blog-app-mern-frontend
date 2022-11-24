import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from './redux/slices/counterSlices'
import './App.css'
import logo from './logo.svg'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPost())
    }, [])

    //select store state
    const post = useSelector(state => state.post)
    const { postsList, loading } = post
    console.log({ postsList, loading })
    return (
        <div className='App'>
            <h1>Post List</h1>
            <hr />
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                postsList?.map(post => (
                    <>
                        <h2>{post?.title}</h2>
                        <p>{post?.body}</p>
                        <hr />
                    </>
                ))
            )}
        </div>
    )
}

export default App
