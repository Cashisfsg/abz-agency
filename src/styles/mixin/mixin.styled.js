import { css } from "styled-components";

export const direction = css`
    flex-direction: ${({ column }) => (column ? "column" : null)};
`;

export const height = css`
    height: ${(props) => (props["h-full"] ? "100%" : null)};
    height: ${({ h }) => h || "auto"};
`;

export const margin = css`
    margin: ${({ m }) => m || null};
    margin: ${(props) => (props["m-auto"] ? "0 auto" : null)};
    margin-left: ${({ ml, mx }) => ml || mx || null};
    margin-right: ${({ mr, mx }) => mr || mx || null};
    margin-top: ${({ mt, my }) => mt || my || null};
    margin-bottom: ${({ mb, my }) => mb || my || null};
`;

export const margin2 = (props, base = 16) => {
    const prefixes = {
        "m-": "margin",
        "mx-": "margin-inline",
        "mt-": "margin-top",
        "mr-": "margin-right",
        "mb-": "margin-bottom",
        "ml-": "margin-left",
    };

    const properties = Object.keys(props).filter((prop) => {
        return Object.keys(prefixes).some((prefix) => prop.match(prefix));
    });

    if (!properties.length) return null;

    const regex = new RegExp(
        `(?<=^(${Object.keys(prefixes).join("|")}))(\d+|\w+)`
    );
    const result = "";

    properties.forEach((prop) => {
        const size = prop.match(regex);
        const key = Object.keys(prefixes).find((prefix) => prop.match(prefix));
        console.log("key", key, "size:", size);
    });

    // console.log(regex);

    // const size = prop.match(/(?<=^m\-)(\d+|\w+)/);

    // console.log(prop);

    // if (typeof parseInt(size) === "number")
    //     return `${prefixes.prop}: calc(${size / base} * 1rem);`;
    // else if (typeof size === "string") {
    //     switch (size) {
    //         case "auto":
    //             return `
    //                 ${prefixes.prop}: 0 auto;
    //             `;
    //         default:
    //             return null;
    //     }
    // } else return null;
    return null;
};

export const padding = css`
    padding: ${({ p }) => p || null};
    padding-left: ${({ pl, px }) => pl || px || null};
    padding-right: ${({ pr, px }) => pr || px || null};
    padding-top: ${({ pt, py }) => pt || py || null};
    padding-bottom: ${({ pb, py }) => pb || py || null};
`;

export const width = css`
    width: ${(props) => (props["w-full"] ? "100%" : null)};
    width: ${(props) => (props["w-max"] ? "max-content" : null)};
    width: ${(props) => (props["w-fit"] ? "fit-content" : null)};
    width: ${(props) => (props["w-min"] ? "min-content" : null)};
    width: ${({ w }) => w || "auto"};
`;

export const weight = css`
    font-weight: ${({ regular }) => (regular ? 400 : null)};
    font-weight: ${({ medium }) => (medium ? 500 : null)};
    font-weight: ${(props) => (props["semi-bold"] ? 600 : null)};
    font-weight: ${({ bold }) => (bold ? 700 : null)};
    font-weight: ${(props) => (props["extra-bold"] ? 800 : null)};
`;
