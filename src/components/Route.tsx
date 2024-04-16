import { ReactNode } from "react";
import { useRouterContext } from "../context/Router";

const Route = (props: { children: ReactNode, route: string }) => {
    const router = useRouterContext();
    return router.value !== props.route ? null : props.children;
}


export default Route;