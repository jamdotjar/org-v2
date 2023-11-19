import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { ER } from '../models/Endoplasmic_reticulum.jsx'
import { Nucleus } from '../models/Cosmic_cell.jsx'
import { Golgi } from '../models/Golgi_apparatuscomplex.jsx'
import  { Mitochondria } from '../models/Mitochondria.jsx'
import { Lysosome } from '../models/Lysosome.jsx'
import { Ribosome } from '../models/Ribosome.jsx'
import { modelConfig } from '../modelManager';

export default function Display_Organelle({ modelType }: { modelType: string }) {
  const ModelToRender = modelConfig[modelType as keyof typeof modelConfig].component;
  return (
    <>
        {ModelToRender && <ModelToRender />}
    </>
  )
}