import { useControls } from "leva";
import Scene from "../components/scenes/index";
import CanvasLayout from "../components/canvas/index";
import Layout from "../components/layout/index";
import GlobalStyles from "../components/GlobalStyles";
import Sidebar from "../components/layout/Sidebar";

export default function Home() {
    
    const { model } = useControls({
        model: {value:"Endoplasmic-reticulum", options: ["Endoplasmic-reticulum", "Nucleus", "Golgi", "Mitochondria"]}
    });

    return (
        <>
            <Sidebar/>

            <Layout title={"First"}>
                <CanvasLayout>
                    <Scene modelType={model} />
                </CanvasLayout>
            </Layout>
            <GlobalStyles />
        </>
    );
}
