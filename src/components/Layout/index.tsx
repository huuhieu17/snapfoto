import { memo } from "react";
import Header from "./Header";
import { Container } from "@mui/material";

interface LayoutProps {
    children: any
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-screen h-screen" aria-label="Layout">
           
           <div className="w-full h-full flex flex-col">
                <Header />
                <div className="flex-[1] w-full overflow-hidden" aria-label="Content">
                    <Container>
                        {children}
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default memo(Layout);