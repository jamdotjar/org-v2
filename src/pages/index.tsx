import { useControls } from "leva";
import { useState } from "react";
import Scene from "../components/scenes/index";
import CanvasLayout from "../components/canvas/index";
import Layout from "../components/layout/index";
import GlobalStyles from "../components/GlobalStyles";
import Sidebar from "../components/layout/Sidebar";
import { modelOptions } from '../components/modelManager'
export default function Home() {
    const [model, setModel] = useState(modelOptions[0]);

    return (
        <>
            <Sidebar modelType={model} setModelType={setModel} modelOptions={modelOptions} />
            <Layout title={"First"}>
                <CanvasLayout>
                     <Scene modelType={model} />
                </CanvasLayout>
            </Layout>
            <GlobalStyles />
        </>
    );
}