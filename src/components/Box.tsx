import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

const Box = (props: any) => {
	const meshRef = useRef()
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
	useFrame((state, delta) => (meshRef.current.rotation.x += delta))

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={(event: any) => setActive(!active)}
			onPointerOver={(event: any) => setHover(true)}
			onPointerOut={(event: any) => setHover(false)}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}

export default Box;