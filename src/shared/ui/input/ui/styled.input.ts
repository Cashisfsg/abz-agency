import styled from "styled-components";

export const StyledInputFile = styled.label`
    position: relative;
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    /* grid-template-rows: 54px; */

    width: 100%;
    max-width: 100%;
    height: 54px;

    cursor: pointer;

    & > button {
        height: 100%;
        padding-inline: 1rem;

        font-family: Nunito;
        font-size: 1rem;
        line-height: 1.625;

        color: rgba(0, 0, 0, 0.87);
        background-color: transparent;

        border-radius: 0.25rem 0px 0px 0.25rem;
        border: 1px solid rgba(0, 0, 0, 0.87);

        cursor: pointer;

        ::first-letter {
            text-transform: uppercase;
        }
    }

    & > span {
        display: inline-block;
        text-align: center;
        /* line-height: 54px; */
        vertical-align: middle;

        /* grid-template-columns: minmax(0, 1fr); */

        height: 100%;
        width: 100%;
        /* width: fit-content; */
        /* flex: 1 1 auto; */

        place-content: center left;

        align-content: center;
        align-self: center;

        padding-inline: 1rem;

        color: #7e7e7e;
        border-right: 1px solid #d0cfcf;
        border-top: 1px solid #d0cfcf;
        border-bottom: 1px solid #d0cfcf;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    :has(input[type="file"][aria-invalid="true"]) button {
        border: 2px solid #cb3d40;
    }

    :has(input[type="file"][aria-invalid="true"]) span {
        border-right: 2px solid #cb3d40;
        border-top: 2px solid #cb3d40;
        border-bottom: 2px solid #cb3d40;
    }

    :has(output) output {
        position: absolute;
        top: calc(100% + 0.25rem);
        left: 1rem;

        font-size: 0.75rem;
        color: #cb3d40;

        ::first-letter {
            text-transform: uppercase;
        }
    }
`;
