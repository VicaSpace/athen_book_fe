import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTab } from '../../redux/slices/generalInformationSlice'
import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArchiveIcon from '@mui/icons-material/Archive'


const BottomNavigationBar = () => {
    // const { currentTab } = useSelector((state) => state.generalInformation)
    const [currentTab, setCurrentTab] = React.useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ref = React.useRef(null)
    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0
    }, [currentTab])

    const navigateToNewPage = (pageId) => {
        switch (pageId) {
        case 0:
            navigate('/home')
            return
        case 1:
            navigate('/search')
            return
        case 2:
            navigate('/mybook')
            return
        }
    }
    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={currentTab}
                    onChange={(_, newValue) => {
                        navigateToNewPage(newValue)
                        dispatch(setCurrentTab(newValue))
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<FavoriteIcon/>} />
                    <BottomNavigationAction label="Search" icon={<ArchiveIcon/>} />
                    <BottomNavigationAction label="My Book" icon={<ArchiveIcon/>} />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default BottomNavigationBar