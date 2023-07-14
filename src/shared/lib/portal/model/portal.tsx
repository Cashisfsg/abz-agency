import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("modals-root")!;

export function Portal({ children }: PropsWithChildren) {
    return ReactDOM.createPortal(children, portalRoot);
}
