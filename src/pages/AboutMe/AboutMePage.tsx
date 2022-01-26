import React, { FC, useEffect, useState } from "react";
import MainInfoService from "@services/MainInfoService";

const AboutMePage: FC = () => {
    const [mainInfo, setMainInfo] = useState({ name: "" });

    useEffect(() => {
        fetchMainInfo().then((r) => {});
    }, []);

    async function fetchMainInfo() {
        const mainInfo = await MainInfoService.get();
        setMainInfo(mainInfo);
    }

    return <div>My name is {mainInfo.name}</div>;
};

export default AboutMePage;
