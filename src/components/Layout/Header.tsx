import { useAuth } from "@/lib/auth";
import { changeTheme } from "@/stores/themeSlice";
import {
    AppRegistration,
    Close,
    Email,
    Explore,
    Login,
    Logout,
    Menu,
    Notifications,
    Person,
    Search,
    Settings,
    WbSunny
} from "@mui/icons-material";
import {
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Typography,
} from "@mui/material";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();

  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);

  const toggleMenuMobile = () => {
    setOpenMenuMobile(!openMenuMobile);
  };
  return (
    <div className={`${["/"].includes(pathname) ? "shadow" : ""}`}>
      <Container>
        <div className="flex items-center justify-between">
          <div aria-label="Logo">
            <Link to={"/"}>
              <Typography variant="h6">SnapFoto</Typography>
            </Link>
          </div>
          <div aria-label="Center" className="hidden lg:block p-2">
            <SearchComponent />
          </div>
          {/* Icon loggedin */}
          <div className="flex items-center hidden lg:block">
            <IconButton
              title={t(`Khám phá`)}
              onClick={() => {
                navigate('/explore')
              }}
            >
              <Explore />
            </IconButton>
            <IconButton
              title={t(`Sáng/tối`)}
              onClick={() => {
                dispatch(changeTheme());
              }}
            >
              <WbSunny />
            </IconButton>
            {/* Logged in */}
            {auth.user && (
              <>
                <IconButton
                  title={t("Tin nhắn")}
                  onClick={() => {
                    dispatch(changeTheme());
                  }}
                >
                  <Email />
                </IconButton>
                <IconButton
                  title={t("Thông báo")}
                  onClick={() => {
                    dispatch(changeTheme());
                  }}
                >
                  <Notifications />
                </IconButton>
                <IconButton
                  title={t("Tài khoản")}
                  onClick={() => {
                    dispatch(changeTheme());
                  }}
                >
                  <Person />
                </IconButton>
              </>
            )}
            {!auth.user && (
              <>
                <Button color="secondary" className="ml-2" onClick={() => {
                    navigate('/auth/login')
                }}>
                  <Typography>Đăng nhập</Typography>
                </Button>
                <Button variant="contained" color="secondary" onClick={() => {
                    navigate('/auth/register')
                }}>
                  <Typography>Đăng ký</Typography>
                </Button>
              </>
            )}
          </div>
          {/* Hamberger mobile */}
          <div className="block lg:hidden">
            <IconButton onClick={() => toggleMenuMobile()}>
              <Menu />
            </IconButton>
            <Drawer
              PaperProps={{
                sx: {
                  width: "100%",
                },
              }}
              anchor="right"
              open={openMenuMobile}
              onClose={() => toggleMenuMobile()}
            >
              <div>
                <IconButton
                  onClick={() => {
                    toggleMenuMobile();
                  }}
                  size="large"
                >
                  <Close />
                </IconButton>
              </div>
              <div className="px-5">
                <div aria-label="Search" className="w-full">
                  <SearchComponent />
                </div>
              </div>
              <Divider sx={{ my: 2 }} orientation="horizontal" />
              <div aria-label="Menu item">
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      dispatch(changeTheme());
                    }}
                  >
                    <ListItemIcon>
                      <WbSunny />
                    </ListItemIcon>
                    <ListItemText>{t`Sáng / Tối`}</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      ⌘L
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings />
                    </ListItemIcon>
                    <ListItemText>{t("Thiết lập")}</ListItemText>
                  </MenuItem>
                  <Divider sx={{ my: 2 }} orientation="horizontal" />
                  {auth.user && (
                    <MenuItem>
                      <ListItemIcon>
                        <Logout />
                      </ListItemIcon>
                      <ListItemText>{t("Đăng xuất")}</ListItemText>
                    </MenuItem>
                  )}
                  {!auth.user && (
                    <>
                      <MenuItem
                        onClick={() => {
                          navigate("/auth/login");
                          toggleMenuMobile();
                        }}
                      >
                        <ListItemIcon>
                          <Login />
                        </ListItemIcon>
                        <ListItemText>{t("Đăng nhập")}</ListItemText>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          navigate("/auth/register");
                        }}
                      >
                        <ListItemIcon>
                          <AppRegistration />
                        </ListItemIcon>
                        <ListItemText>{t("Đăng ký")}</ListItemText>
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </div>
            </Drawer>
          </div>
        </div>
      </Container>
    </div>
  );
};

const SearchComponent = () => {
  const { t } = useTranslation();
  return (
    <Paper
      component="form"
      sx={{
        p: "0 8px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        boxShadow: "none",
        border: "1px solid #eee",
      }}
    >
      <input
        className="w-full outline-none px-2 bg-transparent"
        placeholder={t(`Tìm kiếm từ khoá`)}
      />
      <Divider sx={{ height: 20, m: 0.5 }} orientation="vertical" />
      <IconButton
        size="small"
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
};
export default memo(Header);
