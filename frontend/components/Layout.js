import NavBar from "./NavBar";
import Seo from "../components/Seo";

import { useRouter } from "next/router";

import { Fragment } from "react";

export default function Layout({ children }) {
    const router = useRouter();
    //const routerObj = { '/': 'Home', '/about': 'About' }
    //console.log(typeof(router.pathname))
    //{/*<Seo title={routerObj[router.pathname]} /> */}

    return (
        <Fragment>          
            <Seo title={router.pathname} />
            <NavBar />
            <div>{children}</div>
        </Fragment>
    )
}
