import { Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, CssBaseline, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTranslation } from "react-i18next";
import Copyright from "@/components/Copyright/Copyright";
const Login = () => {
    const { t } = useTranslation();
    return (
        <div className="w-full h-full">
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t(`Đăng nhập vào SnapFoto`)}
                </Typography>
                <Box component="form" noValidate onSubmit={() => { }} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={t(`Địa chỉ email`)}
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={t(`Mật khẩu`)}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label={t("Ghi nhớ đăng nhập")}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {t(`Đăng nhập`)}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to={"#"}>
                                {t("Quên mật khẩu ?")}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to={"#"}>
                                {t("Bạn chưa có tài khoản ? Đăng ký ngay")}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{
                my: 1
            }}>
                <Copyright />
            </Box>
        </div>
    )
}

export default Login