import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { ER } from './org/Endoplasmic_reticulum.jsx'
import { Nucleus } from './org/Cosmic_cell.jsx'
import { Golgi } from './org/Golgi_apparatuscomplex.jsx'
import  { Mitochondria } from './org/Mitochondria.jsx'
interface Props {
    modelType: 'Endoplasmic-reticulum' | 'Nucleus' | 'Golgi'| 'Mitochondria';
  }
  

export default function Display_Organelle({ modelType }: Props) {
  let ModelToRender;

  switch(modelType) {
    case 'Endoplasmic-reticulum':
      ModelToRender = ER;
      break;
    case 'Nucleus':
      ModelToRender = Nucleus;
      break;
    case 'Golgi':
      ModelToRender = Golgi;
      break;
    case 'Mitochondria':
      ModelToRender = Mitochondria;
      break;
    default:
      ModelToRender = null;
  }

  return (
    <>
        {ModelToRender && <ModelToRender />}
    </>
  )
}