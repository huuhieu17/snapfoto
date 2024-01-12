import { useAuth } from "@/lib/auth";
import { Email, Explore, Home, Notifications, Person } from "@mui/icons-material";
import { Container, Divider, useTheme } from "@mui/material";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import styles from "./Layout.module.scss"
interface LayoutProps {
    children: any
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const {t} = useTranslation();
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const auth = useAuth();
    return (
      <div className="w-screen h-screen" aria-label="Layout">
        <div className="w-full h-full flex flex-col">
          <Header />
          <div className={`flex-[1] w-full overflow-y-auto ${styles.layout}`} aria-label="Content">
            <Container className="h-full">{children}</Container>
          </div>
          {auth.user && (
            <div className="lg:hidden block">
              <Divider orientation="horizontal" />
              <div className="flex items-center justify-between mt-1">
                <button
                  className="w-1/5"
                  onClick={() => {
                    navigate("/");
                  }}
                  style={{
                    color:
                      location.pathname === "/"
                        ? theme.palette.primary.light
                        : theme.palette.text.primary,
                  }}
                >
                  <div>
                    <Home />
                    <p className="text-[8px]">{t(`Bảng tin`)}</p>
                  </div>
                </button>
                <button
                  className="w-1/5"
                  onClick={() => {
                    navigate("/explore");
                  }}
                >
                  <div>
                    <Explore />
                    <p className="text-[8px]">{t(`Khám phá`)}</p>
                  </div>
                </button>
                <button
                  className="w-1/5"
                  onClick={() => {
                    navigate("/messages");
                  }}
                >
                  <div>
                    <Email />
                    <p className="text-[8px]">{t("Tin nhắn")}</p>
                  </div>
                </button>
                <button
                  className="w-1/5"
                  onClick={() => {
                    navigate("/notifications");
                  }}
                >
                  <div>
                    <Notifications />
                    <p className="text-[8px]">{t("Thông báo")}</p>
                  </div>
                </button>
                <button
                  className="w-1/5"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <div>
                    <Person />
                    <p className="text-[8px]">{t("Tài khoản")}</p>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
export default memo(Layout);