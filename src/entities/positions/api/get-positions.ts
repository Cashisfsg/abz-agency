export const getPositions = async () => {
    const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
    );

    const { positions } = await response.json();

    console.log(positions);

    return positions;
};
