import MainNavigation from './main-navigation'
import classes from './layout.module.css'
import type { ChildrenProps } from '@/types/next_defaults'

function Layout(props: ChildrenProps) {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout
