import { changeTheme } from "@/stores/themeSlice"
import { Email, Explore, Notifications, Person, WbSunny } from "@mui/icons-material"
import { Container, Grid, IconButton, TextField, Typography } from "@mui/material"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { Link, useLocation } from "react-router-dom"
const Header = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const {pathname} = useLocation()
    return (
        <div className={`${['/'].includes(pathname) ? 'shadow' : ''}`}>
            <Container>
                <Grid container>
                    <Grid item xs={11} lg={3}>
                        <Link to={'/'}><Typography variant="h4">SnapFoto</Typography></Link>
                    </Grid>
                    <Grid item xs={0} lg={6}>
                        <TextField size="small" placeholder="Tìm kiếm" />
                    </Grid>
                    <Grid item xs={1} lg={3}>
                        <IconButton title={t(`Khám phá`)} onClick={() => {
                            dispatch(changeTheme())
                        }}>
                            <Explore />
                        </IconButton>
                        <IconButton onClick={() => {
                            dispatch(changeTheme())
                        }}>
                            <WbSunny />
                        </IconButton>
                        <IconButton onClick={() => {
                            dispatch(changeTheme())
                        }}>
                            <Email />
                        </IconButton>
                        <IconButton onClick={() => {
                            dispatch(changeTheme())
                        }}>
                            <Notifications />
                        </IconButton>
                        <IconButton onClick={() => {
                            dispatch(changeTheme())
                        }}>
                            <Person />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default memo(Header)