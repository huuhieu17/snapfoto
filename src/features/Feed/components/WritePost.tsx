import { TextField } from "@mui/material"
import { memo } from "react"

const WritePost = () => {
    return (
        <div className="w-full rounded">
            <TextField className="w-full" placeholder="Bạn đang nghĩ gì"/>
        </div>
    )
}

export default memo(WritePost)