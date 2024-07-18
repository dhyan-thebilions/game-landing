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

    const [devicePixelRatio, setDevicePixelRatio] = useState(
        window.devicePixelRatio
    );
    useEffect(
        function () {
            // A function which will update the device pixel ratio of the Unity
            // Application to match the device pixel ratio of the browser.
            const updateDevicePixelRatio = function () {
                setDevicePixelRatio(window.devicePixelRatio);
            };
            // A media matcher which watches for changes in the device pixel ratio.
            const mediaMatcher = window.matchMedia(
                `screen and (resolution: ${devicePixelRatio}dppx)`
            );
            // Adding an event listener to the media matcher which will update the
            // device pixel ratio of the Unity Application when the device pixel
            // ratio changes.
            mediaMatcher.addEventListener("change", updateDevicePixelRatio);
            return function () {
                // Removing the event listener when the component unmounts.
                mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
            };
        },
        [devicePixelRatio]
    );


    return (
        <React.Fragment>
            {!isLoaded && <LoadingScreen progress={loadingProgression * 100} />}
            {/* {shouldLoad && ( */}
            <Unity
                unityProvider={unityProvider}
                style={{
                    width: "100%",
                    height: "100%",
                    display: isLoaded ? "block" : "none",
                }}
                devicePixelRatio={devicePixelRatio}
            />
            {/* )} */}
        </React.Fragment>
    );
};

export default GamePage;
