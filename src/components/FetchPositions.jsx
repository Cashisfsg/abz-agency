import React from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchPositions } from "../services/positions.service";
import InputRadio from "./UI/InputRadio";
import Spinner from "./Spinner";

const FetchPositions = ({ register, ...props }) => {
    const { data, status, error } = useQuery(["positions"], fetchPositions, {
        refetchOnWindowFocus: false
    });

    if (status === "error") return <pre>{JSON.stringify(error)}</pre>;
    if (status === "loading") return <Spinner />;

    return data?.positions.map(position => (
        <InputRadio
            key={position?.id}
            register={register}
            position={position}
            {...props}
        />
    ));
};

export default FetchPositions;
