import React from "react";
import styled from "styled-components";

const InputTypeFile = React.forwardRef(({ fileName, ...props }, ref) => {
    return (
        <SttyledInputTypeFile>
            <input
                ref={ref}
                accept={".jpg, .jpeg"}
                multiple={false}
                onChange={(e) => console.log(e.target.files)}
                // aria-invalid={true}
                {...props}
            />
            <span>Upload</span>
            <output>{fileName || "Upload tour photo"}</output>
        </SttyledInputTypeFile>
    );
});

export default InputTypeFile;

const SttyledInputTypeFile = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    height: 54px;
    width: 100%;
    cursor: pointer;

    & > span {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 16px;
        font-size: 16px;
        /* line-height: 26px; */
        text-align: center;
        border: ${({ theme }) => `1px solid ${theme.colors.text}`};
        border-radius: 4px 0px 0px 4px;
    }

    & > output {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 16px;
        border: 1px solid #d0cfcf;
        border-left: none;
        border-radius: 0px 4px 4px 0px;
    }

    & > input {
        /* display: none; */
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        cursor: pointer;

        /* ::-webkit-file-upload-button {
            border: none;
            content: "Upload";
        } */

        ::file-selector-button {
            background-color: red;
            content: "dads";
        }

        &[aria-invalid="true"] ~ span {
            border: 2px solid #cb3d40;
        }
        &[aria-invalid="true"] ~ output {
            border: 2px solid #cb3d40;
            border-left: none;
        }
    }
`;
