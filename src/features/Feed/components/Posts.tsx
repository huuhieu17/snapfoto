import { memo } from "react"
import Post from "./Post"
const Posts = () => {
    return (    
        <div className={`w-full mt-5`}>
            {[...Array(10)].map(() => (
                <Post/>
            ))}
        </div>
    )
}

export default memo(Posts)