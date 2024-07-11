import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const GamePage = () => {
    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "unity/Build/testing.loader.js",
        dataUrl: "unity/Build/testing.data.unityweb",
        frameworkUrl: "unity/Build/testing.framework.js.unityweb",
        codeUrl: "unity/Build/testing.wasm.unityweb",
        companyName: "Unity",
        productName: "WebGL Player",
        productVersion: "1.0",
    });

    useEffect(() => {
        return () => {
            unload()
                .then(() => {
                    console.log("Unity unloaded successfully.");
                })
                .catch((error) => {
                    console.error("Error unloading Unity:", error);
                });
        };
    }, [unload]);

    return (
        <React.Fragment>
            <Unity
                unityProvider={unityProvider}
                style={{ width: "100%", height: "100%" }}
            />
        </React.Fragment>
    );
};

export default GamePage;
