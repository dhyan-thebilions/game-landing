import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import LoadingScreen from "../../components/Loading";

const GamePage = () => {
    const { unityProvider, unload, loadingProgression, isLoaded } =
        useUnityContext({
            loaderUrl: "unity/Build/testing.loader.js",
            dataUrl: "unity/Build/testing.data.unityweb",
            frameworkUrl: "unity/Build/testing.framework.js.unityweb",
            codeUrl: "unity/Build/testing.wasm.unityweb",
            companyName: "Unity",
            productName: "WebGL Player",
            productVersion: "1.0",
        });

    // const [shouldLoad, setShouldLoad] = useState(false);

    // useEffect(() => {
    //     const delay = 10000; // Delay in milliseconds (3000ms = 3 seconds)
    //     const timer = setTimeout(() => {
    //         setShouldLoad(true);
    //     }, delay);

    //     return () => {
    //         clearTimeout(timer);
    //         unload()
    //             .then(() => {
    //                 console.log("Unity unloaded successfully.");
    //             })
    //             .catch((error) => {
    //                 console.error("Error unloading Unity:", error);
    //             });
    //     };
    // }, [unload]);

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
            {!isLoaded && <LoadingScreen progress={loadingProgression * 100} />}
            {/* {shouldLoad && ( */}
            <Unity
                unityProvider={unityProvider}
                style={{
                    width: "100%",
                    height: "100%",
                    visibility: isLoaded ? "visible" : "hidden",
                }}
            />
            {/* )} */}
        </React.Fragment>
    );
};

export default GamePage;
